function findLongestWord(str) {
  var words = str.split(" ");
  var longest = words[0];
  for (var i = 1; i<words.length; i++){
    if (words[i].length > longest.length){
      longest = words[i];
    }
  }
  var max = longest.toString(); 
  return max.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
