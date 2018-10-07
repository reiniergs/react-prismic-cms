import React, { Component } from 'react';
import Prismic from 'prismic-javascript';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';
import Context from './../Prismic/context';

export default function QueryAt(props) {
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

    componentWillMount() {
        this.fetch();
    }

    componentDidUpdate(prevProps) {
        const { prevPath, prevValue } = prevProps;
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

        Prismic.getApi(`https://${repo}.prismic.io/api/v2`).then((api) => {
            return api.query(
                Prismic.Predicates.at(path, value),
            );
        }).then((response) => {
            this.setState({ response });
        });
    }

    render() {
        const { response } = this.state;
        const { component: Component } = this.props;
        return <Component response={response} />;
    }

}

QueryAt.propTypes = {
    path: PropTypes.string.isRequired,
    value: PropTypes.any,
    component: PropTypes.func,
};


QueryAt.defaultProps = {
    value: '',
    component: props => <ReactJson src={props.response} />
};
