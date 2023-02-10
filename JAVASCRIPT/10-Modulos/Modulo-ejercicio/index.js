import { suma, multiplicar } from "./controller.js";

const sum1 = suma(1, 2);
console.log(sum1);

const sum2 = suma(4, 5);
console.log(sum2);

const mult = multiplicar(sum1, sum2);

import chalk from "chalk";
console.log(chalk.green(mult));
