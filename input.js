const { EXIT_GAME, MOVEMENT, TAUNT } = require("./constants");
// Stores the active TCP connection object.
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  if (key === EXIT_GAME) {
    process.exit();
  }
  if (key === MOVEMENT.MOVE_UP_KEY) {
    connection.write("Move: up");
  }
  if (key === MOVEMENT.MOVE_LEFT_KEY) {
    connection.write("Move: left");
  }
  if (key === MOVEMENT.MOVE_DOWN_KEY) {
    connection.write("Move: down");
  }
  if (key === MOVEMENT.MOVE_RIGHT_KEY) {
    connection.write("Move: right");
  }
  if (TAUNT[key]) {
    connection.write(TAUNT[key]);
  }
};

module.exports = { setupInput };