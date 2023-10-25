const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
const connection = connect();
setupInput(connection); // Pass the function to handle user input

