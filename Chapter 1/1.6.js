// @ts-nocheck
function conditional(predicate, then_clause, else_clause) {
    return predicate ? then_clause : else_clause;
}

console.log(conditional(2 === 3, 0, 5));
console.log(conditional(1 === 1, 0, 5));

// Using this to rewrite the square root program would result in a memory error
// due to overflowing the stack because the iteration procedure is called
// without return (sqrt_iter is always evaluated when it is the argument of a
// function, resulting in the stack overflowing)