


var readline = require('readline'),
  rl = readline.createInterface(process.stdin, process.stdout),
  prefix = 'Sana asks> ';

rl.on('line', function(line) {
  switch(line.trim()) {
    case 'hello':
      console.log('world!');
      break;
    default:
      console.log('Great choice! Our lovely wait staff will be at your service right away!`' + line.trim());
      break;
  }
  rl.setPrompt(prefix, prefix.length);
  rl.prompt();
}).on('close', function() {
  console.log('Have a great day!');
  process.exit(0);
});
console.log(prefix + 'Hi there!what do you feel like eating today?');
rl.setPrompt(prefix, prefix.length);
rl.prompt();



// class Readline{
//   constructor(name) {
//     this.name = name;
//   }
//   hello(){
//     // return 'hogehoge $(this.name)';
//     return ` I'm ${this.name}`;
//
//   }
// }
//
// module.exports = Readline;
// //
// // const readline = require('readline');
// //
// // const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//
// // var multiply = function(num) {
// //   return num * 5;
// // }
// //
// // rl.question('Whats a number? ', (answer) => {
// //   // TODO: Log the answer in a database
// //   // console.log(`Thank you for your valuable feedback: ${answer}`);
// //   console.log(`five times that amount is: ${multiply(answer)}`);
// //
// //   rl.close();
// // });
//
// rl.question('Hi sana, How r u? ', (answer) => {
//
//   console.log(`Great!Have a lovely day: ${answer}`);
//
//   rl.close();
// });
