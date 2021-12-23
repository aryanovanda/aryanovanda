// Expected result : [7, 3, 1, 2, 5, 6, 9, 10, 4, 8]
// Direction : Mutate arr1 to return combined array with arr2. The conditions are :
// 1. odd number at beginning 
// 2. even number at the end of array 
// 3. Original arr1 at the middle

const arr1 = [1, 2, 5, 6, 9, 10];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(arr1, arr2) {
  var a = [], diff = [];

    for (var i = 0; i < arr1.length; i++) {
        a[arr1[i]] = true;
    }

    for (var i = 0; i < arr2.length; i++) {
        if (a[arr2[i]]) {
            delete a[arr2[i]];
        } else {
            a[arr2[i]] = true;
        }
    }

    for (var k in a) {
        diff.push(k);
    }

    return diff;
}

console.log(result(arr1, arr2));