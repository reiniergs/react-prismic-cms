import React, { Component } from 'react';
import Prismic from 'prismic-javascript';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';
import Context from './../Prismic/context';

export default function QueryNot(props) {
    return (
        <Context.Consumer>
            { context => <QueryAtImplementation {...context} {...props} /> }
        </Context.Consumer>
    );
}

class QueryAtImplementation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            response: {},
        }
    }

    componentDidMount() {
        this.fetch();
    }

    componentDidUpdate(prevProps) {
        const { path: prevPath, value: prevValue } = prevProps;
        const { path, value } = this.props;
        if (prevPath !== path || prevValue !== value) {
            this.fetch();
        }
    }

    fetch() {
        const {
            repo,
            path,
            value,
        } = this.props;

        this.setState({ isLoading: true })

        Prismic.getApi(`https://${repo}.prismic.io/api/v2`).then((api) => {
            return api.query(
                Prismic.Predicates.not(path, value),
            );
        }).then((response) => {
            this.setState({ response, isLoading: false });
        });
    }

    render() {
        const { response, isLoading } = this.state;
        const { component: Component, ...rest } = this.props;

        return <Component {...rest} response={response} isLoading={isLoading} />;
    }
}

QueryNot.propTypes = {
    path: PropTypes.string.isRequired,
    value: PropTypes.any,
    component: PropTypes.func,
};

QueryNot.defaultProps = {
    value: '',
    component: props => <ReactJson src={props.response} />
};
