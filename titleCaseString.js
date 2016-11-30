function titleCase(str) {
  var capitals = str.split(" ");
  for (var i = 0; i < capitals.length; i++){
    capitals[i] = capitals[i].charAt(0).toUpperCase() + capitals[i].substring(1).toLowerCase();
  }
  var complete = capitals.join(" ");
  return complete;
}

titleCase("I'm a little tea pot");
