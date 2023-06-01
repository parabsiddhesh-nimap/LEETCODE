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
