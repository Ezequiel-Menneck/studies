// Interactive way
function pow(x, n) {
    result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

console.log(pow(2, 2));

// Recustive way
function pow2(x, n) {
    if (n === 1) { return x; } 
    
    return x * pow2(x, n - 1);
}

console.log(pow2(2, 2));
console.log(pow2(2, 3));

// pow2(2, 3) = 2 * pow2(2, 2)
// pow2(2, 2) = 2 * pow2(2, 1)
// pow2(2, 1) = 2

// pow2(2, 3) = 2 * 4
// pow2(2, 2) = 2 * 2
// pow2(2, 1) = 2

console.log('-----------------------------------------------')

function reverseString(str) {
    if (str.length <= 1 || str === null) { return str }

    return reverseString(str.substring(1)) + str.charAt(0)
}

console.log(reverseString("mike"))

// reverseString("mike") = reverseString("ike") + "m"
// reverseString("ike") = reverseString("ke") + "i"
// reverseString("ke") = reverseString("e") + k
// reverseString("e") = "e"

// reverseString("mike") = "ekim"
// reverseString("ike") = "ek" + "i"
// reverseString("ke") = "e" + "k"
// reverseString("e") = "e"

console.log('-----------------------------------------------')

function calcSumOfArrayItens(arr) {
    if (arr.length === 1) { return arr[0] }

    return calcSumOfArrayItens(arr.slice(1)) + arr[0]
}

console.log(calcSumOfArrayItens([1, 2, 3 ,4 ,5 ,6]))

console.log('-----------------------------------------------')

function sumOfNItens(n) {
    if (n === 0) { return n }

    return n + sumOfNItens(n - 1)
}

console.log(sumOfNItens(6))

console.log('-----------------------------------------------')

function sumFractionOfNItens(n) {
    if (n === 0) { return n }

    return 1/n + sumFractionOfNItens(n - 1)
}

console.log(sumFractionOfNItens(5))

console.log('-----------------------------------------------')

function pow3(x, k) {
    if (k === 1) { return x }
    if (k === 0) { return 1 }

    return x * pow2(x, k - 1)
}

console.log(pow3(2, 2))

console.log('-----------------------------------------------')

function tribonaci(n) {
    if (n === 0 || n === 1) { return 0 } 
    if (n === 2) { return 1 }
    
    return tribonaci(n - 1) + tribonaci(n - 2) + tribonaci(n - 2)
}

console.log(tribonaci(26))


function pell(n) {
    if (n === 0) { return 0 }
    if (n === 1) { return 1 }

    return 2 * pell(n - 1) + pell(n - 2)
}

console.log('-----------------------------------------------')

console.log(pell(9))


console.log('-----------------------------------------------')


let arr = [1, 2, 3, 4]

console.log(arr.next)