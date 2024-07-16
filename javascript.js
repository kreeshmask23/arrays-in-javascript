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

