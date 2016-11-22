function palindrome(str) {
  var lap = str.toLowerCase().replace(/[^a-zA-Z0-9:]|\s/g,'');
  var pal = lap.split('').reverse().join('');
  console.log(lap, typeof(lap));
  console.log(pal, typeof(pal));
  if (lap == pal){
      return true;
    } 
    else {
      return false;
    }
}

palindrome("race car");
