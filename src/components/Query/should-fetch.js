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

export default function shouldFetch(prevProps, currentProps) {
    return PROPS.some(prop => prevProps[prop] !== currentProps[prop]);
}
