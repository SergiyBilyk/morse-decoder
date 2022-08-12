const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr){
    let sentence = '';
    for(let i = 0; i < expr.length; i += 10) {
        const word = expr.slice(i, i + 10)
        sentence += word == '**********' ? ' ' : translate(word);
    }
    return sentence;
} 

function translate(word){
    let b = '';
    for(let j = 0; j < 10; j += 2) {
        const l = word.slice(j, j + 2);
        b += l == '10' ? '.' : l == '11' ? '-' : '';
    }
    return MORSE_TABLE[b] || '';
}

module.exports = {
    decode
}
