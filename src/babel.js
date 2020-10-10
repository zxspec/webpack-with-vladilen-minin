async function start() {
  return await Promise.resolve("### Async is working");
}

start().then(console.log);

class Util {
  static id = Date.now();
}

console.log("### Util id: ", Util.id);

import("lodash").then((_) => {
  console.log("### lodash.random: ", _.random(0, 42, true));
});
