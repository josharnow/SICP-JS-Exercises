// @ts-nocheck
let count = 0;

function p() {
    count++;
    console.log(count)
    return p();
}

function test(x, y) {
    return x === 0 ? 0 : y;
}

test(0, p());

// Applicative-order: p() is evaluated when calling test(0, p()), and the
// evaluation never terminates because p() is infinitely expanded to itself

// Normal-order: The expression evaluates to 0 because p() is never evaluated
// (and an infinite evaluation loop is avoided)