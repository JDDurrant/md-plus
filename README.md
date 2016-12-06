# md-plus

> Markdown+ : Render Markdown strings and files

I was looking at Markdown modules on NPM and didn't find one that took files as input, so I decided to make my own. I used `marked` and `read-file`, so creating this module was fairly simple. It doesn't seem like much at the moment, but I'm looking into adding extra features to it.

## Installation

```sh
$ npm i jddurrant/md-plus
```

## Usage

```js
var md = require('md-plus');

// Render string
md.render('Hello, __World__!'); // '<p>Hello, <strong>World</strong>!</p>'

// Render file
md.renderFile('./README.md'); // '<h1>md-plus</h1><blockquote>...'
```
