# sass-rhythm
[![Build Status](https://travis-ci.org/swisnl/sass-rhythm.svg?branch=master)](https://travis-ci.org/swisnl/sass-rhythm)

Helper function for maintaining rhythm in your css

## Install
```cli
yarn add sass-rhythm
```
or
```cli
npm install --save-dev sass-rhythm
```

## Usage
```css
// Optionally change these variables
$sass-rhythm: 8;
$sass-rhythm-root-font-size: 16px;

// Include this library
@import "path/to/sass-rhythm/rhythm";
```

Add the following to your base.scss and play around with this to satisfy your needs.
```css
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
