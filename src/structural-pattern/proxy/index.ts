import path from "path";
var FS_Proxy = require("./FS_Proxy");
import * as fs from "fs";
const fsWithProxy = new FS_Proxy(require("fs"));

// var txtFile = path.join(__dirname, 'Readme.txt');
const mdFile = path.join(__dirname, "Readme.md");

const result = (error: Error, contents: string) => {
  if (error) {
    console.log("\x07");
    console.error(error);
    process.exit(0);
  }

  console.log("reading file...");
  console.log(contents);
};

// fs.readFile(txtFile, 'UTF-8', result);
fsWithProxy.readFile(mdFile, "UTF-8", result);
