// Question:-  Check a credit card number format
// 1:for validation of 16 digit card number

//answer:-let reg=/^\d{16}$/;
//2:-Starting with 34 or 37, length 15 digits.
//answer:-/\^3([47]){15}/

//3:Starting with 4, length 13 or 16 digits.
//answer:- /^4{16}/  //   /^4/;

//4:- Starting with 51 through 55, length 16 digits.
// answer:-/^(51 ||55){16}/

// 5:-  Starting with 6011, length 16 digits or starting with 5, length 15 digits.
//answer:-/^(6011 / 5)/
//6:- Starting with 300 through 305, 36, or 38, length 14 digits.
// amswer:- /^(300 | 301 | 302| 303|304|305|36|38)/

// 7:-Starting with 2131 or 1800, length 15 digits or starting with 35, length 16 digits.
// answer:-/^(2131 |1800 | 35)/

// f (isValid) {
//     var cardNumbersOnly = ccnum.replace(/[\s-]/g,"");
//     var cardNumberLength = cardNumbersOnly.length;

//     var arrCheckTypes = ['visa', 'mastercard', 'amex', 'discover', 'dinners', 'jcb'];
//     for(i=0; i<arrCheckTypes.length; i++) {
//         var lengthIsValid = false;
//         var prefixIsValid = false;
//         var prefixRegExp;

//         switch (arrCheckTypes[i]) {
//             case "mastercard":
//                 lengthIsValid = (cardNumberLength === 16);
//                 prefixRegExp = /5[1-5][0-9]|(2(?:2[2-9][^0]|2[3-9]|[3-6]|22[1-9]|7[0-1]|72[0]))\d*/;
//                 break;

//             case "visa":
//                 lengthIsValid = (cardNumberLength === 16 || cardNumberLength === 13);
//                 prefixRegExp = /^4/;
//                 break;

//             case "amex":
//                 lengthIsValid = (cardNumberLength === 15);
//                 prefixRegExp = /^3([47])/;
//                 break;

//             case "discover":
//                 lengthIsValid = (cardNumberLength === 15 || cardNumberLength === 16);
//                 prefixRegExp = /^(6011|5)/;
//                 break;

//             case "dinners":
//                 lengthIsValid = (cardNumberLength === 14);
//                 prefixRegExp = /^(300|301|302|303|304|305|36|38)/;
//                 break;

//             case "jcb":
//                 lengthIsValid = (cardNumberLength === 15 || cardNumberLength === 16);
//                 prefixRegExp = /^(2131|1800|35)/;
//                 break;

//             default:
//                 prefixRegExp = /^$/;
//         }

//         prefixIsValid = prefixRegExp.test(cardNumbersOnly);
//         isValid = prefixIsValid && lengthIsValid;

//         // Check if we found a correct one
//         if(isValid) {
//             break;
//         }
//     }
// }

// if (!isValid) {
//     return false;
// }


//to validate an email-d

// Uppercase (A-Z) and lowercase (a-z) English letters.
// Digits (0-9).
// Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
// Character .( period, dot or fullstop) provided that it is not the first or last character and it will not come one after the other.

function checking(str){
    let reg=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    //  
    if(reg.test(str)) {
        return true
    }
    return false;
}

console.log(checking("hello#2@gmail.com"))

///^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/