import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';
import Query from './../Query';

export default function QueryNot(props) {
    return <Query {...props} predicate="not" />
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
