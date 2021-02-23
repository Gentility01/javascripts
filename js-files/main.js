// const s ="data, airtime, borrow";
// console.log(s.split(", "))
// alert(s.split(", "))

// 

//arreys

// const fruits =["apples", "oranges", "mangoes", 10, true];
// fruits.push("guava")
// console.log(fruits);

// const fruits =["apples", "oranges", "mangoes", 10, true];
// fruits.push("guava")
// console.log(fruits.indexOf("oranges"));

// const person = {
// 	firstName: 'john',
// 	lastName: 'douglas',
// 	age: 30,
// 	hobbies: ['musics', 'football', 'game'],
// 	adress:{
// 		street: '50 umuode',
// 		state: 'abia'
// 	}
// }
// console.log(person.firstName, person.age, person.hobbies[2], person.adress.state);

//array todos
// const todos =[
//  {
//  	id: 1,
//  	text: "take our trash",
//  	isCompleted: true
//  },
//  {
//  	id: 2,
//  	text: "meeting with boss",
//  	isCompleted: true
//  },
//  {
//  	id: 1,
//  	text: "dentist apts",
//  	isCompleted: false
//  }
// ];

// console.log(todos);

// const names = ["emeka", "nnamdi", "jombo", "adaku", "johnbull"];
// console.log(names)

// const form ={
// 	firstName: prompt("enter your first name"),
// 	otherNames: prompt("enter other names"),
// 	age: prompt("enter your age"),
// 	adress:{
// 		state: prompt("which state are you from"),
// 		LGA: prompt("enter your LGA")
// 	}
// }
// alert(form.firstName.toUpperCase());
// console.log(form)

// const form ={
// 	firstName: prompt("enter your first name"),
// 	otherNames: prompt("enter other names"),
// 	age: prompt("enter your age"),
// 	adress:{
// 		state: prompt("which state are you from"),
// 		LGA: prompt("enter your LGA")
// 	}
// }
// console.log(form);
// if (form.age<30) {
// 	alert(form.firstName.toUpperCase() +" your age is " + form.age + " we only need those that are upto 30")
// }else{
// 	alert("your form is accepted")
// }

// const todos =[
//  {
//  	id: 1,
//  	text: "take our trash",
//  	isCompleted: true
//  },
//  {
//  	id: 2,
//  	text: "meeting with boss",
//  	isCompleted: true
//  },
//  {
//  	id: 1,
//  	text: "dentist apts",
//  	isCompleted: false
//  }
// ];

// const todoJSon = JSON.stringify(todos);
// console.log(todoJSON);


// loop (for loop)
// for(let i = 1; i <= 10; i++){
// 	console.log(i);
// }

// // loop(while loop)
// let i = 0;
// while(i<10){
// 	console.log(i)
	
 
// var i =2*2;

// console.log(i)
// var name = prompt("enter your name here");
// var age = prompt("enter your age ");

// if (age >=30) {
// 	alert("welcome " + name.toUpperCase())
// }else{
// 	alert("sorry " + name.toUpperCase() + " we only need those above 30years ");
// }


// var num3 = document.getElementById("output");
// console.log(num3);



// var num2 = document.getElementById("second-number").value;

// function submit() {

// var num1 = document.getElementById("fisrt-number").value;
// console.log(num1);
// var num2 = document.getElementById("second-number").value;
// console.log(num2);
// var formats = parseInt(num1);
// var formatss = parseInt(num2);

// var answer = document.getElementById("output");
// var sum = formats+formatss;
// answer.value=sum;
// console.log(sum);




// // console.log(num1+num2);
// }

function submit(){

	var num1 = document.getElementById("first-number").value;
	var num2 = document.getElementById("second-number").value;

	var format = parseInt(num1);
	var formatt =  parseInt(num2);

	var sum = document.getElementById("output");

	
	 var output = format+formatt;
	 sum.value = output;



// // console.log(num1+num2);
}





