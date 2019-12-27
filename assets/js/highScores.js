var goBackBtnEl = document.querySelector("#go-back");
var clearHighScoresBtnEl = document.querySelector("#clear-highscores");
var choicesListEl = document.querySelector("#show-scores");
var data = JSON.parse(localStorage.getItem("list"));
var data_values = [];

// console.log("goBackBtnEl "+goBackBtnEl);;
// console.log("clearHighScoresBtnEl "+clearHighScoresBtnEl);

function displayHighScores() {

   
    data_values = Object.values(data);

    for (let i = 0; i < data_values.length; i++) {
       console.log("data_values[" + i + "] = " + data_values[i].initial + " scored " + data_values[i].finalScore);
     }

console.log("*****************************************************************");


//sorting the array of objects  data_values[] using Array.sort() method using compareFunction parameter

    function compareScores(a, b) {
        const scoreA = a.finalScore;
        const scoreB = b.finalScore;

        let comparison = 0;
        if (scoreA < scoreB) {
            comparison = 1;
        }

        else if (scoreA > scoreB) {
            comparison = -1;
        }

        return comparison;
    }

    data_values.sort(compareScores);


    for (let i = 0; i < data_values.length; i++) {
        console.log("data_values[" + i + "] = " + data_values[i].initial + " scored " + data_values[i].finalScore);
        var li = document.createElement("li");
        li.textContent = data_values[i].initial+"\-"+data_values[i].finalScore;
        choicesListEl.appendChild(li);
    }



}



//does something immediately after the page is load
window.addEventListener("load",displayHighScores);

goBackBtnEl.addEventListener("click",function(event){
    alert(" here ");
    window.open("./index.html","_self",false);
});