const randomNumber = function (min, max) {
    const result = Math.floor(Math.random() * ((max + 1) - min) + min);
    return result;
}

const randomArrayElement = function (array) {
    const result = randomNumber(0, array.length - 1);
    return array[result];
}


export default randomArrayElement;