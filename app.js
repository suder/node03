"use strict";

const http = require("http");
const fs = require('fs');
const url = require("url");
const path = require('path');
const cp = require("child_process");


var child = cp.fork(__dirname + '/child.js');
    child.send("Привет...");
    child.on( 'message',  function (data) {
        console.log ( 'пришло: ', data);
    });


