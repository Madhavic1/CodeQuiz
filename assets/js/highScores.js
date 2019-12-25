var goBackBtnEl = document.querySelector("#go-back");
var clearHighScoresBtnEl = document.querySelector("#clear-highscores");

console.log("goBackBtnEl "+goBackBtnEl);;
console.log("clearHighScoresBtnEl "+clearHighScoresBtnEl);

function displayHighScores()
{
    alert(" display High scores");
}

displayHighScores();

goBackBtnEl.addEventListener("click",function(event){
    alert(" here ");
    window.open("./index.html","_self",false);
});