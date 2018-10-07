# React Prismic CMS

Set of declarative component to query content published in the headless CMS prismic.io

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

