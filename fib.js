const fibs = n => {
  let arr = [0, 1]

  if (n === 1) {
    return [0]
  } else if (n === 2) {
    return arr
  }
  
  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 1] + arr[i - 2])
  }

  return arr
  
}

//console.log(fibs(8))

const fibsRec = n => {
  if(n === 0) {
    return [ 0 ]
  } else if (n === 1) {
    return [ 0, 1 ]
  }

  const arr = fibsRec(n - 1)
  return [...arr, arr[n-1] + arr[n-2]]

  return arr
}

console.log(fibsRec(2))