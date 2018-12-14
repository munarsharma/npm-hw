const chalk = require("chalk");

const helloBlue = () => {
  console.log(chalk.blue("Hello World"));
};

//const helloRed = console.log(chalk.red("Hello World"));

const stringToColor = (str, color) => {
  console.log(`chalk.${color}(str)`);
};

stringToColor("meow meow", "blue");

const evensBlueOddsYellow = str => {
  for (let i = 0; i < str.length; i++) {
    if (i % 2) {
      console.log(chalk.yellow(str[i]));
    } else {
      console.log(chalk.blue(str[i]));
    }
  }
};

//evensBlueOddsYellow("hey how are you?");

const angryText = str => {
  let upperStr = str.toUpperCase();
  console.log(chalk.red.underline(upperStr));
};

const backgroundCyan = str => {
  console.log(chalk.white.bgCyan(str));
};

const boldFirstUnderLineLast = str => {};
