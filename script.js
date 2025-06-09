// 1.  Write a function named countVowels that takes a string and returns the number of vowels in it.

// Ex: countVowels("Your Name")  // Output: 4




function countVowels(myString) {
    const vowels = ["a", "e", "i", "o", "u"];
    let stringLowercase = myString.toLowerCase();
    const myArray = stringLowercase.split(""); 
    let count = 0;

    for (let i = 0; i < myArray.length; i++) {
        if (vowels.includes(myArray[i])) {
            count++;
        }
    }

    return "Here is vowels count: " + count;
}

console.log(countVowels("Khandaker Shahi"));

document.getElementById("outputVowels").innerHTML = countVowels("Khandaker Shahi");

// 2. Write a function named sortNumbers that takes an array of numbers and returns the array sorted in ascending order.

// Ex: sortNumbers([4, 1, 8, 3])  // Output: [1, 3, 4, 8]


function sortNumbers(numArry){
    return numArry.sort(function(a, b){return a - b});
}

function handleClick() {
    const userInput = document.getElementById("numberSort").value;
    
    
    const numberArray = userInput
        .split(",")
        .map(num => Number(num.trim()))
        .filter(num => !isNaN(num));  

    const result = sortNumbers(numberArray);
    
    document.getElementById("sortedNumber").innerText = "Sorted Numbers: " + result.join(", ");
}

// 3. Write a function named reverseString that takes a string and returns the reversed version of the string.

// Ex: reverseString("hello")  // Output: "olleh"


function  reverseString(arg){
    let mystring = arg;
    const stringArray = mystring.split("");
    const result = stringArray.reverse();
    const resultJoin = result.join("");

    return resultJoin
}


function handleClick() {
    const userInput = document.getElementById("reverseStringInput").value;
    const result = reverseString(userInput);
    document.getElementById("reverseStringoutput").innerText = "Reverse String is: " + result;
}

// 4. Write a function named getLastElement that takes an array and returns the last element.

// Ex: getLastElement([10, 20, 30, 40])  // Output: 40


function getLastElement(numsArray){
    const myArray = numsArray.split(",").map(Number);
    const lastValue = myArray[myArray.length - 1];

    return lastValue;
}

console.log(getLastElement("10, 20, 30, 40"));



// 5. Write a function named mergeArrays that takes two arrays and returns a new array containing elements from both arrays.

// Ex: mergeArrays([1, 2], [3, 4])  // Output: [1, 2, 3, 4]

// 6. Write a function named hasSpace that takes a string and returns true if it contains a space character.

// Ex: hasSpace("Ostad Limited")  // Output: true

// 7. Write a function named isEmptyString that takes a string and returns true if the string is empty, otherwise false.

// Ex: isEmptyString("")  // Output: true,

// Ex: isEmptyString("Hello")  // Output: false

// 8. Write a function removeNegativeNumbers(arr) that removes all negative numbers from the array.

// Ex: removeNegativeNumbers([-5, 2, -1, 6, 0]) // Output: [2, 6, 0]

