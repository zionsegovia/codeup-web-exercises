//
const isNumericAndNotNaN = (input) => {
    return !isNaN(parseFloat(input)) && input !== null && typeof input !== `boolean` && typeof input !== `string`;

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}
//random number generator function

