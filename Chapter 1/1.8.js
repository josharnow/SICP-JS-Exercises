import "sicp";

function square(x) {
    return x**2;
}

function improve(guess, x) {
    return ((x / square(guess)) + (2 * guess)) / 3;
}

function is_good_enough(guess, x) {
    return improve(guess, x) === guess;
}

function cube_iter(guess, x) {
    return is_good_enough(guess, x)
            ? guess
            : cube_iter(improve(guess, x), x)
}

function cube_root(x) {
    return cube_iter(1, x);
}

console.log(cube_root(8));
console.log(cube_root(27));