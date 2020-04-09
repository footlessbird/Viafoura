module.exports = function (rl, kvs) {
  function getAndRemove(keyList, line) {
    if (keyList.length !== 0) {
      rl.question(
        `You can ${line} following key(s) 👉 ${keyList}
                        Please enter key to ${line}> `,
        (key) => {
          if (line === "remove") {
            delete kvs[key];
          }
          if (key) {
            if (keyList.includes(key)) {
              console.log(`${key} has ${kvs[key]}`);
              if (line === "remove") {
                console.log("Successfully removed");
              }
            } else {
              console.log("No such key found");
              return;
            }
          } else {
            if (line === "remove") {
              console.log(`No key entered, nothing removed `);
            } else if (line === "get") {
              console.log(`No key entered`);
            }
          }
        }
      );
    } else {
      console.log(`No data to ${line}`);
    }
  }

  function enterKeyValue(k = null, kf = null) {
    let keyFlag = kf;
    if (keyFlag === false) {
      return;
    }
    let key = k;
    let input = "";
    if (key === null) {
      input = "key";
    } else {
      input = "value";
    }
    rl.question(`Please enter ${input}> `, (data) => {
      data = data.trim();
      if (data.length !== 0) {
        if (key === null) {
          kvs[data] = "";
          key = data;
        }
        if (keyFlag) {
          kvs[key] = data;
          keyFlag = false;
          console.log(`You've entered "${data}"`);
          return enterKeyValue(key, keyFlag);
        }
        console.log(`You've entered "${data}"`);
        keyFlag = true;
        return enterKeyValue(key, keyFlag);
      } else {
        console.log("Nothing entered..");
        return;
      }
    });
  }

  return { getAndRemove, enterKeyValue };
};
