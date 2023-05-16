const { connect } = require('./client');
const { setupInput } = require("./input");

console.log("Connecting ...");
const connection = connect();

// activates inputs to play the game
setupInput(connection);