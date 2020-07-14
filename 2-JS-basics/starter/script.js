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

// Function
  //Function declaration
function calculateAge(birthyear) {
  return 2018-birthyear;
}

var agejohn = calculateAge(1990);
var agemike = calculateAge(1980);
var agemary = calculateAge(1986);
var agejane = calculateAge(1984);
console.log(agejohn, agejane, agemary, agemike);

function yearUntilRetirement(year, firstname) {
	var age = calculateAge(year);
	var retirement = 65 - age;
	if(retirement >0){
	console.log(firstname + ' retires in ' + retirement +' years');
  }
  else{
  	console.log(firstname + ' is retired.');
  }
}
yearUntilRetirement(1990, 'John');
yearUntilRetirement(1949, 'Mike');
yearUntilRetirement(1968, 'Mary');
yearUntilRetirement(1978, 'Jane');

// Function experession 
var WhatDoUDo = function(job, firstname) {
	switch(job){
		case 'teacher':
		return firstname + ' teaches kids';
		case 'constructor':
		return firstname + ' construct buildings';
		case 'designer':
		return firstname + ' design websites';
		default:
		return firstname + ' do nothing';
	}
}
console.log(WhatDoUDo ('teacher', 'john'));
console.log(WhatDoUDo ('designer', 'jane'));
console.log(WhatDoUDo ('builder', 'mark'));

// Arrays
var names = ['john', 'mark', 'jane'];
var years = new Array(1990, 1968, 1980);
console.log(names[2]);
console.log(names.length);

//Mutate array data
names[2] = 'ben';
names[names.length] = 'mary';
console.log(names);

// Differnt data types 
var john = ['john', 'smith', 1990, 'teacher', 'false'];

john.push('blue');
john.unshift('anuj');
console.log(john);

john.pop();
john.shift();
console.log(john);

console.log(john.indexOf('teacher'));

var johnDesigner = john.indexOf('designer') === -1 ? 'john is not a designer': 'john is a designer';
console.log(johnDesigner);

//Coding Challenge 3
function tipCalculator(bill) {
	var percentage;
	if(bill < 50) {
		percentage = 0.2;
	}
	else if(bill >= 50 && bill < 200) {
        percentage = 0.15;
	}
	else {
		percentage = 0.1;
	}
	return percentage*bill;
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])];
var finalBills = [bills[0] + tips[0], bills[1] + tips[1],
                 bills[2] + tips[2]];

console.log(tips, finalBills);

//Object and Properties

//Object literals
var john = {
	firstname: 'john',
	lastname: 'smith',
	job: 'teacher',
	family: ['jane ','mark ','mery'],
	ismarried: 'false'
};
console.log(john);
console.log(john.firstname);
console.log(john['lastname']);

john.job = 'designer';
john['ismarried'] = true;
console.log(john);

//New object syntax
var jane = new Object();
jane.firstname = 'jane';
jane.lastname = 'smith';
jane.birthyear = 1990;
jane.ismarried = false;
console.log (jane);
jane.lastname = 'janes';
jane.birthyear = 1996;
console.log(jane);


//Objects and methods
var john = {
	firstname: 'john',
	lastname: 'smith',
	job: 'teacher',
	family: ['jane ','mark ','mery'],
	ismarried: 'false',
	birthyear:1994,
	calcAge: function() {
		this.age = 2018-this.birthyear;
	}
};
john.calcAge();
console.log(john);










































