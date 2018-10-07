/* eslint-disable */

module.exports = {
    ignore: ['**/__tests__/**', '/node_modules/**'],
    skipComponentsWithoutExample: true,
    pagePerSection: true,
    sections: [
        {
            name: 'Components',
            components: 'src/components/**/index.js',
            sectionDepth: 1,
            usageMode: 'expand',
        },
    ],
};
