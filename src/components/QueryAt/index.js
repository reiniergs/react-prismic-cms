import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';
import Query from './../Query';

export default function QueryAt(props) {
    return <Query {...props} predicate="at" />
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
