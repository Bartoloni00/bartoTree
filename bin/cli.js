#!/usr/bin/env node
import helpOutput from "../lib/commands/help.js";
import displayTree from "../lib/commands/tree.js";
import find from "../lib/commands/find.js";
import depthArg from "../lib/utils/depthArg.js";
import fs from "fs";
import path from "path";
import filterFolders from "../lib/utils/excludeFolders.js";
import findElement from "../lib/utils/findElement.js";

const args = process.argv.slice(2);
const targetDir = args[1] || '.';

let maxDepth = await depthArg(args);
let findE = await findElement(args)
const excludeFolders = filterFolders(args);

if (args.length > 0) {
  const actionArgument = args[0];
  switch (actionArgument) {
    case "-h":
    case "--help":
      helpOutput();
      break;
      case "tree":
        if(!fs.existsSync(targetDir)){
          console.log(`The directory ${targetDir} does not exist.`);
          process.exit(1);
        }
        console.log(`\nTree view for: ${path.resolve(targetDir)}\n`);
        displayTree(targetDir, 0, maxDepth, excludeFolders)
        break;
      case "find":
        if(!fs.existsSync(targetDir)){
          console.log(`The directory ${targetDir} does not exist.`);
          process.exit(1);
        }
        console.log(`\nSearch ${findE} in : ${path.resolve(targetDir)}\n`);
        find(targetDir,0 ,maxDepth,  findE, excludeFolders)
      break;
    default:
      helpOutput();
      break;
  }
  process.exit(1);
}