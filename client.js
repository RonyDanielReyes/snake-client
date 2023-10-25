const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    port: 50541,
    host: "165.227.47.243"
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