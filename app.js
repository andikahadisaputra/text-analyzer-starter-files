function getWords(rawString){
  return rawString.toLowerCase().split(/[ ,!.;()]/).filter(Boolean)

}

function wordsCount(text){
  var words = getWords(text);
  return words.length;
}

function uniqueWords(text){
  var words = getWords(text);
  var unique = {};
  for (var i =0; i<words.length; i++){
    if (words[i] in unique){
      unique[words[i]]++;
    }
    else {
      unique[words[i]]=1;
    }
  }
  return Object.keys(unique).length;
}

function getChar(word){
    return word.toLowerCase().split("").filter(Boolean)
}

function avgLength(text){
  var words = getWords(text);
  var sum = 0;
  for(var i=0; i<words.length;i++){
    var char= getChar(words[i]);
    sum += char.length;

  }
  return sum/words.length;
}

function reportOnText(text){
  var words = getWords(text);
  var totalWords = wordsCount(text);
  var distinct = uniqueWords(text);
  var length = avgLength(text);

  var textReport= $('.js-text-report');
  textReport.find('.js-word-count').text(totalWords);
  textReport.find('.js-unique').text(distinct);
  textReport.find('.js-average').text(length +" characters");
  textReport.removeClass('hidden');

}

function watchFormSubmission(){
  $('.js-text-form').submit(function(event){
    event.preventDefault();
    var userText = $(this).find('#user-text').val();
    reportOnText(userText);
    console.log('hello there')
  })
}

$(function(){
  watchFormSubmission();
})
