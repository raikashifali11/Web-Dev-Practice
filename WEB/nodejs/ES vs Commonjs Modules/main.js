// ES Modules
// import { a,b,c,d,e,f } from "./myModule.js";
// import Obj from "./myModule.js";
// console.log(a,b,c,d,e,f);
// console.log(Obj);

// Commonjs Modules
const a = require("./myModule2.js")
console.log(a,);
console.log(a, __dirname);


















// const { createServer } = require('node:http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
