import { prompt } from './prompt.js';

const targetNumber = (min, max) => {
    const getNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return getNumber;
}

const checkUserGuess = (target) => {
    let getUserNumber = -1;
    let attempts = 0;

    while (getUserNumber !== target) {
        getUserNumber = Number(prompt("Choose your number : "));
        if (Number.isNaN(getUserNumber)) {
            console.log("Invalid inpute. Please enter a number")
            continue;
        }

        attempts++;


    if (getUserNumber > target ) {
        console.log("Your number is too big")
    }
    else if (getUserNumber < target){
        console.log("your number is too less")
    }
    else if(getUserNumber === target) {
        console.log("GG");
    }
}
return attempts

}

const target = targetNumber(0, 100)
const attempts = checkUserGuess(target)
console.log("The target number is :" + target)
console.log("Réussi en " + attempts + " essaie")
