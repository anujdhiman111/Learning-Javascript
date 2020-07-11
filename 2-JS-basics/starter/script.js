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
yearmark = now - 29;
console.log(yearmark);
console.log(now + 2);
console.log(now - 2);
console.log(now * 2);
console.log(now / 2);

//Logicals operators
var johnolder = agejohn > agemark;
console.log(johnolder);

//typeof operator
console.log(typeof yearmark);
console.log(typeof johnolder);

//Operator precedence
var now = 2018;
var yearjohn = 1989;
var fullage = 18;
var isfullage = now - yearjohn <=fullage;
console.log(isfullage);

var agejohn = now-yearjohn;
var agemark = 35;
var average = (agejohn + agemark)/2;
console.log(average);
//Multiple assignment
var x, y;
x = y = (2-4+6)*4;
console.log(x,y);

x*=2;
console.log(x);

x++;
console.log(x);

//Body Mass Index
var markMass, johnMass, markHeight, johnHeight;
markMass = 35;
johnMass = 40;
markHeight =5.2;
johnHeight = 4.7;
var markBMI = markMass/(markHeight*markHeight);
console.log(markBMI);

var johnBMI = johnMass/(johnHeight*johnHeight);
console.log(johnBMI);

var markHighBMI = markBMI > johnBMI; 
console.log(markHighBMI);
console.log('Is mark BMI higher than john BMI ? ' + markHighBMI);

//if else statement
var civilStatus = 'single';
if(civilStatus === 'married') {
	console.log(firstname + ' is married');
}
else {
	console.log(firstname + ' will be marry soon hopefully.')
}

var civilStatus = 'married';
if(civilStatus === 'married') {
	console.log(firstname + ' is married');
}

var markMass, johnMass, markHeight, johnHeight;
markMass = 35;
johnMass = 40;
markHeight =5.2;
johnHeight = 4.7;
var markBMI = markMass/(markHeight*markHeight);
console.log(markBMI);

var johnBMI = johnMass/(johnHeight*johnHeight);
console.log(johnBMI);

if (markBMI>johnBMI) {
	console.log('mark\'BMI is greater than johnBMI');
}
else {
	console.log('john\'BMI is greater than markBMI');
}

var firstname = 'john';
var age = 17;

if(age < 15) {
	console.log (firstname + ' is a child.');
}
else if (age >= 15 && age < 20) {
    console.log (firstname + ' is a teenager.');
}
else {
	console.log(firstname + ' is a man.');
}

//Ternary operators and switch elements
var firstname = 'john';
var age = 17;
//Ternary operator
age >=18 ? console.log(firstname + ' drink bear'):console.log(firstname + ' drink juice');

var drink= age <17 ? 'bear': 'jiuce';
console.log(drink);

//Switch statement 
var job = 'engineer';
   switch(job) {
   	case 'teacher':
   	console.log(firstname + ' teaches kids');
   	break;
   	case 'constructor':
   	console.log(firstname + ' construct buildings');
   	break;
   	case 'developer':
   	console.log(firstname + ' makes websites');
   	break;
   	default:
   	console.log(firstname + ' do nothing');
   }

   var age = 18;
   switch(true) {
   	case age >= 15 && age < 20:
   	console.log (firstname + ' is a teenager.');
   	break;
   	case age < 15:
   	console.log (firstname + ' is a child.');
   	break;
   	default:
   	console.log (firstname + ' is a man.');
   }

// Truthy and Falsy values and equality operators
//falsy values are null, undefined, '', 0, NaN.
//truthy values are that are not falsy.

var name;
if(name) {
	console.log('variable is defined');
}   
else {
	console.log('variable is not defined');
}
var name = 'petter';
if(name) {
	console.log('variable is defined');
}   
else {
	console.log('variable is not defined');
}

//Coding Challenge 2
var JohnTeamFirstMatchScore = 89;
var JohnTeamSecondMatchScore = 120;
var JohnTeamThirdMatchScore = 103;
var MarkTeamFirstMatchScore = 116;
var MarkTeamSecondMatchScore = 94;
var MarkTeamThirdMatchScore = 123;

var JohnTeamAverageScore = (JohnTeamFirstMatchScore + JohnTeamSecondMatchScore + JohnTeamThirdMatchScore)/3;
console.log (JohnTeamAverageScore);

var MarkTeamAverageScore = (MarkTeamFirstMatchScore + MarkTeamSecondMatchScore + MarkTeamThirdMatchScore)/3;
console.log (MarkTeamAverageScore);

if(JohnTeamAverageScore > MarkTeamAverageScore) {
	console.log('John team wins the match with average score of ' + JohnTeamAverageScore);
}
else if (MarkTeamAverageScore > JohnTeamAverageScore){
	console.log('Mark team wins the match with average score of ' + MarkTeamAverageScore);
}
else {
	console.log('There is a draw');
}

var JohnTeamFirstMatchScore = 89;
var JohnTeamSecondMatchScore = 120;
var JohnTeamThirdMatchScore = 124;
var MarkTeamFirstMatchScore = 116;
var MarkTeamSecondMatchScore = 94;
var MarkTeamThirdMatchScore = 123;

var JohnTeamAverageScore = (JohnTeamFirstMatchScore + JohnTeamSecondMatchScore + JohnTeamThirdMatchScore)/3;
console.log (JohnTeamAverageScore);

var MarkTeamAverageScore = (MarkTeamFirstMatchScore + MarkTeamSecondMatchScore + MarkTeamThirdMatchScore)/3;
console.log (MarkTeamAverageScore);

if(JohnTeamAverageScore > MarkTeamAverageScore) {
	console.log('John team wins the match with average score of ' + JohnTeamAverageScore);
}
else if (MarkTeamAverageScore > JohnTeamAverageScore){
	console.log('Mark team wins the match with average score of ' + MarkTeamAverageScore);
}
else {
	console.log('There is a draw');
}

var MaryTeamFirstMatchScore = 97;
var MaryTeamSecondMatchScore = 134;
var MaryTeamThirdMatchScore = 105;
var MaryTeamAverageScore = (MaryTeamFirstMatchScore + MaryTeamSecondMatchScore + MaryTeamThirdMatchScore)/3;
console.log (MaryTeamAverageScore);

if (JohnTeamAverageScore > MarkTeamAverageScore && JohnTeamAverageScore > MaryTeamAverageScore) {
	console.log('John team wins the match with average score of ' + JohnTeamAverageScore);
}
else if (MarkTeamAverageScore > JohnTeamAverageScore && MarkTeamAverageScore > MaryTeamAverageScore) {
	console.log('Mark team wins the match with average score of ' + MarkTeamAverageScore);
}
else if (MaryTeamAverageScore > JohnTeamAverageScore && MaryTeamAverageScore > MarkTeamAverageScore) {
	console.log('Mary team wins the match with average score of ' + MaryTeamAverageScore);
}
else {
	console.log('There is a draw');
}