var BubbleSort = function (arr) {
  // assume the array is unsorted
  var unsorted = true;

  // while unsorted, run sorting function
  while (unsorted === true) {

    // set unsorted to false (sorted) unless found otherwise
    unsorted = false;

    for (var x = 0; x < arr.length - 1; x++) {

      // if next element is larger than prev, swap them
      if (arr[x] > arr[x + 1]) {
        var temp = arr[x];
        arr[x] = arr[x + 1];
        arr[x + 1] = temp;

        // the array is unsorted, so run again
        unsorted = true;
      } else unsorted = unsorted || false;
    }
  }

  return arr;
};

var SelectionSort = function (arr) {
  // get the index of the min and the value of min
  var indexOfSmallest = function (arr) {
    var min = arr[0];
    var index = 0;

    for (var x = 1; x < arr.length; x++) {
      if (arr[x] < min) {
        min = arr[x];
        index = x;
      }
    }

    return {min: min, index: index};
  };

  // go through array once
  for (var x = 0; x < arr.length; x++) {
    // get the index and value of smallest value
    var smallest = indexOfSmallest(arr.slice(x));

    // swap values
    var temp = arr[x];
    arr[x] = smallest.min;
    // smallest.index + x because it is a slice of the total array
    arr[smallest.index + x] = temp;
  }

  return arr;
};

var InsertionSort = function (arr) {
  var offset,
      temp;

  // go once through the array
  for (var x = 0; x < arr.length; x++) {
    // set the offset = x
    var o = x;

    // while the index/offset is still possible index (> 0)
    while (o > 0 && arr[o - 1] > arr[o]) {
      // swap values
      temp = arr[o];
      arr[o] = arr[o - 1];
      arr[o - 1] = temp;

      // decrement offset
      o--;
    }
  }

  return arr;
};

var HeapSort = function (arr) {
  var swap = function (arr, a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  };

  var siftDownHeap = function (heap, i, max_length) {
    // I believe c1 and c2 are parent and direct child in the min heap.
    var i_big, c1, c2;

    while (i < max_length) {
      i_big = i;
      c1 = 2 * i + 1;
      c2 = c1 + 1;

      // basically as long as the current val isn't the same as the parent val.
      if (c1 < max_length && heap[c1] > heap[i_big]) {
        i_big = c1;
      }
      if (c2 < max_length && heap[c2] > heap[i_big]) {
        i_big = c2;
      }

      if (i_big == i) return;
      swap(heap, i, i_big);
      i = i_big;
    }
  };

  var putInHeapOrder = function (arr) {
    var i = Math.floor(arr.length / 2 - 1);

    while (i >= 0) {
      siftDownHeap(arr, i, arr.length);
      i--;
    }
  };

  return (function (arr) {
    var end = arr.length - 1;

    putInHeapOrder(arr);

    while (end > 0) {
      swap(arr, 0, end);
      siftDownHeap(arr, 0, end);
      end--;
    }

    return arr;
  })(arr);
};

var Tests = {
  bubbleSort: BubbleSort([1,4,7,8,3,4,5,7,9,1,1,3,2]),
  selectionSort: SelectionSort([1,4,7,8,3,4,5,7,9,1,1,3,2]),
  insertionSort: InsertionSort([1,4,7,8,3,4,5,7,9,1,1,3,2]),
  heapSort: HeapSort([1,4,7,8,3,4,5,7,9,1,1,3,2])
};

console.log(Tests);
