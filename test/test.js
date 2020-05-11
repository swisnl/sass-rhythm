const path = require('path');
const assert = require('assert');
const sassTrue = require('sass-true');
const describe = require("mocha");

const sassFile = path.join(__dirname, 'test.scss');
sassTrue.runSass({file: sassFile}, describe, it);
