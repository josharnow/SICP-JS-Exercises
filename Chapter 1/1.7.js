// is_good_enough is inadequate for small numbers because the absolute tolerance
// becomes too large when x is sufficiently small, causing the answer returned
// to have a significant error 

// It is inadequate for large numbers because when x is sufficiently large, the
// answer yielded and passed back recursively is larger than the size
// available, causing a stack overflow.

function square(x) {
    return x**2;
}

function improve(guess, x) {
    return average(guess, x / guess);
}

function average(x, y) {
    return (x + y) / 2;
}

function is_good_enough(guess, x) {
    return Math.abs(square(guess) - x) < 0.001;
}

function sqrt_iter(guess, x) {
    return is_good_enough(guess, x) // The predicate function returns a boolean value
            ? guess
            : sqrt_iter(improve(guess, x), x)
}

function sqrt(x) {
    return sqrt_iter(1, x); // Can always guess that the square root of any number is 1
}

console.log(sqrt(9));
console.log(sqrt(sqrt(2) + sqrt(3)));
console.log(sqrt(.0001));


function better_is_good_enough(guess, x) { // Checks to see how close guess and improved guess are as a percent. Basically says: "Figure out how far guess is from improved guess and then see if that amount is less than .1% of guess. If it is, stop the program"
    return Math.abs(improve(guess, x) - guess) < (guess * .001);
}

function better_sqrt_iter(guess, x) {
    return better_is_good_enough(guess, x)
    ? guess
    : better_sqrt_iter(improve(guess, x), x)
}

function better_sqrt(x) {
    return better_sqrt_iter(1, x);
}

console.log(better_sqrt(9));
console.log(better_sqrt(better_sqrt(2) + better_sqrt(3)));
console.log(better_sqrt(.0001));


function best_is_good_enough(guess, x) { // The best result is obtained by letting the expression keep iterating until the guess and the next guess are equal (no further improvement is possible at the current precision).
    return improve(guess, x) === guess;
}

function best_sqrt_iter(guess, x) {
    return best_is_good_enough(guess, x)
    ? guess
    : best_sqrt_iter(improve(guess, x), x)
}

function best_sqrt(x) {
    return best_sqrt_iter(1, x);
}

console.log(best_sqrt(9));
console.log(best_sqrt(best_sqrt(2) + best_sqrt(3)));
console.log(best_sqrt(.0001));