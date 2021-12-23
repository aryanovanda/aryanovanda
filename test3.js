// Expected Result : [false, true]
// Direction :
// The first value : If all of arr2 has bigger value than the biggest value of arr1;
// The second value : If some of arr2 has smaller value than the smallest value of arr1;
const arr1 = [4, 6, 2, 3, 5];
const arr2 = [1, 3, 4, 7, 9, 10];

function result(arr1, arr2) {
  if(!Array.isArray(arr1) || !Array.isArray(arr2)|| arr1.length !== arr2.length){
    return false;
  }
  // .concat() to not mutate arguments
  const arrTemp1 = arr1.concat().sort();
  const arrTemp2 = arr2.concat().sort();
    
  for (let i = 0; i < arrTemp1.length; i++) {
    if (arrTemp1[i] !== arrTemp2[i]) {
      return false;
    }
  }
  return true;
}

console.log(result(arr1, arr2));