function chunkArrayInGroups(arr, size) {
  var final = [];
  for (var i = 0; i < arr.length; i+=size){
    final.push(arr.slice(i, i+size));    
  }
  return final;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
