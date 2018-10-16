import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.css';

function CardItems({ results }) {
    return results.map(({ data, id }) => (
        <div key={id} className="prismic-cms-card-item">
            <div className="prismic-cms-card-item_img-container">
                <img src={data.image.url} alt="" />
            </div>
            <div className="prismic-cms-card-item_description-container">
                <h1 className="prismic-cms-card-item_header">{data.name[0].text}</h1>
                <p className="prismic-cms-card-item_description">{data.description[0].text}</p>
            </div>
        </div>
    ));
}

export default function ExampleCard(props) {
    const { className, style, title, response } = props;

    const getContainerClassNames = () => classnames('prismic-cms-card', className);

    if (response && Array.isArray(response.results)) {
        return (
            <div className={getContainerClassNames()} style={style}>
                <div className="prismic-cms-card_header">
                    <span>{title}</span>
                </div>
                <div className="prismic-cms-card_content">
                    <CardItems results={response.results} />
                </div>
            </div>
        );
    }
    return null;
};

ExampleCard.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.node,
    response: PropTypes.object,
};

ExampleCard.defaultProps = {
    className: undefined,
    style: undefined,
    title: null,
    response: null,
};
