import Prismic from 'prismic-javascript';

export default function resolveMultiPredicates(multiPredicates) {
    return multiPredicates.map((item) => {
        const { predicate, path, value } = item;
        return Prismic.Predicates[predicate](path, value);
    });
}
