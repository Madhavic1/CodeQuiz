var quizValue = localStorage.getItem("quizValue");
var questionEl = document.querySelector(".question");
var choicesListEl = document.querySelector("#choices-list");
var answerEl = document.querySelector("#answer");
var timeSpanEl = document.querySelector("#timer-value");

var correctSoundEl = document.getElementById("correct-sound");
console.log("correctSoundEl = "+correctSoundEl);

var wrongSoundEl = document.getElementById("wrong-sound");
console.log("wrongSoundEl = "+wrongSoundEl);

var correct_or_wrong;
var index = 0;
//var allDone = false;
var answer_result;
var questions;
var questions1 = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  {
    title: "Which of the following is not considered a JavaScript operator?",
    choices: ["new", "this", "delete", "typeof"],
    answer: "this"
  },
  {
    title: " Which of the following can't be done with client-side JavaScript?",
    choices: ["Validating a form", "Sending a form's contents by email", "Storing the form's contents to a database file on the server", "None of the above"],
    answer: "Storing the form's contents to a database file on the server"
  },
  {
    title: " Which of the following attribute can hold the JavaScript version?",
    choices: ["LANGUAGE", "SCRIPT", "VERSION", "None of the above"],
    answer: "VERSION"
  }
  ///etc.
];

var questions2 = [
  {
    title: "Which of the following type of variable is visible everywhere in your JavaScript code?",
    choices: ["global variable", "local variable", "Both of the above", "None of the above"],
    answer: "global variable"
  },
  {
    title: "Which of the following is an advantage of using JavaScript?",
    choices: ["Less Sever Interaction", "Immediate feedback to the visitors", "Increased interactivity", "All of the above"],
    answer: "All of the above"
  },
  {
    title: "JavaScript Code can be called by using ",
    choices: ["RMI", "Triggering Event", "Preprocessor", "Function/Method"],
    answer: "Function/Method"
  },
  {
    title: "A proper scripting language is a",
    choices: ["High level programming language", "Assembly level programming language", "Machine level programming language", "Low level programming language"],
    answer: "High level programming language"
  },
  {
    title: "Which of the following is not considered as an error in JavaScript?",
    choices: ["Syntax error", "Missing of semicolons", "Division by zero", "All of the mentioned"],
    answer: "Function/Method"
  }
];

var questions3 = [
  {
    title: "A function with no return value is called",
    choices: ["Procedures", "Method", "Static function", "Dynamic function"],
    answer: "Procedures"
  },
  {
    title: "The unordered collection of properties, each of which has a name and a value is called",
    choices: ["String", "Object", "Serialized Object", "All of the mentioned"],
    answer: "Object"
  },
  {
    title: "JavaScript can be written",
    choices: ["directly into JS file and included into HTML", "directly on the server page", "directly into HTML pages", "All of the mentioned"],
    answer: "directly into JS file and included into HTML"
  },
  {
    title: "The escape sequence ‘\f’ stands for",
    choices: ["Floating numbers", "Representation of functions that returns a value", "\f is not present in JavaScript", "Form feed"],
    answer: "Form feed"
  },
  {
    title: "JavaScript is ______ Side Scripting Language.",
    choices: ["ISP", "Server", "None of these", "Browser"],
    answer: "Browser"
  }
];

if (quizValue == "q1") {
  questions = questions1;
}
else if (quizValue == "q2") {
  questions = questions2;
}
else
  questions = questions3;

const array_length = questions.length;
var timer_value = (array_length * 15) + 1; //to show the timer value from 75 secs and down--for 5 questions each question can have 15sec each




function displayOneQuestions() {

  var a_length = array_length;
  var c_length = 0;
  var title = questions[index].title;

  questionEl.textContent = title;

  if (index > 0) {
    deleteAllChildNodes();
  }
  c_length = questions[index].choices.length;
  for (let j = 0; j < c_length; j++) {
    var li = document.createElement("li");
    li.innerHTML = "<button class= 'choiceBtn'>" + questions[index].choices[j] + "</button>";

    choicesListEl.appendChild(li);
  }


}

function verifyAnswer(event) {
  event.preventDefault();
  var result = false;

  // on clicking one answer choice button , this function should validate whether the answer is correct ot not .
  console.log("verifyAnswer");
  if (event.target.textContent === questions[index].answer) {
    console.log("correct");
    // alert("correct");

    correctSoundEl.play();

    result = true;
  }
  else {

    wrongSoundEl.play();
    result = false;
    console.log("wrong");

  }



  if (result)
    answer_result = "correct";
  else answer_result = "wrong";

  return answer_result;
}

function deleteAllChildNodes() {

  var lastChild = choicesListEl.lastElementChild;
  while (lastChild) {
    choicesListEl.removeChild(lastChild);
    lastChild = choicesListEl.lastElementChild;
  }

}

function displayTheResult() {
  answerEl.textContent = "answer : " + correct_or_wrong;
  setTimeout(function () { answerEl.textContent = ""; }, 500);
}

function showNextQuestion(event) {
  // alert("entered showNextQuestion");
  event.preventDefault();

  if (event.target.matches("button")) {
    correct_or_wrong = verifyAnswer(event);
    if (correct_or_wrong === "wrong") {

      //reduce the timer by 15seconds
      if (timer_value >= 15) {
        // alert("timer_value  in if" + timer_value);
        timer_value -= 15;
      }
      else {
        // alert("timer_value  in else" + timer_value);
        //timer_value = 0;
        endTheQuiz();
      }
    }
    index++;

    if (index < array_length) {
      displayOneQuestions();
      displayTheResult();
    }
    else {
      //  alert(" last one index = "+index);
      console.log("index in else block = " + index);
      displayTheResult();
      //storing the Final score in local storage to use it in All done page
      endTheQuiz();

    }

  }

  else {// alert("its not a button "); 
  }

}

//The below function sets the timer to zero and redirects the page to All-Done.html 
function endTheQuiz() {
  // correctAudioEl.play();
  // alert("in endTheQuiz ");
  localStorage.setItem("final_score", timer_value);
  window.open("./All-Done.html", "_self", false);

}



//setTimer() sets the timer value to (array length * 15 secs) and counts down till it reaches 0

function setTimer() {
  var timerInterval = setInterval(function () {
    timer_value--;
    timeSpanEl.textContent = timer_value;
    if (timer_value === 0) {
      // alert("timer = 0 ");
      clearInterval(timerInterval);
      window.open("./All-Done.html", "_self", false);
    }

  }, 1000);
}

setTimer();

//using event delegation to click on list items and to go to the next question in the quiz

choicesListEl.addEventListener("click", showNextQuestion);

