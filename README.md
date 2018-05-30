# sass-rhythm
[![Build Status](https://travis-ci.org/swisnl/sass-rhythm.svg?branch=master)](https://travis-ci.org/swisnl/sass-rhythm)
[![npm](https://img.shields.io/npm/v/sass-rhythm.svg)](https://www.npmjs.com/package/sass-rhythm)
[![npm](https://img.shields.io/npm/dw/sass-rhythm.svg)](https://www.npmjs.com/package/sass-rhythm)
[![npm](https://img.shields.io/npm/l/sass-rhythm.svg)](https://www.npmjs.com/package/sass-rhythm)
[![Made by SWIS](https://img.shields.io/badge/%F0%9F%9A%80-made%20by%20SWIS-%23D9021B.svg)](https://www.swis.nl)


Sass helper functions for maintaining a vertical rhythm in your frontend design.

## Install
```cli
yarn add sass-rhythm
```
or
```cli
npm install --save-dev sass-rhythm
```

## Usage
```scss
// Optionally change these variables
$sass-rhythm: 4;
$sass-rhythm-root-font-size: 16px;

// Include this library
@import "~sass-rhythm";
```

Add the following to your base.scss and play around with this to satisfy your needs. 
```scss
html {
  font-size: sass-rhythm-relative-root-font-size();
}

body {
  line-height: sass-rhythm(3);
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0 0 sass-rhythm(2);
}

h1 {
  line-height: sass-rhythm(6);
}
h2 {
  line-height: sass-rhythm(5);
}
h3 {
  line-height: sass-rhythm(4);
}
```

## Options

The `sass-rhythm` function excepts two optional variables:

Variable | Default | Description
--- | --- | ---
`$multiplier` | 1 | This is how many times the rhythm is applied
`$offset-pixels` | 0 | This is how many pixels will be added or subtracted from the value