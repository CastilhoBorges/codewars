function feast(beast, dish) {
    if (dish[0] === beast[0] && (dish[dish.length - 1]) === (beast[beast.length - 1])) {
        return true;
    } else {
        return false;
    }
}

console.log(feast('brown bear', 'garlic naan'));