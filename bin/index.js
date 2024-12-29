#!/usr/bin/env node
import helpOutput from "../services/help.js";
import displayTree from "../services/tree.js";
import depthArg from "../services/depthArg.js";
import fs from "fs";
import path from "path";
const args = process.argv.slice(2);
const targetDir = args[1] || '.';

let maxDepth = await depthArg(args);

if (args.length > 0) {
  const actionArgument = args[0];
  switch (actionArgument) {
    case "-h":
    case "--help":
      helpOutput();
      break;
      case "tree":
        if(!fs.existsSync(targetDir)){
          console.log(`El directorio ${targetDir} no existe`);
          process.exit(1);
        }
        console.log(`\nTree view for: ${path.resolve(targetDir)}\n`);
        displayTree(targetDir, 0, maxDepth)
        break;
    default:
      helpOutput();
      break;
  }
  process.exit(1);
}