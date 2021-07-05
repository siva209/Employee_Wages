function validate(zip) {
    let zipRegex = RegExp('^[0-9]{3}[ ]?[0-9]{3}$');
    if (zipRegex.test(zip)) {
        console.log("Zip is correct");
    } else {
        console.log("Zip is incorrect");
    }
}
var prompt = require('prompt-sync')();
let zip = prompt("Enter the zip");
validate(zip);
//Validating Email
function validateEmail(email) {
    let emailRegex = RegExp('^[a-z]+[-+._]?[a-z]+@[a-z]+[.][a-z]{2,}[.]?([a-z]{2,})?$');
    if (emailRegex.test(email)) {
        console.log("Email is correct");
    } else {
        console.log("Email is incorrect");
    }
}
let email = prompt("Enter the email");
validateEmail(email);