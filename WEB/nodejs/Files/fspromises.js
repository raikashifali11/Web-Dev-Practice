import fs from "fs/promises";

// console.log(fs);
// let a = await fs.readFile("Kashif.txt");
// let b = await fs.appendFile("Kashif.txt", "\nYOu are goOd!")
// console.log(a.toString());



try {
  const stats = await fs.stat('./kashif.txt');
  console.log(stats.isFile()); // true
  console.log(stats.isDirectory()); // false
  console.log(stats.isSymbolicLink()); // false
  console.log(stats.size); // 1024000 //= 1MB
} catch (err) {
  console.log(err);
}
