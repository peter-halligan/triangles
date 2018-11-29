#!/usr/bin/env node


const chalk = require('chalk');
const commander = require('commander');
const TriangleType = require('../TriangleType');

commander
  .version('0.0.1')
  .description('application to return the type of triangle based on the length of the side')
  .arguments('<a> <b> <c>')
  .parse(process.argv);


const triangle = TriangleType(...commander.args);
triangle.then(
  data => console.log(chalk.green(data)),
  e => console.log(chalk.red(e)),
);
