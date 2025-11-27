const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("Enter number of seconds to countdown: ", function(seconds) {
  seconds = Number(seconds);
  console.log("Press 's' anytime to stop the countdown.\n");
  let intervalId = setInterval(() => {
    console.log(seconds);
    if (seconds === 0) {
      clearInterval(intervalId);
      console.log("Countdown Complete!");
      rl.close();
    }
    seconds--;
  }, 1000);
  process.stdin.setRawMode(true);
  process.stdin.on("data", (key) => {
    if (key.toString().trim() === "s") {
      clearInterval(intervalId);
      console.log("Countdown Stopped by User!");
      rl.close();
    }
  });
});