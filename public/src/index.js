import chalk from 'chalk';
import dotenv from 'dotenv';
import express from 'express';
import figlet from 'figlet';
import console from './utils/console.js';
import email from './email/index.js';
import animal from './animal/index.js';
import { createAnimalList } from './animal/Factory.js';
dotenv.config();
console.log(chalk.bold.magentaBright(figlet.textSync('Utils Server', {
    font: 'Cosmike',
    horizontalLayout: 'default',
    verticalLayout: 'default',
})));
createAnimalList();
const app = express();
app.use(express.json());
// app.use(pino.default());
app.use('/contact', email);
app.use('/animal', animal);
app.listen(process.env.SERVER_PORT);
//# sourceMappingURL=index.js.map