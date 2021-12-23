// Expected Result = 55
// Direction : Return sum of array
const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce(result, 0);

function result(accumulator, a) {
    return accumulator + a;
}

console.log(result(input));