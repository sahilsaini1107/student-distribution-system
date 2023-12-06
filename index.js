const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let BV = [], AV = [], BNV = [], ANV = [], NA = [];
let capacity;
let mySet = new Set();

function processInput(line) {
  const words = line.split(' ');

  if(words[0] === 'fin'){
    rl.close();
    return;
  }
  else if (words[0] === 'init') {
    capacity = Math.floor(parseInt(words[1]) / 4);
  } else if (words[0] === 'reg') {
    let obj = {
      rollNumber: parseInt(words[1]),
      className: words[2],
      foodPreference: words[3]
    };

    if (!mySet.has(obj.rollNumber)) {
      if (obj.className === 'A') {
        if (obj.foodPreference === 'V' && AV.length < capacity) {
          AV.push(obj.rollNumber);
          mySet.add(obj.rollNumber);
        } else if (obj.foodPreference === 'NV' && ANV.length < capacity) {
          ANV.push(obj.rollNumber);
          mySet.add(obj.rollNumber);
        } else {
          NA.push(obj.rollNumber);
        }
      } else if (obj.className === 'B') {
        if (obj.foodPreference === 'V' && BV.length < capacity) {
          BV.push(obj.rollNumber);
          mySet.add(obj.rollNumber);
        } else if (obj.foodPreference === 'NV' && BNV.length < capacity) {
          BNV.push(obj.rollNumber);
          mySet.add(obj.rollNumber);
        } else {
          NA.push(obj.rollNumber);
        }
      } else {
        NA.push(obj.rollNumber);
      }
    }
  }
}

function getInput() {
  rl.question('Enter input (enter "fin" to finish):\n', (line) => {
    if(line.trim() === 'fin'){
      rl.close();
      return;
    }
    processInput(line);
    getInput(); // Recursive call to continue input
  });
}

rl.on('close', () => {
  console.log('You entered:');
  console.log("BV", BV);
  console.log("BNV", BNV);
  console.log("AV", AV);
  console.log("ANV", ANV);
  console.log("NA", NA);
});

getInput();


module.exports = { processInput, BV, AV, BNV, ANV, NA, mySet };