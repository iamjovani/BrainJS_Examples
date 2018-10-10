/* If the first number is greater than the second then
   our output should be True else an output of False.
*/

const brain = require('brain.js');
var net = new brain.NeuralNetwork();

//training data
var training_data = 
[
    {input: [1, 2],  output: [0]}, 
    {input: [1, 3],  output: [0]}, 
    {input: [2, 5],  output: [0]}, 
    {input: [8, 4],  output: [1]}, 
    {input: [7, 2],  output: [1]}, 
    {input: [1, 6],  output: [0]}, 
    {input: [6, 3],  output: [1]},
    {input: [2, 1],  output: [1]},
    {input: [2, 2],  output: [0]},
    {input: [12, 1],  output: [1]},
    {input: [12, 24], output: [0]},
    {input: [45, 45], output: [0]}, 
    {input: [4 , 44], output: [0]}, 
    {input: [58, 57], output: [1]} 
   
]

 net.train(training_data)

var booleanVal = net.run([6000,44000]); // input data

if (booleanVal >= 0.5)
    console.log(true);
else
    console.log(false);

 console.log(booleanVal); // output of the probability 

