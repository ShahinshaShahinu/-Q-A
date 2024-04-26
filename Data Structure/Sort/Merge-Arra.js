//Merge Sort //

let arrayM = [22, 1, 33, 33, 4, 55, 6];

function MegeSort(arrayM) {
  if (arrayM.length <= 1) {
    return arrayM;
  }

  let middleidx = Math.floor(arrayM.length / 2);
  let firsthalf = arrayM.slice(0, middleidx);
  let lasthalf = arrayM.slice(middleidx);

  return joinArray(MegeSort(firsthalf), MegeSort(lasthalf));
}

function joinArray(firsthalf, lasthalf) {
  let newarr = [];

  let i = 0;
  let j = 0;
  let k = 0;
  while (i < firsthalf.length && j < lasthalf.length) {
    //check smaller elements ..

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

console.log(MegeSort(arrayM));
