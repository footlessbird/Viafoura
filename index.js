const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "> kvs.",
});

const kvs = {};
const { enterKeyValue, getAndRemove } = require("./helper")(rl, kvs);

const cmdInfo = `Type one of commands (e.g. add)
    
    - add
    - remove
    - get

    ctrl + c // exit app
`;

console.log(cmdInfo);
rl.prompt();
rl.on("line", (line) => {
  const keyList = Object.keys(kvs).join();
  switch (line.trim().toLowerCase()) {
    case "add":
      enterKeyValue(null, null);
      break;
    case "remove":
      getAndRemove(keyList, line);
      break;

    case "get":
      getAndRemove(keyList, line);
      break;

    default:
      console.log(cmdInfo);
      break;
  }
  rl.prompt();
}).on("close", () => {
  rl.setPrompt("🙋");
  rl.prompt();
  console.log("Good bye, have a great day!");
  process.exit(0);
});
