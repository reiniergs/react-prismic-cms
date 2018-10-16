import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.css';

function CardItems({ results }) {
    return results.map(({ data, id }) => (
        <div key={id} className="prismic-cms-vegetables-card">
            <div className="prismic-cms-vegetables-card_img-container">
                <img className="prismic-cms-vegetables-card_img" src={data.image.url} alt="" />
            </div>
            <div className="prismic-cms-vegetables-card_description-container">
                <h1 className="prismic-cms-vegetables-card_header">{data.name[0].text}</h1>
                <p className="prismic-cms-vegetables-card_description">{data.description[0].text}</p>
            </div>
        </div>
    ));
}

export default function VegetablesCard(props) {
    const { className, style, title, results } = props;

    const getContainerClassNames = () => classnames('prismic-cms-card', className);

    if (results.length) {
        return (
            <div className={getContainerClassNames()} style={style}>
                <div className="prismic-cms-card_header">
                    <span>{title}</span>
                </div>
                <div className="prismic-cms-card_content">
                    <CardItems results={results} />
                </div>
            </div>
        );
    }
    return null;
};

VegetablesCard.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.node,
    results: PropTypes.array,
};

VegetablesCard.defaultProps = {
    className: undefined,
    style: undefined,
    title: 'Vegetables',
    results: [],
};
