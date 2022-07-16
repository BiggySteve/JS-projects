function palindrome(str) {
    const alphaN = /[\W_]/g;
    const regStr = str.toLowerCase().replace(alphaN, "");
//.replace means to return a new string with some or all matches of a pattern replaced by a replacement
    const reverseStr = regStr.split("").reverse().join("");
//.split splits a string into an array of substrings
    if (reverseStr === regStr) return true;
    return false;    
}

palindrome("eye");

// /[\W_]/g; this is used to find the non word character(which aren't a to z, A to Z, and 0 to 9)
// it is the same as /[a-z0-9]/g* for some reason that didn't work on Freecodecamp project