"use strict";

const http = require("http");
const fs = require('fs');
const url = require("url");
const path = require('path');
const cp = require("child_process");

http.createServer(function onRequest(request, response) {

	var _get = url.parse(request.url, true).query;

	process.on('message', function(m) {
		console.log(m);
	});

	process.send(_get);

}).listen(8888);

