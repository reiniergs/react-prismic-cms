# React Prismic CMS

Set of declarative component to query content published in the headless CMS prismic.io

[![CircleCI](https://circleci.com/gh/reiniergs/react-prismic-cms.svg?style=svg)](https://circleci.com/gh/reiniergs/react-prismic-cms)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/react-prismic-cms.svg)](https://badge.fury.io/js/react-prismic-cms)

## Installation

```bash
$ yarn add react-prismic-cms
```        

## Usage

```html
<Prismic repo={your-repo-name}>
    <QueryAt path="document.type" value="vegetables" component={component}/>
</Prismic>
```

The component is going to be instantiated inside of QueryAt and is going to receive 
prismic `response`.  

