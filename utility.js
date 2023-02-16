//
const isNumericAndNotNaN = (input) => {
    return !isNaN(parseFloat(input)) && input !== null && typeof input !== `boolean` && typeof input !== `string`;


//random number generator function

