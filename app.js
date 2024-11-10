// javascript -> tootsoolol hiih
// varieble -> ugugdul hadgalah
// if else -> nuhtsel shalgah/tentsuu bnu, ih bnu,baga bnu
// for -> neg uildliig olon dvtah ued
// function ->olon kodnii tsugluulag/dahij ashigah bolomjtoi
// massive/array ->[],index / olond utga zereg hadgalah
// object -> {},key:value
// api -> tusgai beldsen datag holboh
// .innerText -> tag dotorh ugiig uurchluh
// html, css -> text zurag gargaj irdeg
// document -> html deerh buh code
// addEventListener -> websited hiigdeh uildel
let questionEl = document.querySelector('.question');
let result = document.querySelector('.result');
let choiceEL = document.querySelector('.choice');
let nextBtn = document.querySelector('.next');
let count=0;
//
let quizData =[
	{
		"question":"What is capital city of Mongolia?",
		"choice":["Paris","Moscow","Hong Kong","Ulaanbaatar"],
		"answer":"Ulaanbaatar",
	},
	{
		"question":"what year Chinggis Khan born?",
		"choice":["1162","1206","1167","1201"],
		"answer":"1162",
	},
	{
		"question":"most populated country?",
		"choice":["India","China","USA","Japan"],
		"answer":"India",
	},
	{
		"question":"how much time earth takes to complete one rotation?",
		"choice":["25","32","24","26"],
		"answer":"24",
	},
	{
		"question":"What is color of sun?",
		"choice":["Yellow","Black","White","Red"],
		"answer":"White",
	},
];
let now=0;
console.log(quizData[0].question);
function display(){
	questionEl.innerText = quizData[now].question;
	quizData[now].choice.forEach(data=>{
		console.log(data);
		let btn = document.createElement('button');
		btn.innerText = data;
		console.log(btn);
		choiceEL.append(btn);
		btn.addEventListener('click',()=> checkAnswer(data));
	});
}
function checkAnswer(data){
	console.log(data);
	if(data==quizData[now].answer){
		result.innerText="Correct!";
		count++;
	}
	else{
		result.innerText="Wrong! Answer is "+quizData[now].
		answer
	}
	
	
}
nextBtn.addEventListener('click',()=>{
	questionEl.innerText="";
	result.innerText="";
	choiceEL.innerHTML="";
	now++;
	if(now==quizData.length){                                                           
		result.innerText="Done!Your score is "+ count + "/"+quizData.length;
		nextBtn.style.display="none"
	}else{
		display();
	}
	
	
});
display();
