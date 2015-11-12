app.filter('kebab', function (){
  return function (input){
    return typeof(input) == 'number' ? input : input.replace(/_/g, '-')
  }
})
app.filter('camel', function () {
  return function (input) {
    if (typeof(input) == 'number') {
      return input;
    }
    else {
      return input.toLowerCase().replace(/[-_](.)/g, function(match, group1) {
        return group1.toUpperCase();
      });
    }
  }
});

app.filter('pigLatin', function () {
  return function (input) {
    function letters(word) {
      return word.split('')
    }
    function pigLatinizeWord(word) {
      var chars = letters(word);
      return chars.slice(1).join('') + chars[0] + 'ay';
    }
    function pigLatinizeSentence(sentence) {
      return sentence.replace(/\w+/g, pigLatinizeWord)
    }
    if (input.split(' ').length > 1) {
      return pigLatinizeSentence(input);
    }
    else {
      return pigLatinizeWord(input);
    }
  }
});

app.filter('redact', function () {
  return function (input, word) {
    return input.replace(word, "REDACTED");
  }
});
