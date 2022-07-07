const capitalise = (word) => {
  return (word.charAt(0).toUpperCase() + word.slice(1));
}

const reverseString = (str) => {
  return str.split('').reverse().join('');
}


const calculator = {
   sum: function ( a , b ) {
    return (parseInt(a) + parseInt(b))
  },
  subtract: function( a, b ) {
    return (parseInt(a) - parseInt(b))
  },
  divide: function( a, b ) {
    return (parseInt(a) / parseInt(b))
  },
  multiply: function( a, b ) {
    return (parseInt(a) * parseInt(b))
  }
};

const caesarCipher = (str, shift) => {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  // string to array
  const stringArray = str.split('');
  // for each char in the array, shift the char and push into new array
  const shiftedArray = stringArray.map(function(element){
    // check for punctuation and return the punctuation mark instead of ciphering it
    if (alphabet.includes(element.toLowerCase()) === false) return element;
    let position = alphabet.indexOf(element.toLowerCase());
    // keep the uppercase characters uppercase
    if (element.toUpperCase() === element) {
      return alphabet[(position + shift) % 26].toUpperCase();
    } else {
      return alphabet[(position + shift) % 26];
    }
  });
    return shiftedArray.join('');
}

const analyzeArray = (arr) => {
  const max = Math.max.apply(null, arr);
  const min = Math.min.apply(null, arr);
  const len = arr.length;
  const sum = arr.reduce((total, item) => total  +  item);
  const ave = sum / len;
  return ({ average: ave,
            min: min,
            max: max,
            length: len
          })
};



export { capitalise, reverseString, calculator, caesarCipher, analyzeArray }