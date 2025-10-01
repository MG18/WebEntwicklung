
function power(b, n){
    
    if(n == 0){
        return 1;
    }

    if(checkBigInt(b) && checkBigInt(n)){

    if(n == 0n){
        return 1n;
    }


    if(n%2n == 0n){
        return power(b, (n/2n)) * power(b, (n/2n));
    }
    return b * power(b,n-1n);


    }

    assert(Number.isInteger(b), "Power has to be an Integer");
    assert(Number.isInteger(n), "Power has to be an Integer");
    assert(n>=0n , "Power has to be non negative");




    if(n%2 == 0){
        return power(b, (n/2)) * power(b, (n/2));
    }
    return b * power(b,n-1);

}


function assert(condition, message) {
    if (!condition) throw new Error(message || "Assertion failed")
}


function checkBigInt(x) {
  if (typeof x === "bigint") {
    return true;
  } else {
    return false;
  }
}
module.exports = { power };

console.log("Result:" + power(0, 0));
