//declaring a variable named myAge and setting it to my cuurent age
const myAge = 26;
//creating a non constant variable named earlyYears and assigned it to the value 2
let earlyYears = 2;
earlyYears *= 10.5;
//creating a variable laterYears and assigning the expression myAge - 2
let laterYears = myAge - 2;
//multiplying  laterYears by 4 to calculate for the number of dog years accounted for by the my later years.
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);
//adding both earlyYears and laterYears and storing it in myAgeInDogYears variable
myAgeInDogYears = earlyYears + laterYears;
// writing my name using the string method and storing it in myName variable
myName = 'Mohammed Kamalidin'.toLowerCase();
//using string interpolation to display my age and name in dog years
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
