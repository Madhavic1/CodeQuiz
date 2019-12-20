var questionEl = document.querySelector(".question");
var choicesListEl = document.querySelector("#choices-list");
var answerEl = document.querySelector("#answer");

console.log(questionEl);
console.log(choicesListEl);
console.log(answerEl);


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
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    }
    ///etc.
  ];
  var i=0;


  function displayOneQuestions()
  {


    var a_length = questions.length;
    var c_length=0;
    var title = questions[i].title
     
    questionEl.textContent = title;

     // console.log(questions[i].title);
      c_length = questions[i].choices.length;
      for(let j=0 ; j< c_length ; j++ )
      {
        var li = document.createElement("li");
        li.innerHTML = "<button class= 'choiceBtn'>"+questions[i].choices[j]+"</button>";
      // console.log(questions[i].choices[j]);
        choicesListEl.appendChild(li);
      }
      answerEl.innerHTML="answer : "+"<span id='ansSpan'>"+questions[i].answer+"</span>";
     // console.log(questions[i].answer);
    

  }

  function verifyAnswer(event)
  {
    event.preventDefault();
    var target = event.target;
   
    if(event.target.matches("button"))
    {
     alert("button clicked");
    }
    else alert("its not a button");
  }
  displayOneQuestions();
  
  choicesListEl.addEventListener("click",verifyAnswer);
  
