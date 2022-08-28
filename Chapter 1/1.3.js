// @ts-nocheck
let count = 0;

function sumOfSquaresOfTwoLarger(a, b, c) {
    let answer;
    count++;
    console.log(`Call #${count}`);
    
    ((a > b && b > c) || (b > a && a > c))
        ? (answer = a**2 + b**2) // 1
        : ((b > c && c > a) || (c > b && b > a))
            ? (answer = b**2 + c**2) // 2
            : ((a > c && c > b) || (c > a && a > b))
                && (answer = a**2 + c**2) // 3

    
    return answer;
}

console.log(sumOfSquaresOfTwoLarger(8, 7, 5));
console.log(sumOfSquaresOfTwoLarger(5, 8, 7));
console.log(sumOfSquaresOfTwoLarger(8, 5, 7));