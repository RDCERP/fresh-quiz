const start_btn= document.querySelector(".buttons .start")
console.log(start_btn)

var questions = [
    {
    prompt: "Do you want to take this quiz?",
    userChoices: ["Yes", "No", "Maybe"], 
    answer: "Yes"
}]

function startQuiz(){
    var startButton = document.querySelector("#start")
alert("It works")
window.alert ('questions')}


start_btn.addEventListener("click", startQuiz);



//getting questions from array
// function showQuestions(index){
//     const que_text = document.querySelector(".que_text");
//     const option_list = document.querySelector(".option_list");
//     let que_tag = '<span>'+ questions[index].question +'</span>';
//     let option_tag = '<div onclick="selectAnswer(event)" class="option">'+ questions[index].options[0] + '<span></span></div>'
//                         + '<div onclick="selectAnswer(event)"  class = "option">'+ questions[index].options[1] + '<span></span></div>'
//                         + '<div onclick="selectAnswer(event)"  class = "option">'+ questions[index].options[2] + '<span></span></div>'
//                         + '<div onclick="selectAnswer(event)"  class = "option">'+ questions[index].options[3] + '<span></span></div>';

//     que_text.innerHTML = que_tag;
//     option_list.innerHTML = option_tag;

// }
