// local storage = holds strings or variables as string even if we 
//                 refresh the page
let ratings = 5;

localStorage.setItem('message',`I am a programmer with ratings ${ratings}`);
console.log(localStorage.getItem('message'));
