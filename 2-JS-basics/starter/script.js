console.log('Hello World!!!!')
var firstname = 'John';
console.log(firstname);

var lastname = 'Smith';
var age = 30;

var fullage = true;
console.log(fullage);

var job;
console.log(job);

console.log(firstname + ' ' + lastname + ' ' + age);
// type coercion
var job, ismarried;
job = 'Teacher';
ismarried = false;
console.log(firstname + ' is a ' + age + ' year old ' + job + ' .Is he married? ' + ismarried);

// Variable mutation
age = 'tewenty';
job = 'Software Developer';
ismarried = true;
alert(firstname + ' is a ' + age + ' year old ' + job + ' .Is he married? ' + ismarried);

var lastname= prompt('What is his last name?');
console.log(firstname + ' ' + lastname);

var now, yearmark, yearjohn;
now = 2018;
agejohn = 30;
agemark = 35;
//Maths Operator
yearmark = now - 28;
console.log(yearmark);
console.log(now + 2);
console.log(now - 2);
console.log(now * 2);
console.log(now / 2);

//Logicals operators
var johnolder = agejohn>agemark;
console.log(johnolder);

//typeof operator
console.log(typeof yearmark);
console.log(typeof johnolder);