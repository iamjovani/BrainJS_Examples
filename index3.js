//Should be able to tell the differnece between a insect and an animal


const brain = require('brain.js');
const data = require('./data3.json');

const network = new brain.recurrent.LSTM();

const trainingData = data.map(item => 
({
  input: item.text,
  output: item.category
}));

network.train(trainingData, {iterations: 2000});

const output = network.run('I love Birds!');

console.log(`Category: ${output}`); //output

