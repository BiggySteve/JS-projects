String.prototype.palindrome = function() {
    let r = this.split("").reverse().join("");
    return (r === this.valueOf());
}
/* for loop
String.prototype.palindrome = function() {
    let len = this.length - 1;
    for (let i = 0; i <= len/2; i++) {
        if (this.charAt(i) !== this.charAt(len - i)) {
            return false;
        }
    }
    return true;
} */

let phrases = ["eve", "kayak", "mom", "wow", "Not a palindrome"];

for (let i = 0; i < phrases.length; i++) {
    let phrase = phrases[i];
    if (phrase.palindrome()) {
        console.log("'" + phrase + "' is a palindrome");
    } else {
        console.log("'" + phrase + "' is NOT a palindrome");
    }
}