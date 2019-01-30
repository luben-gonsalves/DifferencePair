function difference(arr, k) {
  arr.sort((a, b) => a - b);
  var count = 0;
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = i; j < arr.length; j++) {
      if (arr[j] - arr[i] > k) {
        break;
      } else if (arr[j] - arr[i] == k) {
        count++;
      }
    }
  }
  return count;
}
difference([1, 2, 3, 4,5], 1);
