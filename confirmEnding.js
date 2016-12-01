
function confirmEnding(str, target) {
  var chunk = str.substring(str.length-target.length);
  console.log(chunk);
     if (chunk == target){
      return true;
     }
     else {
       return false;
     }
}

confirmEnding("Bastian", "n");
