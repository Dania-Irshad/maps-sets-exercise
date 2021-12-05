/* Quick Question #1
What does the following code return?
new Set([1,1,2,2,3,4]) */
{ 1, 2, 3, 4 }

/* Quick Question #2
What does the following code return?
[...new Set("referee")].join("") */
"ref"

/* Quick Questions #3
What does the Map m look like after running the following code?
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false); */
{ Array(0): true, Array(0): false }

/* hasDuplicate
Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate */
const hasDuplicate = (arr) => {
    return !(new Set(arr).size === arr.length)
}

/* vowelCount
Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string. */
const vowelCount = (str) => {
    let vowels = 'aeiou';
    let countMap = new Map();
    for (let char of str) {
        let lowerChar = char.toLowerCase();
        if (vowels.indexOf(lowerChar) !== -1) {
            if (!countMap.has(lowerChar)) {
                countMap.set(lowerChar, 1)
            }
            else {
                countMap.set(lowerChar, countMap.get(lowerChar) + 1);
            }

        }
    }
    return countMap;
}