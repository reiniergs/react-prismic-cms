import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';
import Query from './../Query';

export default function QueryFullText(props) {
    return <Query {...props} predicate="fulltext" />
}

QueryFullText.propTypes = {
    path: PropTypes.string.isRequired,
    value: PropTypes.any,
    component: PropTypes.func,
};

QueryFullText.defaultProps = {
    value: '',
    component: props => <ReactJson src={props.response} />
};
