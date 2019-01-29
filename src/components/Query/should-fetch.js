const PROPS = [
    'path',
    'value',
    'after',
    'fetch',
    'fetchLinks',
    'orderings',
    'page',
    'pageSize',
];

function isPropAnArray(prevProp, currentProp) {
    return (Array.isArray(prevProp) && Array.isArray(currentProp)) || false;
}

function isNotEqual(prevProp, currentProp) {
    return prevProp.join('') !== currentProp.join('');
}

export default function shouldFetch(prevProps, currentProps) {
    return PROPS.some((prop) => {
        if (isPropAnArray(prevProps[prop], currentProps[prop])) {
            return isNotEqual(prevProps[prop], currentProps[prop]);
        }
        return prevProps[prop] !== currentProps[prop];
    });
}
