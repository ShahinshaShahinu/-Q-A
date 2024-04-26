function mergesort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let middleidx = Math.floor(arr.length / 2);
  let firsthalf = arr.slice(0, middleidx);
  let lasthalf = arr.slice(middleidx);

  return joinarr(mergesort(firsthalf), mergesort(lasthalf));

  //first mergesort(firsthalf)  this function is working then after that mergesort(lasthalf)  this function is working

  // this is a ricresive function it is calling to itself it is know recurtion //
}

function joinarr(firsthalf, lasthalf) {
  let newarr = [];
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < firsthalf.length && j < lasthalf.length) {
    if (firsthalf[i] <= lasthalf[j]) {
      newarr[k++] = firsthalf[i++];
    } else {
      newarr[k++] = lasthalf[j++];
    }
  }

  while (i < firsthalf.length) {
    newarr[k++] = firsthalf[i++];
  }

  while (j < lasthalf.length) {
    newarr[k++] = lasthalf[j++];
  }

  return newarr;
}

let arr = [3, 2, 5, 4];
console.log(mergesort(arr));
