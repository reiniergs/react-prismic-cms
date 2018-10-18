import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Prismic from 'prismic-javascript';
import ReactJson from 'react-json-view';
import Context from './../Prismic/context';
import resolveMultiPredicates from './resolve-multi-predicates';
import shouldFetch from './should-fetch';

const VALID_PREDICATES = [
    'at',
    'not',
    'any',
    'in',
    'fulltext',
    'has',
    'missing',
    'similar',
    'near',
];

export default function (props) {
    return (
        <Context.Consumer>
            { context => <Query {...context} {...props} /> }
        </Context.Consumer>
    );
}

class Query extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
        }
    }

    componentDidMount() {
        this.fetch();
    }

    componentDidUpdate(prevProps) {
        if (shouldFetch(prevProps, this.props)) {
            this.fetch();
        }
    }


    resolvePredicate() {
        const { predicate, path, value, multiPredicates } = this.props;
        if (multiPredicates) {
            return resolveMultiPredicates(multiPredicates);
        }
        if (VALID_PREDICATES.indexOf(predicate) !== -1) {
            return Prismic.Predicates[predicate](path, value);
        }
        return Prismic.Predicates.at(path, value);
    }

    fetch() {
        const {
            repo,
            lang,
            ref,
            after,
            fetch,
            fetchLinks,
            orderings,
            page,
            pageSize,
        } = this.props;

        this.setState({ isLoading: true });

        Prismic.getApi(`https://${repo}.prismic.io/api/v2`).then((api) => {
            return api.query(this.resolvePredicate(), {
                after,
                fetch,
                fetchLinks,
                lang,
                orderings,
                page,
                pageSize,
                ref,
            });
        }).then((response) => {
            this.setState({ response, isLoading: false });
        }).catch((error) => {
            this.setState({ error, isLoading: false });
        });
    }

    render() {
        const { response, error, isLoading } = this.state;
        const { component: Component, ...rest } = this.props;

        return (
            <Component
                {...rest}
                response={response}
                error={error}
                isLoading={isLoading} />
        );
    }
}

Query.propTypes = {
    predicate: PropTypes.oneOf([
        'at',
        'not',
        'any',
        'in',
        'fulltext',
        'has',
        'missing',
        'similar',
        'near',
    ]),
    path: PropTypes.string,
    value: PropTypes.any,
    component: PropTypes.func,
    after: PropTypes.string,
    fetch: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
    ]),
    fetchLinks: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
    ]),
    orderings: PropTypes.string,
    page: PropTypes.number,
    pageSize: PropTypes.number,
    multiPredicates: PropTypes.array,
};

Query.defaultProps = {
    predicate: 'at',
    path: 'document.type',
    value: '',
    component: props => <ReactJson src={props.response} />,
    after: undefined,
    fetch: undefined,
    fetchLinks: undefined,
    orderings: undefined,
    page: 1,
    pageSize: 20,
    multiPredicates: undefined,
}
