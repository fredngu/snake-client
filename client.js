const { IP, PORT, NAME } = require("./constants");

const net = require("net");
// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // message on successful startup
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write(`Name: ${NAME}`);
  });

  conn.setEncoding("utf8");

  // interprets the data returned from the game server
  conn.on("data", (data) => {
    console.log("Game Server: " + data + "\nPress CTRL + C to exit.");
  });

  return conn;
};

module.exports = {
  connect
};