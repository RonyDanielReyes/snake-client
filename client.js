const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("Received data:", data);
  });

  conn.on("connect", () => {
    console.log("Succesfully connected to game server");
    conn.write("Name: RRR");
  });
  
  setTimeout(() => {
    conn.write("Move: up");
  }, 3000);

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = { connect };