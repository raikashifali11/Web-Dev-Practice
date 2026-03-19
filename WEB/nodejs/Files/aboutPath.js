import path from "path"

const URL = "C:\\Users\\DELL\\Desktop\\NodeJs\\Files\\Kashif.txt";

console.log(path.dirname(URL)); 
console.log(path.basename(URL));
console.log(path.extname(URL)); 

const newPath = path.join('/', 'users',"hehe", 'notes.txt');

console.log(newPath);