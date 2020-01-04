var goBackBtnEl = document.querySelector("#go-back");
var clearHighScoresBtnEl = document.querySelector("#clear-highscores");
var choicesListEl = document.querySelector("#show-scores");
var data = JSON.parse(localStorage.getItem("list"));
var data_values = [];

// console.log("goBackBtnEl "+goBackBtnEl);;
// console.log("clearHighScoresBtnEl "+clearHighScoresBtnEl);

function displayHighScores() {

   
    data_values = Object.values(data);
console.log(data_values);

    for (let i = 0; i < data_values.length; i++) {

       console.log("data_values[" + i + "] = " + data_values[i].initial + " scored " + data_values[i].finalScore);
     }

console.log("*****************************************************************");


//sorting the array of objects  data_values[] using Array.sort() method using compareFunction parameter

    function compareScores(a, b) {
        
        const scoreA = a.finalScore;
        const scoreB = b.finalScore;

    //The below commented lines of code can be replaced by a single return statement to sort the array in ascending order.
        // let comparison = 0;if (scoreA < scoreB) { comparison = 1; } else if (scoreA > scoreB) {   comparison = -1;}

        return scoreB-scoreA;    //for ascending order.     use return scoreA - scoreB for discending order.
    }

    data_values.sort(compareScores);


    for (let i = 0; i < data_values.length; i++) {
        console.log("data_values[" + i + "] = " + data_values[i].initial + " scored " + data_values[i].finalScore);
        var li = document.createElement("li");
        li.textContent = data_values[i].initial+"\-"+data_values[i].finalScore;
        choicesListEl.appendChild(li);
    }



}

function clearHighScores()
{
    
  var lastChild = choicesListEl.lastElementChild;
  while (lastChild) {
    choicesListEl.removeChild(lastChild);
    lastChild = choicesListEl.lastElementChild;
}
localStorage.clear();
}


//does something immediately after the page is load
window.addEventListener("load",displayHighScores);

goBackBtnEl.addEventListener("click",function(event){
    // alert(" here ");
    window.open("./index.html","_self",false);
});

//onclick of Clear HighScores button

clearHighScoresBtnEl.addEventListener("click", clearHighScores);