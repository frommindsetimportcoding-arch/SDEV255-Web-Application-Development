// const fs = require('fs');
// import * as fs from 'fs';
// import * as cowsay from "cowsay";
// import { say } from "cowsay";
import { say } from "https://esm.sh/cowsay";

const output = say({ text: 'Nathan' });
console.log(output);

const cow = document.getElementById("cow");
cow.innerText = output;
