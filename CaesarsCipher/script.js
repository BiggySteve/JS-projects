const rot13 = (message) => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const cipher = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";
    return message.replace(/[a-z]/gi, letter => cipher[alphabet.indexOf(letter)]);
}

rot13("SERR PBQR PNZC");

/* 1) shift cipher- meanings of the letters are shifted by some set amount.Rot13 cipher
the values of the letters are shifted 13 places.
   2) All letters uppercase = toUpperCase()
   3) Do not transform any non-alphabetic character, but do pass them on */

   /*the above can also be written like this:
const rot13 = str => str.split('')
    .map(char => String.fromCharCode(char.charCodeAt(0) + (char.toLowerCase() < 'n' ? 13 : -13)))
    .join(''); */
