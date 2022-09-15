try {
	
	
		const start_btn= document.getElementById('start_btn'); //document.querySelector(".buttons .start")
		const next_btn= document.getElementById('next_btn');
		const user_nm = document.getElementById("user_name");
		
		
	
		let timeValue =  21;
		let question_numb = 0; //
		let userScore = 0; //initializing userScore with 0
		let counter; //counter of correct answers
		let totalScore = 0; //initializing totalScore by 0
		let user_name = '';	// if Start Quiz button clicked capture user name
		const decreaseTime = 7; //decrease time value
	
		function onchangeName(text){ // if user clicked on option
			console.log('text', text); //getting user entered value
			user_name = text; //getting user name
		}
	
	
		// if Next Que function called after selection
		function goNextQuestion(){ //after the question is answered
			if(question_numb < questions.length - 1){ // if question count is less than total question length
				question_numb++; //increment the question_numb value
				showQuestions(question_numb); //calling showQestions function // passing question_numb value to showQestions function
			}else{
				showResult(); //calling showResult function
			}	
	
			let correcAns = questions[question_numb].answer; //getting correct answer from array
		}
	       
			function queCounter(score){
				console.log('queCounter', score) 
				totalScore = totalScore + score; //adding score with totalScore
				document.getElementById('total_score').innerHTML = totalScore //adding total score to totalScore
			}
	
		function selectAnswer(answerIndex){ // if user clicked on option
		
			if (questions[question_numb].options[answerIndex] === questions[question_numb].answer){ //if user clicked on option that is equal to array's correct option
				console.log('correct answer');
				queCounter(1); // passing 1 score to queCounter
			} else{
				timeValue = timeValue - decreaseTime > 0 ? timeValue - decreaseTime : 0; // if time is greater than 0
			}
			goNextQuestion(); //calling goNextQuestion function
		}
		
		// getting questions and options from array
		function showQuestions(index){ //index is the question_numb value
		    const question_call = document.querySelector(".question_call"); //getting question_call element
		    const question_list = document.querySelector(".question_list"); //ul tag
		    let que_tag = '<span>'+ questions[index].question +'</span>'; //creating new span tag and passing the question number and que_numb value
		    let question_tag = '<div onclick="selectAnswer(0)" class="question">'+ questions[index].options[0] + '<span></span></div>' //first option
		                        + '<div onclick="selectAnswer(1)"  class = "question">'+ questions[index].options[1] + '<span></span></div>' //creating new div tag for option and passing the option number
		                        + '<div onclick="selectAnswer(2)"  class = "question">'+ questions[index].options[2] + '<span></span></div>' //creating new div tag for option and passing the option number
		                        + '<div onclick="selectAnswer(3)"  class = "question">'+ questions[index].options[3] + '<span></span></div>'; //creating new div tag for option and passing the option number
		
		    question_call.innerHTML = que_tag;
		    question_list.innerHTML = question_tag;
	
		    question_call.innerHTML = que_tag; //adding new span tag inside que_tag
		    question_list.innerHTML = question_tag; //adding new div tag inside question_tag
		    
		    const question = question_list.querySelector(".question"); //selecting all available options
		
		    for(i=0; i < question.length; i++){ //for loop to add onclick attribute in all available options
		        question[i].setAttribute("onclick", "questionSelected(this)"); //adding onclick attribute in all available options
		    }
		}
		
		function timer(){
			if (timeValue > 0){ // if timer is greater than 0
				timeValue--; //decrement the time value
			}
			
			// console.log("time", time);
			document.getElementById("seconds").innerHTML = timeValue; //adding timeValue to span
			if(timeValue < 1){ //if timer is less than 1
				clearInterval(counter); //clear counter		
			}
		}
	
		function showResult(){
			try {
				window.alert("Your score is " + totalScore); //showing total score
				clearInterval(counter);//clear counter
				timeValue = 21;
				
			} catch (error) { //if any error occurs
				
			}
			
			let topScoresStr = window.localStorage.getItem("topScores") ?? "[]";
			let topScores = JSON.parse(topScoresStr); 
			if (!topScores || topScores.length < 5){ // if topScores is empty or less than 5
				topScores.push({name: user_name, score: totalScore}); // add new score
				topScores.sort((a, b) => b.score - a.score); // descending order
				console.log('topScores1', topScores); 
				localStorage.setItem("topScores", JSON.stringify(topScores)); // save to local storage
			} else {
				topScores.push({name: user_name, score: totalScore}); // add new score
				topScores.sort((a, b) => b.score - a.score); // sort in descending order
				topScores.pop(); 
				console.log('topScores2', topScores); 
				localStorage.setItem("topScores", JSON.stringify(topScores)); 
			}
			let topscoresHTML = '' 
			topScores.forEach(element => { // for each element in topScores
				topscoresHTML += `<div>${element.name} - ${element.score}</div>`
			});
			document.getElementById('top-scores').innerHTML = topscoresHTML; //adding new span tag inside que_tag
		}
	
		function startTimerCounter(time){ //starting timer
			console.log('start time', time); 
		    counter = setInterval(timer, 1000);	//1000 will  run it every 1 second
		}
	
		function initValues(){
			que_numb = 1; //set que_numb value to 1	
			timeValue = 21; // 21s
			totalScore = 0; // set total score to 0
			question_numb=0; //set question_numb to 0
		}
	
		start_btn.onclick = ()=>{
			if (user_name === ''){ // if user name is empty
				alert('Please enter your name');
				return;
			}
			console.log("on start button")
		    showQuestions(0); //calling function
		    queCounter(0); //passing 0 value to queCounter
			initValues(); // initial values
		    startTimerCounter(21); //calling startTimerCounter function
			// alert("Yep")
		}
	
		
	
} catch (error) {
	
}
