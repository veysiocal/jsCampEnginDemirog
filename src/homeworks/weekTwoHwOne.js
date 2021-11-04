// 1-) JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız.
let findPrime = (...numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        let isPrime = true;
        if (numbers[i] < 1) {
            console.log("Invalid number(" + numbers[i] + ")");
            continue;
        }
        for (let j = 2; j < numbers[i]; j++) {
            if (numbers[i] % j === 0) {
                isPrime = false;
                break;
            };
        }
        if (isPrime === true) {
            console.log("This number is prime number.(" + numbers[i] + ")")
        } else {
            console.log("This number is not prime number.(" + numbers[i] + ")")
        }
    }
}

findPrime(-1, 2, 5, 8, 21, 13);
findPrime(3, 5);

// 2-) Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız.
const friendNumbers = (number1, number2) => {
    let sum1 = 0;
    let sum2 = 0;

    for (let i = 1; i < number1; i++) {
        if (number1 % i === 0) {
            sum1 += i;
        }
    }
    for (let i = 1; i < number2; i++) {
        if (number2 % i === 0) {
            sum2 += i;
        }
    }

    if ((sum1 === number2) && (sum2 === number1)) {
        console.log(number1 + ", " + number2 + " are friend numbers!")
    } else {
        console.log(number1 + ", " + number2 + " are not friend numbers!")
    }
}

friendNumbers(220, 284);
friendNumbers(220, 110);

// 3-) 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.
const perfectNumbers = () => {
    for (let i = 1; i < 1000; i++) {
        let sum = 0
        for (let j = 1; j < i; j++) {
            if (i % j === 0) {
                sum += j
            }
        }
        if (sum === i) {
            console.log(i + " is the perfect number!");
        }
    }
}

perfectNumbers()

// 4-) 1000'e kadarki tüm asal sayıları listeleyen programı yazınız
const primeNumber = () => {
    let primeNumbers = []

    for (let i = 2; i < 1000; i++) {
        let counter = 0
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                counter++;
                break
            }
        }
        if (counter === 0) {
            primeNumbers.push(i)
        }
    }
    console.log("All prime numbers up to 1000: ", primeNumbers)
}
primeNumber()