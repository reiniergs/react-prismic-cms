import React from 'react';
import PropTypes from 'prop-types';
import Query from '../Query';

/**
* Whit the QueryFulltext you can search a document or a text fragment for either
* just one term or for multiple terms. To search for more than one term, put all
* the terms into a string with spaces between them.
* The full document search and specific field search works on the following fields:
* Rich Text, Title, Key Text, UID, Select.
*/
export default function QueryFullText(props) {
    return <Query {...props} predicate="fulltext" />;
}

QueryFullText.propTypes = {
    /** Defines what the query will be looking for. The different paths available are:
     * 'document' and 'my.{custom-type}.{field}'.
     * The last path is in the format 'my.{custom-type}.{field}'
     * where {custom-type} is the API ID of the custom type you want to
     * query and {field} is the API ID of the specific field in the custom type that you need. */
    path: PropTypes.string.isRequired,
    /** Defines the value that the query is looking for. */
    value: PropTypes.string,
    /** The componet used to render the queried data. */
    component: PropTypes.func,
    /** It will remove all the documents except for those after the specified document in the list.
     * By reversing the orderings in your query, you can use this same method to retrieve all
     * the documents before the specified document.
     */
    after: PropTypes.string,
    /** It is used to make queries faster by only retrieving the specified field(s). */
    fetch: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
    ]),
    /** It allows you to retrieve a specific content field from a linked document and
     * add it to the document response object.
     * This props needs to take the following format:
     * '{custom-type}.{field}' or ['{custom-type}.{field}', '{other-custom-type}.{field}'] */
    fetchLinks: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
    ]),
    /** It will order the results by the specified field(s).
     * You can specify as many fields as you want.
     * It will automatically order the field from lowest to highest e.g('[my.product.price]').
     * Use "desc" next to the field name to instead order it from greatest
     * to lowest e.g('[my.product.price desc]').
     * You can specify more than one field to order your results by. To do so,
     * simply add more than one field in the array e.g('[my.product.price, my.product.title]').
     * It is also possible to order documents by their first or
     * last publication dates e.g('[document.first_publication_date]'). */
    orderings: PropTypes.string,
    /** The page option defines the pagination for the result of your query.
     * This value defaults to "1", corresponding to the first page. */
    page: PropTypes.number,
    /** The pageSize option defines the maximum number of documents that the API
     * will return for your query. This value defaults to 20, max is 100. */
    pageSize: PropTypes.number,
};

QueryFullText.defaultProps = {
    value: '',
    component: undefined,
    after: undefined,
    fetch: undefined,
    fetchLinks: undefined,
    orderings: undefined,
    page: 1,
    pageSize: 20,
};
