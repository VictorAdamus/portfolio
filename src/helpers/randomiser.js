const randomPosition = (min, max) => Math.floor(Math.random()*(max - min) + min);

const randomDelay = (min, max) => Math.random()*(max-min)+min;

const randColor= (arr) => Math.floor(Math.random() * arr.length);

export {randomPosition, randomDelay, randColor}