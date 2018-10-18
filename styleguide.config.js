/* eslint-disable */
const path = require('path');
const withRainbowStyles = require('react-rainbow-styleguide');
const version = require('./package.json').version;

module.exports = withRainbowStyles({
    version,
    title: 'react-prismic-cms',
    ignore: ['**/__tests__/**', '/node_modules/**'],
    require: [
        path.resolve(__dirname, 'src/library/setup.js'),
    ],
    skipComponentsWithoutExample: true,
    pagePerSection: true,
    sections: [
        {
            name: 'Query Components',
            components: 'src/components/**/index.js',
            sectionDepth: 1,
            usageMode: 'expand',
        },
        {
            name: 'Docs Components',
            components: 'src/library/**/index.js',
            sectionDepth: 1,
            usageMode: 'expand',
        },
    ],
});
