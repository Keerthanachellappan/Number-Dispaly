function displayNumbers() {
    let start = document.getElementById('start').value;
    let end = document.getElementById('end').value;

    if (isNaN(start) || isNaN(end) || start < 1 || end < start || end > 100) {
        alert("Please enter valid numbers: Start (between 1 and 100) and End (greater than Start and up to 100).");
        return;
    }
    let allNumbers = [];
    let oddNumbers = [];
    let evenNumbers = [];
    let primeNumbers = [];

    for (let i = start; i <= end; i++) {
        allNumbers.push(i);

        if (i % 2 !== 0) {
            oddNumbers.push(i);
        } else {
            evenNumbers.push(i);
        }

        if (isPrime(i)) {
            primeNumbers.push(i);
        }
    }
    document.getElementById('allNumbers').textContent = allNumbers.join(', ');
    document.getElementById('oddNumbers').textContent = oddNumbers.join(', ');
    document.getElementById('evenNumbers').textContent = evenNumbers.join(', ');
    document.getElementById('primeNumbers').textContent = primeNumbers.join(', ');
}
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}