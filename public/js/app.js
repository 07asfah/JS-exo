
// Exercise 1:
 //Greetings
// Create a function called greet that takes a name parameter and 
// prints a greeting message to the console. 
// Call the function with different names.

function greet(name) {
    console.log("Hello " + name + "!");
    
}

greet("Alice");
greet("Bob");



// Exercise 2: Sum of Numbers
// Create a function called sumNumbers that takes an array of numbers 
// as a parameter and returns the sum of those numbers. 
// Call the function with different arrays.

function addNum(nums) {
    let sum = 0;
    for (let index = 0; index < nums.length; index++) {
        sum += nums[index];
        
    }
    return sum;
}

console.log(addNum([5, 2, 3, 4]));
console.log(addNum([]));


// Exercise 4: Even or Odd
// Create a function called isEven that takes a number as a parameter 
// and prints whether the number is even or odd to the console. Use an if-else statement. 
// Call the function with different numbers.
    
let numbers = [1, 2, 3, 8, 5];
numbers.forEach(function(number) {
    if (number % 2 == 0) {
        console.log(`The number ${number} is even`);
    } else {
        console.log(`The number ${number} is odd`);
    }
});


// Exercise 6: Palindrome Check
// Create a function called isPalindrome that takes a
//  string as a parameter and prints whether the string is a palindrome (reads the same backward as forward) to the console. Ignore spaces and case. Use loops and conditional statements.
//  Call the function with different strings.


function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}

console.log(isPalindrome("racecare"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("m"));

// Exercise 7: Maximum of Two Numbers
// Create a function called maxOfTwo that takes two numbers as parameters and prints the larger of the two to the console. Use an if-else statement. Call the function with different numbers.
    function maxOfTwo(num1, num2) {
        if (num1 > num2) {
            console.log(`${num1} is larger than ${num2}`);
            
        }  else{
            console.log(`${num1} is smaller than ${num2}`);
        }
    }

    console.log(maxOfTwo(20, 30));
    




// Exercise 8: Array Sum
// Create a function called arraySum that takes an array of numbers as a parameter and prints the sum of those numbers to the console. Use the for...of loop. Call the function with different arrays.

    function arraysum(array) {
        let total = 0;
        for (let index = 0; index < array.length; index++) {
            total += array[index];
        } 
        return total;

    }

    console.log(arraysum);


// Exercise 9: Factorial Without Recursion
// Create a function called factorial that takes a number as a parameter and prints the factorial of that number to the console. Calculate the factorial without using recursion. Call the function with different numbers.


function factorial(number) {
    let result = 1;

    for (let i = 1; i <= number; i++) {
        result *= i;
    }

    return result;
}

let num = 5;
console.log("The factorial of " + num + " is " + factorial(num));

let num2 = 7;
console.log("The factorial of " + num2 + " is " + factorial(num2));



// Exercise 10: Vowel Checker
// Create a function called isVowel that takes a character as a parameter and prints whether the character is a vowel or not to the console. Use an if-else statement. Call the function with different characters.


function isVowel(char) {
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || char === "y") {
        console.log(char + " is a vowel.");

    } else {
        console.log(char + " is not a vowel.");

    }
}

isVowel("a");
isVowel("b");

// Exercise 11: Largest in Array
// Create a function called largestInArray that takes an array of numbers as a parameter and prints the largest number in the array to the console. Use the Math.max function. Call the function with different arrays.


function largestInArray(arr) {
    let largest = Math.max(...arr)

    console.log("The largest number in the array is: " + largest);

}

largestInArray([1, 5, 6, 3]);
largestInArray([5, 9, -14, 10]);



// Exercise 12: Prime Number Checker
// Create a function called isPrime that takes a number as a parameter and prints whether the number is a prime number or not to the console. Use loops and conditional statements. Call the function with different numbers.


function isPrime(number) {
    let Prime = true;

    if (number < 2) {
        Prime = false;
    }
    else {
        for (let index = 2; index < number; index++) {
            if (number % index === 0) {
                Prime = false;
            }
        }
    }

    console.log(Prime);
}

isPrime(29);
isPrime(30);


// Exercise 13: Sum of Digits
// Create a function called sumOfDigits that takes a positive integer as a parameter and calculates the sum of its digits. Print the result to the console.



function sumOfDigits(int) {
    let sum = 0;

    while (int > 0) {
        sum += int % 10;
        int = Math.floor(int / 10);
    }

    console.log("The sum of the digits is: " + sum);

}

sumOfDigits(3214);
sumOfDigits(98);

//Exercice 14:
// Create a function called arrayIntersection that takes two arrays as parameters and returns a new array containing the common elements between them.


function arrayIntersection(arr1, arr2) {
    let result = [];


    for (let i = 0; i < arr1.length; i++) {

        if (arr2.includes(arr1[i])) {
            result.push(arr1[i]);
        }
    }

    return result;
}

let arr1 = [1, 2, 5, 4, 1, 8, 7, 4];
let arr2 = [1, 4, 7, 8];

console.log(arrayIntersection(arr1, arr2));



///fibonacci sequence

function fibonacci(number) {
    let num1 = 2, num2 = 5, nextresult;

    for (let index = 1; index <= number; index++) {
        console.log(num1);

        nextresult = num1 + num2;
        num1 = num2;
        num2 = nextresult
    }
}

fibonacci(10)
