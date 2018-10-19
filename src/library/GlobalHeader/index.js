import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Avatar from 'react-rainbow-components/components/Avatar';
import './styles.css';

export default function GlobalHeader(props) {
    const {
        className,
        children,
        style,
        title,
    } = props;

    const getContainerClassNames = () => classnames('prismic-cms-card_header', className);

    return (
        <header className={getContainerClassNames()} style={style}>
            <span className="rainbow-m-left_medium">
                {title}
            </span>
            <div className="rainbow-flex rainbow-align_center">
                {children}
                <Avatar
                    initials="JD"
                    initialsVariant="inverse"
                    variant="circle"
                    className="rainbow-m-horizontal_medium"
                />
            </div>
        </header>
    );
}

GlobalHeader.propTypes = {
    title: PropTypes.node,
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
};

GlobalHeader.defaultProps = {
    title: null,
    children: null,
    className: undefined,
    style: undefined,
};
