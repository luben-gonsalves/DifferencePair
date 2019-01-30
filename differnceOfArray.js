function difference(arr, k) {
  arr.sort((a, b) => a - b);
  var count = 0;
  var newArr=[];
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = i; j < arr.length; j++) {
      if (arr[j] - arr[i] > k) {
        break;
      } else if (arr[j] - arr[i] == k) {
        newArr.push([arr[j],arr[i]]);
        count++;
      }
    }
  }
  return `total number of pairs with difference ${k} are ${count} and the pairs are ${newArr}`;
}
difference([1, 2, 3, 4,], 1);
