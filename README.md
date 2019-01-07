<h2 align="center">
<a href="https://react-prismic-cms.firebaseapp.com/" rel="noopener" target="_blank">React Prismic CMS</a>
</h2>

Set of declarative components to query content published in the headless CMS prismic.io

[![CircleCI](https://circleci.com/gh/reiniergs/react-prismic-cms.svg?style=svg)](https://circleci.com/gh/reiniergs/react-prismic-cms)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/react-prismic-cms.svg)](https://badge.fury.io/js/react-prismic-cms)

## Installation

```bash
$ yarn add react-prismic-cms
```        

## Usage

```jsx
import React from "react";
import ReactDOM from "react-dom";
import Prismic from "react-prismic-cms/components/Prismic";
import QueryAt from "react-prismic-cms/components/QueryAt";
import Vegetables from "./vegetables";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Prismic repo="react-prismic-cms">
        <QueryAt
          path="document.type"
          value="vegetables"
          component={Vegetables}
        />
      </Prismic>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

[![Edit 4x20k907n0](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/4x20k907n0)

