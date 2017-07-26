// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.


function max(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num1 === num2) {
        return "they're equal!";
    } else {
        return num2;
    }
}

console.log("NUMBER 1: ", max(31, 39));
// Your answer here



// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.



function maxOfThree(num1, num2, num3) {
    return max(num1, max(num2, num3));
}

console.log("NUMBER 2: ", maxOfThree(31, 39, 100));



// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char) {
    if (char === ("a" || "e" || "i" || "o" || "u")) {
        return true;
    }
    else {
        return false;
    }

}

console.log('NUMBER 3: ', isVowel("b"));


// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.

function sum(a, b) {
    return a + b;
}

console.log('NUMBER 4: ', sum(5, 2));


// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.

function avg(x, y, z) {
    return (x + y + z) / 3;
}

console.log('NUMBER 5: ', avg(8, 9, 11));

// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.

function getLength(word) {
    return word.length;
}

console.log('NUMBER 6: ', getLength("buffy"));
// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.
function greaterThan(a, b) {
    if (b > a) {
        return true;
    }
    else {
        return false;
    }
}

console.log('NUMBER 7: ', greaterThan(15, 9));
// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.

function greet(a) {
    return ("Hello, " + a + "!");
}

console.log('NUMBER 8: ', greet("Queso"));

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.

function madlib(noun1, verb, adj, noun2) {

    // return ("The " + noun1 + " " + verb + " it's " + adj + " " + noun2 +".");
    return `The ${noun1} ${verb} it's ${adj} ${noun2}.`;
}

console.log('NUMBER 9: ', madlib("cat", "licks", "fuzzy", "paws"));


