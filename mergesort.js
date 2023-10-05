let left = array => {
  let half = Math.ceil(array.length / 2);
  return array.slice(0, half);
}

let right = array => {
  let half = Math.ceil(array.length / 2);
  return array.slice(half);
}

let mergeArrays = (left, right) => {
  let arr = [];
  
  // length needs to be here as it gets updated each loop, want to compare only initial value
  let length = left.length + right.length;
  
  // go through both arrays, compare 1st value of both and add smallest to array
  for (let i = 0; i < length; i++) {
    if (left.length === 0) { // left side is empty, append rest of right side
      arr.push(...right)
      break;
    } else if (right.length === 0) { // right side is empty, append rest of left side
      arr.push(...left)
      break;
    }

    // compare 1st values of left and right
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  return arr
}


let mergeSort = array => {
  // base case
  if(array.length === 1) {
    return array;
  }

  // otherwise split the arrays in half
  let leftHalf = mergeSort(left(array));
  let rightHalf = mergeSort(right(array));

  // sort the 2 arrays
  return mergeArrays(leftHalf, rightHalf);
}

arr = [1, 0, 3, -42, 103, 230123, 234, 123, 889, 3]

console.log(mergeSort(arr));