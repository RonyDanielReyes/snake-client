const net = require("net");

const { connect } = require("./client");
const { setupInput } = require("./input");

const handleUserInput = function (key) {
  if (key === '\u0003') { // '\u0003' represents Ctrl + C
    process.exit(); // Terminate the program
  }
};

console.log("Connecting ...");
connect();
setupInput(handleUserInput); // Pass the function to handle user input

