#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
// https://unix.stackexchange.com/questions/65235/universal-node-js-shebang
module.exports = inPigLatin;
var args = process.argv.slice(2);

if (args.length){
    process.stdout.write(inPigLatin(args.join(' ')) + '\n');
    process.exit();
}

process.stdin.setEncoding('utf8');

process.stdin.on('readable', function(){
    var chunk = process.stdin.read();
    if (chunk !== null)
        process.stdout.write(inPigLatin(chunk));
});

//
// Pig Latin:
// This is what you get if you require('piglatin')
//

function beginsWithVowel(word){
    return /^[aeiou]/i.test(word);
}
function capitalize(word, yes){
    return yes ? (word[0].toUpperCase() + word.slice(1).toLowerCase()) : word;
}
function yyFilter(word){
    return word.replace(/^(.*)yyay$/i, "$1yay");
}
function swap(word){
    return word.replace(/(.*?)([aeiou].*)/i, "$2$1ay");
}
function getLastPunc(word){
    try       { return word.match(/(\W+)$/).index }
    catch (e) { return ''; }
}

function word2pig(word, _, __, punc){
    if (/\s/.test(word)) return word;

    var upperCase = word[0] == word[0].toUpperCase(),
        puncIndex = getLastPunc(word);

    if (puncIndex && punc == undefined)
        return word2pig(word.slice(0, puncIndex), _, __, word.slice(puncIndex))

    return yyFilter(capitalize(
        beginsWithVowel(word) ? word + 'yay' : swap(word)
    , upperCase)) + (punc || '');
}

function inPigLatin(sentence){
    return sentence.split(' ').map(word2pig).join(' ');
}
