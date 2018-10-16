import React from 'react';
import Context from './context';

export default function Prismic(props) {
    const { repo, ref, children } = props;
    return (
        <Context.Provider value={{ repo, ref }}>
            {children}
        </Context.Provider>
    );
}
