function noobGetSum(a: number, b: number): number {
    return a+b;
}

function nerdGetSum(a: number, b: number): number {
    let carry = 0;

    while (b !== 0) {
        carry = a & b;
        a = a ^ b;
        b = carry << 1;
    }

    return a;
};

console.log(nerdGetSum(5,12))