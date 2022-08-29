// Ackermann's function
function A(x, y) {
    return y === 0
            ? 0
            : x === 0
            ? 2 * y
            : y === 1
            ? 2
            : A(x - 1, A(x, y - 1));
}

console.log(A(1, 10)); // 1024
console.log(A(2, 4)); // 65536 (2^16)
console.log(A(3, 3)); // 65536 (2^16)

function f(n) { // Computes 2 * n
    return A(0, n);
}

function g(n) { // For n = 1, computes 2. For n > 1, computes 2^{n}
    return A(1, n);
}

function h(n) { // For n = 1, computes 2. For n > 1, computes 2^(2^(2^(2...(n times))))
    return A(2, n);
}

function k(n) { // Computes 5n^2
    return 5 * n * n;
}