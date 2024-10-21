#!/usr/bin/env node

import fs from "fs/promises";
import path from "path";

async function getTotalFilesInDirectory(dirPath) {
  try {
    const files = await fs.readdir(dirPath);
    console.log(`${files.length}`);
  } catch (err) {
    console.error("Failed to read directory:", err.message);
    process.exit(1);
  }
}

const dirPath = process.argv[2] || ".";
const resolvedPath = path.resolve(dirPath);

getTotalFilesInDirectory(resolvedPath);
