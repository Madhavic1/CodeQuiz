var finalScoreEl = document.querySelector("#final-score");
var allDoneSubmitEl = document.getElementById("all-done-submit");
var intialsEl = document.querySelector("#initials");
var scoreDetails = [];
var data_values = [];

console.log("#all-done-submit " + allDoneSubmitEl);
console.log("finalScoreEl" + finalScoreEl);
console.log("intialsEl " + intialsEl);





var score_stored = localStorage.getItem("final_score");
// alert("local storage "+score_stored);
finalScoreEl.textContent = score_stored;

function openHighScores(event) {
    event.preventDefault();

    // creating an object with intials and final scores.
    var intial_enetered = intialsEl.value;
    var final_score = finalScoreEl.textContent;
    let details = {
        id: Date.now(),
        initial: intial_enetered,
        finalScore: final_score
    };


    var data = JSON.parse(localStorage.getItem("list"));
    console.log("type of scoreDetails " + scoreDetails.length);
    console.log(" data " + data + " has length of " + data);
    if (data === null) {
        console.log(" if  NULL");


        localStorage.setItem("list", JSON.stringify(scoreDetails));
    }

    else {
        
        data_values = Object.values(data);
        console.log("already stored data from storage " + data_values + " length " + data_values.length);
        data_values.push(details);
        console.log("edited array length " + data_values.length);
        localStorage.setItem("list", JSON.stringify(data_values));
    }

    for(let i=0;i<data_values.length;i++)
    {
        console.log("data_values["+i+"] = "+data_values[i].initial+" scored "+data_values[i].finalScore);
        
    }
   // console.log("lastUser--->after if block " + JSON.parse(localStorage.getItem("list")));
  


    window.open("./HighScores.html","_self",false);
}

allDoneSubmitEl.addEventListener("click", openHighScores);
