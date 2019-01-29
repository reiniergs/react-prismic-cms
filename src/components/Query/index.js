/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Prismic from 'prismic-javascript';
import ReactJson from 'react-json-view';
import Context from '../Prismic/context';
import resolveMultiPredicates from './resolve-multi-predicates';
import shouldFetch from './should-fetch';
import makeCancelablePromise from './make-cancelable-promise';

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
    'lt',
    'gt',
    'dateAfter',
    'dateBefore',
    'dayOfMonth',
    'dayOfMonthAfter',
    'dayOfMonthBefore',
    'dayOfWeek',
    'dayOfWeekAfter',
    'dayOfWeekBefore',
    'month',
    'monthAfter',
    'monthBefore',
    'year',
    'hour',
    'hourAfter',
    'hourBefore',
];

export default function (props) {
    return (
        <Context.Consumer>
            {context => <Query {...context} {...props} />}
        </Context.Consumer>
    );
}

class Query extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
        };
    }

    componentDidMount() {
        this.fetch();
    }

    componentDidUpdate(prevProps) {
        if (shouldFetch(prevProps, this.props)) {
            this.fetch();
        }
    }

    componentWillUnmount() {
        this.cancelablePromise.cancel();
    }

    resolvePredicate() {
        const {
            predicate,
            path,
            value,
            multiPredicates,
        } = this.props;

        if (multiPredicates) {
            return resolveMultiPredicates(multiPredicates);
        }
        if (predicate === 'inRange') {
            return Prismic.Predicates.inRange(path, value.lowerLimit, value.upperLimit);
        }
        if (predicate === 'dateBetween') {
            return Prismic.Predicates.dateBetween(path, value.startDate, value.endDate);
        }
        if (VALID_PREDICATES.indexOf(predicate) !== -1) {
            return Prismic.Predicates[predicate](path, value);
        }
        return Prismic.Predicates.at(path, value);
    }

    queryPrismic() {
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

        return Prismic.getApi(`https://${repo}.prismic.io/api/v2`)
            .then(api => api.query(this.resolvePredicate(), {
                after,
                fetch,
                fetchLinks,
                lang,
                orderings,
                page,
                pageSize,
                ref,
            }));
    }

    fetch() {
        this.setState({ isLoading: true });
        this.cancelablePromise = makeCancelablePromise(
            this.queryPrismic(),
        );
        this.cancelablePromise
            .promise
            .then((response) => {
                this.setState({ response, isLoading: false });
            })
            .catch((error) => {
                if (!error.isCanceled) {
                    this.setState({ error, isLoading: false });
                }
            });
    }

    render() {
        const { response, error, isLoading } = this.state;
        const { component: RendererComponent, ...rest } = this.props;

        return (
            <RendererComponent
                {...rest}
                response={response}
                error={error}
                isLoading={isLoading}
            />
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
        'lt',
        'gt',
        'inRange',
        'dateAfter',
        'dateBefore',
        'dateBetween',
        'dayOfMonth',
        'dayOfMonthAfter',
        'dayOfMonthBefore',
        'dayOfWeek',
        'dayOfWeekAfter',
        'dayOfWeekBefore',
        'month',
        'monthAfter',
        'monthBefore',
        'year',
        'hour',
        'hourAfter',
        'hourBefore',
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
    component: ({ response }) => <ReactJson src={response} />,
    after: undefined,
    fetch: undefined,
    fetchLinks: undefined,
    orderings: undefined,
    page: 1,
    pageSize: 20,
    multiPredicates: undefined,
};
