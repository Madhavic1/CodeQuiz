var questionEl = document.querySelector(".question");
var choicesListEl = document.querySelector("#choices-list");
var answerEl = document.querySelector("#answer");
var index=0;

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
        title: " Which of the following is not a reserved word in JavaScript?",
        choices: ["interface", "throws", "program", "short"],
        answer: "parentheses"
    },
    {
        title: " Which of the following can't be done with client-side JavaScript?",
        choices: ["Validating a form", "Sending a form's contents by email", "Storing the form's contents to a database file on the server", "None of the above"],
        answer: "parentheses"
    },
    {
        title: " Which of the following attribute can hold the JavaScript version?",
        choices: ["LANGUAGE", "SCRIPT", "VERSION", "None of the above"],
        answer: "alerts"
    }
    ///etc.
  ];
  
  const array_length = questions.length;

  
console.log(questionEl);
console.log(choicesListEl);
console.log(answerEl);


function displayOneQuestions() {

  //add code to start timer = length of questions array * 15 seconds
  // alert("index beginning displayOneQuestions  " + index);
  // alert("choicesListEl.childElementCount " + choicesListEl.childElementCount);

  var a_length = array_length;
  var c_length = 0;
  var title = questions[index].title;


  questionEl.textContent = title;

  if(index>0)
  deleteAllChildNodes();

  c_length = questions[index].choices.length;
  for (let j = 0; j < c_length; j++) {
    var li = document.createElement("li");
    li.innerHTML = "<button class= 'choiceBtn'>" + questions[index].choices[j] + "</button>";
    // console.log(questions[i].choices[j]);
    choicesListEl.appendChild(li);
  }

  // console.log(questions[i].answer);


}

  function verifyAnswer(event)
  {
    event.preventDefault();
      
    // on clicking one answer choice button , this function should validate whether the answer is correct ot not and displays it at the bottom of choices. 
    //then the next question should be displayed along with the answer choices.

    if(event.target.matches("button"))
    {
     //alert("button clicked");
      if(event.target.textContent === questions[index].answer )
      {
       // alert("correct");
         console.log("correct");
         answerEl.textContent="answer : correct";
      } 
      else
      {
        console.log("wrong");
        answerEl.textContent="answer : wrong";
      }

    }
    // else 
    // alert("its not a button");

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

  function showNextQuestion(event)
  {
    event.preventDefault();
    // alert("enetered showNextQuestion function ");
    //alert("index before "+index); 
    index++;
    //remove all the existing li tags
if(index < array_length)
  displayOneQuestions();
  else alert("All done");
    
  }


  //setTimer() sets the timer value to (array length * 15 secs) and counts down till it reaches 0

  function setTimer()
  {

  }

    
  choicesListEl.addEventListener("click",showNextQuestion);
  
