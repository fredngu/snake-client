const { EXIT_GAME, MOVEMENT, TAUNT } = require("./constants");
// Stores the active TCP connection object.
let connection;

// sends the messages from the inputs to the server
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

// movement and message inputs from the users/players
let movement;
const handleUserInput = function(key) {
  if (key === EXIT_GAME) {
    process.exit();
  }
  if (key === MOVEMENT.MOVE_UP_KEY && key !== MOVEMENT.MOVE_DOWN_KEY) {
    clearInterval(movement);
    movement = setInterval(() => connection.write("Move: up"), 150);
  }
  if (key === MOVEMENT.MOVE_LEFT_KEY) {
    clearInterval(movement);
    movement = setInterval(() => connection.write("Move: left"), 150);
  }
  if (key === MOVEMENT.MOVE_DOWN_KEY) {
    clearInterval(movement);
    movement = setInterval(() => connection.write("Move: down"), 150);
  }
  if (key === MOVEMENT.MOVE_RIGHT_KEY) {
    clearInterval(movement);
    movement = setInterval(() => connection.write("Move: right"), 150);
  }
  if (TAUNT[key]) {
    connection.write(TAUNT[key]);
  }
};

module.exports = { setupInput };