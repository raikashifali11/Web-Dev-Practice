import fs from "fs/promises";
import fsn from "fs";
import path from "path";

const basePath = "C:\\Users\\DELL\\Desktop\\Sigma web dev Exercises\\Exercises\\EXERCISE 15";

let files = await fs.readdir(basePath);

for (const item of files) {
  let ext = item.split(".").pop();
  if (ext !== "js" && ext !== "json" && item.split(".").length > 1) {
    if (fsn.existsSync(path.join(basePath,ext))) {
      // move the file to the directory
      fs.rename(path.join(basePath,item),path.join(basePath,ext,item));
    }
    else{
      fsn.mkdirSync(ext);
      // move the file to the directory
      fs.rename(path.join(basePath,item),path.join(basePath,ext,item));
    }
  }
}
