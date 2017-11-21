class Readline{
  constructor(name) {
    this.name = name;
  }
  hello(){
    // return 'hogehoge $(this.name)';
    return ` I'm ${this.name}`;

  }
}

module.exports = Readline;
//
// const readline = require('readline');
//
// const rl = readline.createInterface({
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
