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
    return /\W$/.test(word) ? word.slice(-1) : '';
}

function word2pig(word, _, __, punc){
    var upperCase = word[0] == word[0].toUpperCase();

    if (getLastPunc(word) && punc == undefined)
        return word2pig(word.slice(0, -1), _, __, getLastPunc(word))

    return yyFilter(capitalize(
        beginsWithVowel(word) ? word + 'yay' : swap(word)
    , upperCase)) + (punc || '');
}

function inPigLatin(sentence){
    return sentence.split(' ').map(word2pig).join(' ');
}

String.prototype.pigLatinTransform = function(){
    return inPigLatin(this);
};

module.exports = inPigLatin;
