var finalScoreEl = document.querySelector("#final-score");
var allDoneSubmitEl = document.getElementById("all-done-submit");
var intialsEl = document.querySelector("#initials");
var scoreDetails = [];
console.log("#all-done-submit "+allDoneSubmitEl);
console.log("finalScoreEl"+finalScoreEl);
console.log("intialsEl "+intialsEl);





var score_stored = localStorage.getItem("final_score");
// alert("local storage "+score_stored);
finalScoreEl.textContent = score_stored;

function openHighScores(event)
{
    event.preventDefault();
    alert(" open ");
    alert(" final score "+ finalScoreEl.textContent);
    // creating an object with intials and final scores.
    var intial_enetered = intialsEl.value;
    alert("intial_enetered "+intial_enetered);
    var final_score = finalScoreEl.textContent;
    let details  = { 
                    "initial" : intial_enetered,
                    "final-score" : final_score
                    };
    
    scoreDetails.push(details);
    localStorage.setItem("InitialScoreList",JSON.stringify(details));

    console.log(JSON.parse(localStorage.getItem("InitialScoreList")));
    


    window.open("./HighScores.html","_self",false);
}

allDoneSubmitEl.addEventListener("click",openHighScores);
