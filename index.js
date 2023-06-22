/* Q1) Palindrome Number
Given an integer x, return true if x is a palindrome, and false otherwise. */
let isPalindrome = (x) => {
    let originalNum = x;
    let reversedNum = 0;

    while(x>0){
        reversedNum = (reversedNum * 10) + (x % 10); 
        x = Math.floor(x / 10);
    }

    if(reversedNum === originalNum) return true;
    else return false;
};
// console.log(isPalindrome(12321)); //Output

//X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X

/* Q2) Roman to Integer
Convert Roman String to Integer Value */
let romanToInteger = (str) => { 
    let Number = 0;
    let Obj = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    };
    for (let i = 0; i < str.length; i++){
        let curr = Obj[str[i]];
        let next = Obj[str[i+1]];
        if(curr < next) {
            Number += next-curr;
            i++;
        } else Number += curr;
    }
    return Number;
};

// console.log(romanToInteger("MCMXCIV"))

//X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X

/* Q3) Longest Common Prefix
Write a function to find the longest common prefix string amongst an array of strings. 
If array of strings is null then return empty string*/

var longestCommonPrefix = (strs) => {
    if (!strs.length) return "";
    for (let i = 0; i < strs[0].length;i++){
        if (!strs.every((string) => string[i] === strs[0][i])) {
            return strs[0].slice(0, i);
        }
    };
    return strs[0];
};
// console.log(longestCommonPrefix(["flower","flower","flower","flower"]));

/* Q4) Valid Parentheses
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.
"()[]{}" is valid
*/
var isValidParentheses = (s) => {
    let stack = [];
    let a=true;
    let b = true;
    let c = true;
    for (let i = 0; i <s.length; i++) {
        let curr = s[i];
        if(curr === "{" || curr === "(" || curr === "[") {
            stack.push(curr);
        }else{
            if(stack.length == 0) return false;
            if(stack.slice(-1)[0]=="{" && curr === "}") {
                a=true;
                stack.pop();
            }
            else if(stack.slice(-1)[0] != "{" && curr === "}") a=false;
            if(stack.slice(-1)[0]=="[" && curr === "]") {
                b=true;
                stack.pop();
            }
            else if(stack.slice(-1)[0] != "[" && curr === "]") b=false;
            if(stack.slice(-1)[0]=="(" && curr === ")") {
                c=true;
                stack.pop();
            }
            else if(stack.slice(-1)[0] != "(" && curr === ")") c=false;
        }
    }
    if(a&&b&&c && stack.length == 0) return true;
    return false;
};

// var user = isValidParentheses("[({)]");
// console.log(user);

/* 
Q5) Merge two sorted Arrays
Merge the two lists in a one sorted list. 
The list should be made by splicing together the nodes of the first two lists.
*/
var list1 = [1,2,4];
var list2 = [14,6,3,4]
let mergeTwoLists = (list1,list2) => {
    // let appendedList = list1.concat(list2);
    for (let k=0;k<list2.length ;k++){
        list1.push(list2[k]);
    }
    return sortArray(list1);
};
// console.log(mergeTwoLists(list1,list2));


//This below function sorts an Array
function sortArray(Arr) {
    let temp;
    for (let i = 0; i < Arr.length; i++){
        for (let j = i; j < Arr.length; j++){
            if(Arr[i] > Arr[j]){
                //Here we are swapping numbers  
                temp = Arr[i];
                Arr[i] = Arr[j];
                Arr[j] = temp;
            }
        }
    }
    // console.log(Arr);
    return Arr;
}

/* 
Q6) Remove duplicates from an sorted Array 
*/

const removeDuplicates = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for(let j = arr.length ; j >= i+1; j--) {
            if(arr[j] === arr[i]) {
                arr.splice(i, 1);
            }
        }
    }
    return arr;
}
// console.log('removeDuplicates :',removeDuplicates([1,1,2]));

/*
Q7) Remove Specified Elements from a Array
arr = list of array
val = array of element that is to be removed
*/

const removeElement = (nums,val) => {
    for (let i = nums.length-1 ; i >= 0 ; i--){
        if(nums[i] === val){
            nums.splice(i,1)
        }
    }
    return nums;
}
// console.log(removeElement([3,2,2,3],2));

/*
Q8)Find the Index of the First Occurrence in a String
Given two strings needle and haystack, 
return the index of the first occurrence of needle in haystack, 
or -1 if needle is not part of haystack.
*/

const strStr = (haystack, needle) => {
    if(haystack.length < needle.length) return -1;
    let MatchingStr = haystack.indexOf(needle);
    return MatchingStr;
};
// console.log(strStr("leetcode","leeto"));

/*
Q9)  Search Insert Position
Given a sorted array of distinct integers and a target value, 
return the index if the target is found. If not, 
return the index where it would be if it were inserted in order.
*/

const searchInsert = (nums, target) => {
    if(nums.includes(target)) return nums.indexOf(target);
    for (let i = 0; i < nums.length; i++){
        if(target < nums[i]) return 0;
        else if(nums[i] < target && nums[i+1] > target){
            return i+1;
        }
        else if((nums.indexOf(nums[i]) + 1) === nums.length 
        && target > nums[i]){
            return nums.length;
        }
    };
    return nums;
};

// console.log(searchInsert([1,2,3,4],3))

/*
Q10)  Length of Last Word
Given a string s consisting of words and spaces, 
return the length of the last word in the string.
A word is a maximal substring consisting of non-space characters only.
*/

const lengthOfLastWord = (s) => {
    let str = s.trim().split(' ');
    return str[str.length-1].length;
};
// console.log(lengthOfLastWord("Hello World"));

//Second Approach 
const lengthOfLastWord2 =(str) =>{
    let count = 0;
    for (let i = str.length - 1; i >= 0;i--) {
        if(str[i] !== " "){
            for(let j = i;j >= 0; j--){ 
                if(str[j] !== " "){
                    count += 1;
                }else return count;
            }
        }
    }
    return count;
};

// console.log(lengthOfLastWord2("   fly me   to   the moon  "));

/*
Q11)  Plus One
Given a string s consisting of words and spaces, 
return the length of the last word in the string.
A word is a maximal substring consisting of non-space characters only.
constraints
1 <= digits.length <= 100
0 <= digits[i] <= 9
*/

var plusOne = (digits) => {
    let str = BigInt(digits.join('')) + 1n;
    str = str.toString();

    let arr = [];
    for(let i = 0; i < str.length  ; i++) {
            arr.push(str[i]);
        }
        return arr;
};

// console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));

/*
Q12)  Sqrt
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. 
The returned integer should be non-negative as well.
*/

const sqrt = (x) => {
    return Math.floor(x**0.5);
};

// console.log(sqrt(8));

/* 
Q13) Climbing Stairs
You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/
const climbStairs = function(n) {
    const memo = [1,1,2];
    for (let i = 3;i <= n; i++){
        memo[i] = memo[i-1] + memo[i-2];
        // console.log(memo[i]);
    } 
    return memo[n]
};
// console.log(climbStairs(4))

/* 
Q14) Fibonacci Number
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, 
such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
*/

const fib = function(n) {
    if(n<2) return n
    return fib(n-1)+fib(n-2)
};
// console.log(fib(4));

/* 
Factorial of a Number
*/
const factorial = (n) => {
    let num = 1;
    for (let i = n;i > 0; i--){
        num *= i;
    }
    return num;
};
// console.log(factorial(4))

/* 
Q15) Checking Sum Zero 
[-5,-4,-3,-2,0,2,4,6,8,5]    
output will contain 2 elements that sum to zero.
*/
//1st approach using 2 loop
const checkSumZero = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if(arr[i] + arr[j] == 0) {
                return [arr[i], arr[j]]
            } 
        }

    }
}
// console.log(checkSumZero([-5,-4,-3,-2,0,2,4,6,8]))
//2nd approach using 1 loop
const checkSumZero1 = (arr) => {
    let sum = 0;
    let first = 0;
    let last = arr.length - 1;

    while(first < last) {
        sum = arr[first] + arr[last];
        if(sum === 0){
            return [arr[first], arr[last]];
        }
        else if(sum > 0){
            last--;
        }
        else {
            first++;
        } 
    };
}

// console.log(checkSumZero1([-5,-4,-3,-2,0,2,4,5,6,8]))

/* 
Q16) 3Sum
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
*/

const check3SumZero = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            for (let k = j+1; k < arr.length; k++) {
                if(arr[i] + arr[j] + arr[k] == 0) {
                    return [arr[i], arr[j], arr[k]]
                } 
            }
        }
    }
}

// console.log(check3SumZero([-5,-4,-3,-2,0,2,4,6,8]))

/*
Anagram 
'hello' => 'lleo' //not a anagram
*/

const checkAnagram = (str1, str2) => {
    if(str1.length!== str2.length) return false;    
    let map = {};
    for (let i = 0; i < str1.length; i++) {
        map[str1[i]] = (map[str1[i]] || 0) + 1;
    }
    for (let i = 0; i < str2.length; i++) {
        if(!map[str2[i]]) return false;
        map[str2[i]]--;
    }
    return true;
    // return map;
}; 

// console.log(checkAnagram('siddhesh','siddhesh'))

const countUniques = (arr) => {
    let map = {};
        for (let i = 0; i < arr.length; i++) {
            if(!map[arr[i]]) map[arr[i]] = 1;
            else map[arr[i]]++;
        }
        return map;
}

// console.log(countUniques([1,1,2,3,3]))