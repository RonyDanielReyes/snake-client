const net = require("net");
const { IP, PORT } = require("./constants");


const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Succesfully connected to game server");
  });

  conn.write("Name: RRR");{
  };

  conn.on("data", (data) => {
    console.log("Received data:", data);
  });
  
  return conn;
};

module.exports = { connect };