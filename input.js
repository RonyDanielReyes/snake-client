const setupInput = function (handleUserInput) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on('data', handleUserInput); // Call the provided callback
  stdin.resume();
  return stdin;
};

module.exports = { setupInput };