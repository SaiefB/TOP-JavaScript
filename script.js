function add7(a) {
   return a + 7
};

let result = add7(4);

console.log(result);



function multiply(a, b) {
    return a * b
};

let multiplyResult = multiply(10, 5);

console.log(multiplyResult);



function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

let capitalizeResult = capitalize("HeLlO");

console.log(capitalizeResult);