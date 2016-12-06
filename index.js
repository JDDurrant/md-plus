"use strict"

var
md = module.exports.render = require('marked'),
read = require('read-file');

module.exports.renderFile = function(file) {
	var data = read.sync(file).toString();
	return md(data);
};
