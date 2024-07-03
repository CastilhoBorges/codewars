/*
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:
*/

function areYouPlayingBanjo(name) {
    return `${name} ${name[0] === 'R' || name[0] === 'r' ? 'plays banjo' : 'does not play banjo'}`
}

console.log(areYouPlayingBanjo('aonaldo'));