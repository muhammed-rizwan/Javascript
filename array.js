
const numbers =[1,2,3,4,5];
console.log(numbers.length);
numbers.push(6);
console.log(numbers);
const removedElement =numbers.pop();
console.log(removedElement);
const firstElement=numbers.shift()
console.log(firstElement);
numbers.unshift(0);
console.log(numbers);
console.log(numbers.indexOf(3));
numbers.splice(1,2,8,9);
console.log(numbers);
const slicedArray = numbers.slice(1.4);
console.log(slicedArray);
const array1 =[1,2];
const array2=[3,4];
const concatenateArray =array1.concat(array2);
console.log(concatenateArray);
const names = ["john","alice","bob"];
const joinedNames =names.join(",");
console.log(joinedNames);