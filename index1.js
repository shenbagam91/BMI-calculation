// let time;
// let rate;
// let principle;

// principle=prompt("enter your principle amount");
// rate=prompt("enter the rate of intrest");
// time=prompt("enter in terms of months");


// var si= time < 12 ? (principle*rate*time)/1200 : (principle*rate*time)/100 ;

// console.log("Simple interest",si);


let nae;
let age;
let sex;
let bmi;
let group;
let value;
nae=prompt("Enter your Name");
age=prompt("Enter your Age");
sex=prompt("Enter your Genter");
group=prompt("Enter your Blood Group");
bmi=prompt("Enter your Haemoglobin Value");

// let temp=height*height;
// height/=100;

// bmi=weight/temp;
console.log("Name:",nae);
console.log("Age:",age);
console.log("Sex:",sex);
console.log("Your Blood Haemoglobin Value:",bmi,"grams/dl");

if(bmi<=10.9)
{
    alert(`Your Blood Haemoglobin Value is: ${bmi} which means low level`);
}
else if(bmi>=11 && bmi<=18)
{
    alert(`Your Blood Haemoglobin Value is: ${bmi} which means  Normal`);
}
else (bmi>=18.1 && bmi<=25)
{
    alert(`Your Blood Haemoglobin Value is: ${bmi} which means High level`);
}
