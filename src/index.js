const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
  " ": " ",
};

function decode(expr) {
  const arr = [];
  let obj = {
    "00": "",
    10: ".",
    11: "-",
    "**********": " ",
  };
  let arrObj = Object.keys(obj);

  for (let i = 0; i < expr.length; i += 10) {
    let chunk = expr.slice(i, i + 10).replace(/00/g, "");
    for (let j = 0; j < arrObj.length; j++) {
      chunk = chunk.replaceAll(arrObj[j], obj[arrObj[j]]);
    }
    arr.push(chunk);
  }

  return arr.map((i) => MORSE_TABLE[i]).join("");
}

// const expr =
//   "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010";
// let smallexpr = "00000011110000000010";
// const result = "hello world";
// const result2 = "me";
// console.log(decode(expr));
module.exports = {
  decode,
};
