function sumOfElements() {
  let sum = 0;
  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
}
let array =[1,3,5,7,23,8]
console.log(sumOfElements(array));
