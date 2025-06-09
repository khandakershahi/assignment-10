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

    return  count;
}

console.log(countVowels("Khandaker Shahi"));

document.getElementById("outputVowels").innerHTML = "Vowels counted: " + countVowels("Khandaker Shahi");

// 2. Write a function named sortNumbers that takes an array of numbers and returns the array sorted in ascending order.

// Ex: sortNumbers([4, 1, 8, 3])  // Output: [1, 3, 4, 8]


function sortNumbers(numArry){
    return numArry.sort(function(a, b){return a - b});
}

console.log(sortNumbers([4, 1, 8, 3]));

    document.getElementById("sortedNumber").innerText = "Sorted Numbers: " + sortNumbers([4, 1, 8, 3]);

// 3. Write a function named reverseString that takes a string and returns the reversed version of the string.

// Ex: reverseString("hello")  // Output: "olleh"


function  reverseString(arg){
    let mystring = arg;
    const stringArray = mystring.split("");
    const result = stringArray.reverse();
    const resultJoin = result.join("");

    return resultJoin;
}

console.log(reverseString("Hello"));

    document.getElementById("reverseStringoutput").innerText = "Reverse String is: " + reverseString("Hello");


// 4. Write a function named getLastElement that takes an array and returns the last element.

// Ex: getLastElement([10, 20, 30, 40])  // Output: 40


function getLastElement(numsArray){
    const lastValue = numsArray[numsArray.length - 1];

    return lastValue;
}

console.log(getLastElement([10, 20, 30, 40]));

document.getElementById("lastElementOutput").innerText = "Last element is: " + getLastElement([10, 20, 30, 40]);

// 5. Write a function named mergeArrays that takes two arrays and returns a new array containing elements from both arrays.

// Ex: mergeArrays([1, 2], [3, 4])  // Output: [1, 2, 3, 4]

function mergeArrays(ary1, ary2){
    const result = ary1.concat(ary2);

    return result;
}

console.log(mergeArrays([1, 2], [3, 4]));

document.getElementById("mergeArrays").innerText = "Here is the marged array: " + getLastElement([10, 20, 30, 40]);


// 6. Write a function named hasSpace that takes a string and returns true if it contains a space character.

// Ex: hasSpace("Ostad Limited")  // Output: true

function hasSpace(arg){
    return arg.includes(" ");

}

console.log(hasSpace("Ostad Limited"));


document.getElementById("hasSpace").innerText = "The string has space: " + hasSpace("Ostad Limited");

// 7. Write a function named isEmptyString that takes a string and returns true if the string is empty, otherwise false.

// Ex: isEmptyString("")  // Output: true,

// Ex: isEmptyString("Hello")  // Output: false

function isEmptyString(arg){
    return arg === "";
}

console.log(isEmptyString(""));
console.log(isEmptyString("hello"));

document.getElementById("isEmptyString").innerText = "The string is empty: " + isEmptyString("") + "\n" + "The string is empty: "  + isEmptyString("hello");


// 8. Write a function removeNegativeNumbers(arr) that removes all negative numbers from the array.

// Ex: removeNegativeNumbers([-5, 2, -1, 6, 0]) // Output: [2, 6, 0]


function removeNegativeNumbers(arr){
    return arr.filter(function(num){
        return num >= 0;
    })
}

console.log(removeNegativeNumbers([-5, 2, -1, 6, 0]));

document.getElementById("removeNegativeNumbers").innerText = "Negetive number removed array is: " + removeNegativeNumbers([-5, 2, -1, 6, 0]);