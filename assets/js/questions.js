var questionEl = document.querySelector(".question");
var choicesListEl = document.querySelector("#choices-list");
var answerEl = document.querySelector("#answer");
var timeSpanEl = document.querySelector("#timer-value");
var index=0;
var allDone = false;
var answer_result;
var questions = [
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
  const array_length = questions.length;
  var timer_value = (array_length*15) + 1; //to show the timer value from 75 secs and down--for 5 questions each question can have 15sec each
  
  
  

  
console.log(questionEl);
console.log(choicesListEl);
console.log(answerEl);


function displayOneQuestions() {

  //add code to start timer = length of questions array * 15 seconds

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
    // console.log(questions[i].choices[j]);
    choicesListEl.appendChild(li);
  }


}

  function verifyAnswer(event)
  {
    event.preventDefault();
      var result = false;
    
    // on clicking one answer choice button , this function should validate whether the answer is correct ot not and displays it at the bottom of choices. 
    //then the next question should be displayed along with the answer choices.

    if(event.target.matches("button"))
    {
     alert("button clicked    --->"+event.target.textContent);
     alert("real answer -->"+questions[index].answer);
      if(event.target.textContent === questions[index].answer )
      {
       alert("real answer ~~~~~~~ "+questions[index].answer);
         console.log("correct");
         result = true;
         //answerEl.textContent="answer : correct";
      } 
      else
      {
        console.log("wrong");
       // answerEl.textContent="answer : wrong";
      }

    }

    if(result)
      answer_result = "correct" ; 
    else answer_result = "wrong" ;
alert("answer_result returnes "+answer_result);
    return answer_result;
  }

  function deleteAllChildNodes()
  {

    var lastChild = choicesListEl.lastElementChild;
    while(lastChild)
    {
      choicesListEl.removeChild(lastChild); 
			lastChild = choicesListEl.lastElementChild; 
    }

  }

function showNextQuestion(event) {

  event.preventDefault();

 // alert("enetered showNextQuestion function ");
  //alert("index before "+index); 
  var correct_or_worng = verifyAnswer(event);
  index++;
 
  //alert("Your answer is "+correct_or_worng);
  if(correct_or_worng === "wrong")
  {
    alert("if");
    //reduce the timer by 10seconds
    timer_value-=10;
  }



  if (index < array_length)
    displayOneQuestions();
  else {
    alert("All done");
    alert("remainig time "+ timer_value);
    allDone = true;
  }

}


  //setTimer() sets the timer value to (array length * 15 secs) and counts down till it reaches 0

  function setTimer()
  {
    var timerInterval = setInterval(function(){
    timer_value--;
    timeSpanEl.textContent = timer_value;
    if(timer_value===0)
    clearInterval(timerInterval);
    },1000);
  }

  setTimer();
  choicesListEl.addEventListener("click",showNextQuestion);
  
