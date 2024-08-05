/*let n=30;
if(n%3==0 && n%5==0){
    console.log("FizzBuzz");

}
else if(n%3==0){
    console.log("Fizz");
}
else{
    console.log("Buzz");
}*/
/*function isPalindrome(str){
    let j =str.length-1;
    for(let i=0;i<str.length/2;i++){
        if(str[i]!=str[j]){
            return false;
        }
        j--;
    }
    return true;
}
let str1="malayalam";
let str2="hello";
console.log(isPalindrome(str1));
console.log(isPalindrome(str2));*/
/*function LargestNumber(number){
    if(number.length === 0){
        throw new Error("Array is empty");
    }
    let largest = number[0];
    for(let i = 1;i<number.length; i++){
        if(number[i]>largest){
            largest=number[i];
        }
    }
    return largest;
}
const array=[10,23,5,46,16];
const largestNumber=LargestNumber(array);
console.log("The largest number is:",largestNumber);*/
/*function countCharacter(str) {
    var Count = {};
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (Count[char]) {
            Count[char]++;
        } else {
            Count[char] = 1;
        }
    }
    return Count;
}

var string = "hello world";
console.log(countCharacter(string));*/

/*function LongestWord(str) {
    let words = str.split(' ');
    let longestWord = "";
    for (let i = 0; i < words.length; i++) {

        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}

let string = " I am Kreeshma";
const longestWord=LongestWord(string);
console.log(longestWord);*/

/*function factorial(n) {
    
    if (n === 0) {
        return 1;
    }
    var result = 1;
    for (var i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}


var number = 6;
console.log("The factorial of " + number + " is " + factorial(number)); // 120*/

/*function celsiusToFahrenheit(celsius) {
    var fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}
var celsius = 23;
var fahrenheit = celsiusToFahrenheit(celsius);
console.log(celsius + " degrees Celsius is equal to " + fahrenheit.toFixed(2) + " degrees Fahrenheit.");*/


/*

//Array creation and initialization
let cars=["BMW","BENZ","LAMBOGINI"];
console.log(cars);
 
//Array manipulation
//using push()
let fruits =["Apple","Orange","Mango"];
fruits.push("pineapple");
console.log(fruits);

//using shift()
let veggies =["coconut","carrot","beans","potato"];
veggies.shift("coconut");
console.log(veggies);

//using pop()
let a=[1,2,3,4,5,6];
a.pop(6);
console.log(a);

//using unshift()
let b=[1,2,3,4,5]
b.unshift(3);
console.log(b);

//Array searching
//using indexOf()
let num=23;
let arrays=[1,2,3,4,5,6,8,9,23,5,24,25,15];
let index = arrays.indexOf(num);
if(index!==-1)
{
    console.log("Index of "+num+" is "+index);
}
else{
    console.log("Index of "+num+" not found");
}
//using inludes()
let num1=23;
let array=[1,2,3,4,5,6,8,9,23,5,24,25,15];
let res = array.includes(8);
console.log("Includes of "+num1+" is "+res);

//mapping
let array1=[1,2,3,4];
let map=array1.map(array1 => array1*3);
console.log(map);

//sorting
let fruit =["banana","orange","apple","mango"];
fruit.sort();
console.log(fruit);

//reverse sorting
let fruit1=["banana","orange","apple","mango"];
fruit1.reverse();
console.log(fruit1);

//join()
var letters=["a","b","c","d"];
var letter = letters.join(" ");
console.log(letter);

//split()
let str="A b c d e";
let words = str.split(" ");
console.log(words);

*/


// ====================================================================================================================================================

// 31/07/2024

//20.grouping array elements
/*function groupBy(array, key) {
    return array.reduce((result, currentValue) => {
      const groupKey = currentValue[key];
      if (!result[groupKey]) {
        result[groupKey] = [];
      }
      result[groupKey].push(currentValue);
      
      return result;
    }, {});
  
}
  const data = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 30 },
    { name: 'David', age: 30 },
    { name: 'Eve', age: 35 }
  ];
  const groupedByAge = groupBy(data, 'age');
  console.log(groupedByAge);

//21.Array intersection of two sets

  function intersectArrays(arr1, arr2) {
    const set2 = new Set(arr2);
    return arr1.filter(element => set2.has(element));
  }

  const array1 = [1, 2, 3, 4, 5];
  const array2 = [4, 5, 6, 7, 8];
  
  const intersection = intersectArrays(array1, array2);
  console.log(intersection); 

  //22.Array manipulation with slice()
const array = [1, 2, 3, 4, 5];
const slicedArray = array.slice(1, 4);
console.log(slicedArray);

//23.Implementing a queue with arrays
class Queue {
    constructor() {
      this.items = [];
    }
    enqueue(element) {
      this.items.push(element);
    }
    dequeue() {
      if (this.isEmpty()) {
        throw new Error("Queue is empty");
      }
      return this.items.shift();
    }
    isEmpty() {
      return this.items.length === 0;
    }
    size() {
      return this.items.length;
    }
    peek() {
      if (this.isEmpty()) {
        throw new Error("Queue is empty");
      }
      return this.items[0];
    }
    clear() {
      this.items = [];
    }
  }
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  
  console.log(queue.dequeue()); 
  console.log(queue.peek());   
  console.log(queue.size());    
  console.log(queue.isEmpty()); 
  
  queue.clear();
  console.log(queue.isEmpty()); 

//24.Implementing a stack with arrays
class Stack {
    constructor() {
      this.items = [];
    }
    push(element) {
      this.items.push(element);
    }
    pop() {
      if (this.isEmpty()) {
        throw new Error("Stack is empty");
      }
      return this.items.pop();
    }
    isEmpty() {
      return this.items.length === 0;
    }
    size() {
      return this.items.length;
    }
    peek() {
      if (this.isEmpty()) {
        throw new Error("Stack is empty");
      }
      return this.items[this.items.length - 1];
    }
    clear() {
      this.items = [];
    }
  }
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  
  console.log(stack.pop());   
  console.log(stack.peek());   
  console.log(stack.size());   
  console.log(stack.isEmpty());
  
  stack.clear();
  console.log(stack.isEmpty());

//25.Array of objects starting with multiple properties
  const people = [
    { name: 'Alice', age: 25, city: 'New York' },
    { name: 'Bob', age: 30, city: 'San Francisco' },
    { name: 'Charlie', age: 35, city: 'Chicago' },
    { name: 'David', age: 40, city: 'Los Angeles' },
    { name: 'Eve', age: 45, city: 'Seattle' }
  ];
  console.log(people[3].age);

//27.Comparing 2 arrays of equality
  function deepEqual(obj1, obj2) {
    if (obj1 === obj2) {
      return true;
    }
  
    if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
      return false;
    }
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (const key of keys1) {
      if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
        return false;
      }
    }
    return true;
  }
  function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    for (let i = 0; i < arr1.length; i++) {
      if (!deepEqual(arr1[i], arr2[i])) {
        return false;
      }
    }
    return true;
  }
  const arrays1 = [{a: 1}, [1, 2, 3], 'test'];
  const arrays2 = [{a: 1}, [1, 2, 3], 'test'];
  const arrays3 = [{a: 2}, [1, 2, 3], 'test'];
  
  console.log(arraysEqual(arrays1, arrays2));
  console.log(arraysEqual(arrays1, arrays3)); */

//=====================================================================================================================================================
//5/8/24

//28.Converting array of objects

const data = [
  { id: 1, name: 'John Doe', age: 28 },
  { id: 2, name: 'Jane Smith', age: 34 },
  { id: 3, name: 'Michael Johnson', age: 45 }
];
const formattedData = data.map(item => ({
  identifier: item.id,
  fullName: item.name,
  years: item.age
}));

console.log(formattedData);

// 29. Removing array items by index
function removeItemByIndex(arr, index) {
  if (index > -1 && index < arr.length) {
      arr.splice(index, 1);
  }
  return arr;
}
let array1 = [1, 2, 3, 4, 5];
 console.log(removeItemByIndex(array1, 2)); // Output: [1, 2, 4, 5]

// 30. Inserting items at a specific position
function insertItemAt(arr, index, item) {
  arr.splice(index, 0, item);
  return arr;
}
let array2 = [1, 2, 4, 5];
console.log(insertItemAt(array2, 2, 3)); // Output: [1, 2, 3, 4, 5]

// 31. Sorting arrays with complex objects
function sortArrayByProperty(arr, property) {
  return arr.sort((a, b) => (a[property] > b[property]) ? 1 : (a[property] < b[property]) ? -1 : 0);
}
let array3 = [{name: 'John', age: 30}, {name: 'Jane', age: 25}, {name: 'Bill', age: 35}];
console.log(sortArrayByProperty(array3, 'age')); // Output: [{name: 'Jane', age: 25}, {name: 'John', age: 30}, {name: 'Bill', age: 35}]

// 32. Finding the longest string in an array
function findLongestString(arr) {
  return arr.reduce((a, b) => (a.length > b.length) ? a : b, "");
}
let array4 = ['short', 'longer', 'longest', 'tiny'];
console.log(findLongestString(array4)); // Output: 'longest'

//33. Rotating an array
function rotateArray(arr, steps) {
  steps = steps % arr.length;
  return arr.slice(-steps).concat(arr.slice(0, -steps));
}
let array5 = [1, 2, 3, 4, 5];
console.log(rotateArray(array5, 2)); // Output: [4, 5, 1, 2, 3]

// 33. Generating an array of a range
function generateRange(start, end) {
  return Array.from({length: end - start + 1}, (_, i) => start + i);
}
console.log(generateRange(3, 7)); // Output: [3, 4, 5, 6, 7]

