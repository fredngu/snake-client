const { IP, PORT, NAME } = require("./constants");

const net = require("net");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  })
  conn.on("connect", () => {
    conn.write(`Name: ${NAME}`);
  });
  // conn.on("connect", () => {
  //   setTimeout(() => {
  //     conn.write("Move: down");
  //   }, 500);
  //   setTimeout(() => {
  //     conn.write("Move: left");
  //   }, 1000);
  //   setTimeout(() => {
  //     conn.write("Move: left");
  //   }, 1500);
  //   setInterval(() => {
  //     conn.write("Move: up");
  //   }, 5000);
  // });

  conn.on("data", (data) => {
    console.log(data);
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {
  connect
}