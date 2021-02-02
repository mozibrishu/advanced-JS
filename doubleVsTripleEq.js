// == vs ===
// == 
// only value check
// if different, it tries to make them same type and compare.
// false turns to zero 
// 0 == false (true)

// === 
// value and type check
// 0 === false (false)

checkTrueFalse(2, "2");
checkTrueFalse(1, true);
checkTrueFalse(1, false);

function checkTrueFalse(first, second) {
    first == second ? console.log("== true") : console.log("== false");
    first === second ? console.log("=== true") : console.log("=== false");
}
