const prompt = require('prompt-sync')({sigint: true});
const mail = prompt("enter a  mail");

// check the mail is valid or not
console.log(mail.endsWith("@gmail.com")?`${mail} is valid `:`${mail} is invalid`);


