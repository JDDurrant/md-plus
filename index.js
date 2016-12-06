"use strict"

const
md = module.exports.render = require('marked'),
read = require('read-file');

module.exports.renderFile = file => {
	const data = read.sync(file).toString();
	return md(data);
};
