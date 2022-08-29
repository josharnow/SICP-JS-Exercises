// The first procedure is recursive and the second procedure is iterative.
// In the first process, the "plus" procedure calls itself at the end while nested in another expression (recursive)
// The second process calls itself, but as the top expression (iterative)

// 1.
// plus(4, 5)
// inc(plus(3, 5))
// inc(inc(plus(2, 5)))
// inc(inc(inc(plus(1, 5))))
// inc(inc(inc(inc(plus(0, 5)))))
// inc(inc(inc(inc(5))))
// inc(inc(inc(6)))
// inc(inc(7))
// inc(8)
// 9

// 2.
// plus(4, 5)
// plus(dec(4), inc(5))
// plus(3, 6)
// plus(dec(3), inc(6))
// plus(2, 7)
// plus(dec(2), inc(7))
// plus(1, 8)
// plus(dec(1), inc(8))
// plus(0, 9)
// 9