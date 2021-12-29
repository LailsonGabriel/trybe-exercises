const encode = (string) => {
  let newstring = [];
  for(let i = 0; i <= string.length; i += 1) {
    if(string[i] === 'a') newstring.push('1');
    else if (string[i] === 'e') newstring.push('2');
    else if (string[i] === 'i') newstring.push('3');
    else if (string[i] === 'o') newstring.push('4');
    else if (string[i] === 'u') newstring.push('5');
    else newstring.push(string[i]);
  }
  newstring = newstring.join("")
  return newstring
}

console.log(encode('aeiou'))

const decode = (string) => {
  let newstring = [];
  for(let i = 0; i <= string.length; i += 1) {
    if(string[i] === '1') newstring.push('a');
    else if (string[i] === '2') newstring.push('e');
    else if (string[i] === '3') newstring.push('i');
    else if (string[i] === '4') newstring.push('o');
    else if (string[i] === '5') newstring.push('u'); 
    else newstring.push(string[i]);
  }
  newstring = newstring.join("")
  return newstring
}

module.exports = { encode, decode }