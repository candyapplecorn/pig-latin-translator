#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// https://unix.stackexchange.com/questions/65235/universal-node-js-shebang

var path = require('path'), pl;
try       { pl = require('pigLatin');               }
catch (e) { pl = require(path.resolve('pigLatin')); }
var args = process.argv.slice(2);

if (args.length){
    process.stdout.write(pl(args.join(' ')) + '\n');
    process.exit();
}

process.stdin.setEncoding('utf8');

process.stdin.on('readable', function(){
    var chunk = process.stdin.read();
    if (chunk !== null)
        process.stdout.write(pl(chunk));
});
