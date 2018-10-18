import Prismic from 'prismic-javascript';

export default function resolveMultiPredicates(multiPredicates) {
    return multiPredicates.map(({ predicate, path, value }) => {
        return Prismic.Predicates[predicate](path, value);
    });
}
