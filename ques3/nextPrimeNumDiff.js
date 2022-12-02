function isPrime(n)
{
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n%2 == 0 || n%3 == 0) return false;
    for (let i=5; i*i<=n; i=i+6)
        if (n%i == 0 || n%(i+2) == 0)
        return false;
    return true;
}

//-------------------------------------------------------------------

function nextPrimeNumDiff(n)
{
// Base case
    if (n <= 1) return 2;
 
    let prime = n
    let found = false;
    while (!found) {
        prime++;
        
        if (isPrime(prime))
        found = true;
    }
    let diff = prime-n 
 
    return  "next prime number difference is" + " = " + diff;
}
console.log(nextPrimeNumDiff(7))