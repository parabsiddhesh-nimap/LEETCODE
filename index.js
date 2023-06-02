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
    let str = "";
    for(let i = 0; i < digits.length  ; i++) {
        if(digits[i] >= 0 && digits[i] <=9){
            str += digits[i];
        } else return false;
    };
    str = eval(str) + 1;
    return str;
};

// console.log(plusOne([1,2,3,4,4]));