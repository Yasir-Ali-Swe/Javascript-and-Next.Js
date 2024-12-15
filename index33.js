let arr = [1, 2, 3, 4, 5];
arr.splice(0, 2, -1, -2);
console.log(arr);

arr = [5, 6, 1, 3, 2, 4];
arr.sort();
console.log(arr);
arr.reverse(arr);
console.log(arr);

arr = [1, 2, 3, 4, 5];
let arr2 = arr.join("+");
console.log(arr);
console.log(arr2);

arr = [1, 2, 3, 4, 5];
console.log(arr.toString());
console.log(arr);

let str = "Y,a,s,,i,r, ,A,l,i";
console.log(str.split(","));

str = "Yasir Ali Yasir Ali";
console.log(str.replaceAll("Yasir", "Hassan"));
str = "Yasir ";
console.log(str.repeat(5));
