function repeatStringNumTimes(str, num) {
  var repeater = "";
  if (num < 0) {
    return "";
  }
  else {
    for (var i = 0; i < num; i++){
      repeater += str;
    }
  }
  return repeater;
}

repeatStringNumTimes("abc", 3);
