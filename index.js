let kvs = {};

const cmdInfo = `Type one of commands (e.g. add)
            - add
            - remove
            - get
            
            ctrl + c // exit app
`;

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "> kvs.",
});

console.log(cmdInfo);
rl.prompt();
rl.on("line", (line) => {
  const keyList = Object.keys(kvs).join();
  switch (line.trim().toLowerCase()) {
    case "add":
      rl.question("Please enter key> ", (key) => {
        key = key.trim();
        if (key.length !== 0) {
          kvs[key] = "";
          console.log(`You've entered "${key}"`);
        } else {
          console.log("Nothing entered..");
          return;
        }

        rl.question("Please enter value> ", (value) => {
          kvs[key] = value;
          console.log(`You've entered "${value}"`);
          console.log(kvs);
        });
      });
      break;
    case "remove":
      console.log(keyList.length);
      if (keyList.length !== 0) {
        rl.question(
          `You can remove following key(s) 👉 ${keyList}
        Please enter key to remove> `,
          (key) => {
            delete kvs[key];
            if (key) {
              if (keyList.includes(key)) {
                console.log("Successfully removed");
              } else {
                console.log("No such key found");
                return;
              }
            } else {
              console.log(`No key entered, nothing removed `);
            }
            console.log(kvs);
          }
        );
      } else {
        console.log("No data to remove");
      }
      break;

    case "get":
      console.log(keyList.length);
      if (keyList.length !== 0) {
        rl.question(
          `You can get data from following key(s) 👉 ${keyList}
          Please enter key> `,
          (key) => {
            if (key) {
              if (keyList.includes(key)) {
                console.log(`${key} has ${kvs[key]}`);
              } else {
                console.log("No such key found");
                return;
              }
            } else {
              console.log("No key entered");
              return;
            }
            console.log(kvs);
          }
        );
      } else {
        console.log("No data to get");
      }
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
