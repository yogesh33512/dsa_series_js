// Day 2: String - Check if a string is a palindrome.

// Input: "racecar"
// Output: True



// 1 Solution
// function isPalindrome(str) {
//     let strArray = str.split("");

//     if(strArray.length % 2  === 0) {
//         let loopLength = strArray.length / 2;

//         for(let i = 0; i < loopLength; i++) {
//             let temp = strArray[i];
//             strArray[i] = strArray[strArray.length - 1 - i];
//             strArray[strArray.length - 1 - i] = temp;
//         }
//     } else {
//         let loopLength = (strArray.length - 1) / 2;

//         for(let i = 0; i < loopLength; i++) {
//             let temp = strArray[i];
//             strArray[i] = strArray[strArray.length - 1 - i];
//             strArray[strArray.length - 1 - i] = temp;
//         }
//     }

//     const reverseString = strArray.join('');

//     if(reverseString === str) {
//         console.log("String is palandrome");
//     } else {
//         console.log("String is not palandrome");
//     }
// };


// for (let i = 0; i < palindromes.length; i++) {
//     isPalindrome(palindromes[i])
// }


// 2nd Solution 

function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            console.log(`"${str}" is NOT a palindrome`);
            return;
        }
        left++;
        right--;
    }

    console.log(`"${str}" is a palindrome`);
}

const palindromes = [
    "racecar", "level", "radar", "civic", "rotor",
    "madam", "refer", "deed", "noon", "pop",
    "wow", "mom", "dad", "eye", "stats",
    "kayak", "solos", "tenet", "minim", "repaper", "abccba"
];

palindromes.forEach(isPalindrome);
