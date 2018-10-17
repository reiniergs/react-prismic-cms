import React from 'react';
import PropTypes from 'prop-types';
import Context from './context';

export default function Prismic(props) {
    const { repo, ref, lang, children } = props;
    return (
        <Context.Provider value={{ repo, ref, lang }}>
            {children}
        </Context.Provider>
    );
}

Prismic.propTypes = {
    /** The prismic repository name. */
    repo: PropTypes.string,
    /** The ref option defines which version of your content to query.
     * By default prismic will use the master ref
     * to retrieve the currently published documents. */
    ref: PropTypes.string,
    /** Defines the language code for the results of your query.
     * For example "en-us" for American English.
     * If no lang is provided, then the query will default to
     * the master language of the repository.
     * You can also pass the wilcard value * to specify that you want to query
     * documents in all available languages. **/
    lang: PropTypes.string,
    /**
     * This prop should not be visible in the documentation.
     * @ignore
     */
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.object,
    ]),
}

Prismic.defaultProps = {
    repo: undefined,
    ref: undefined,
    lang: undefined,
    children: null,
}
