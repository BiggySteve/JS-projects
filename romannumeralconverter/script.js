function convertToRoman(num) {
    const numberRom = { 
        1000: 'M',
        900: 'CM',
        500: 'D',
        400: 'CD',
        100: 'C',
        90: 'XC',
        50: 'L',
        40: 'XL',
        10: 'X',
        9:  'IX',
        5:  'V',
        4:  'IV',
        1:  'I'
    };
    
    const roman = "";

    for (var key in numberRom) {
        while (num >= numberRom[key]) {
            roman += key;
            num -= numberRom[key];
        }
    }
    return roman;

}

convertToRoman(36);