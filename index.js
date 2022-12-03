var readline = require("readline-sync");
var score=0;

function cricketQuiz(que, ans){

  var yourAns = readline.question(que);
  if(yourAns===ans){
    console.log("Correct!!");
    score++;
  }
  else{
    console.log("Wrong..:(");
  }
  console.log("Your Score :",score);
}

function play(){
  var quizArr = [{
    question: "Who is current captain of Indian Cricket Team?",
    answer: "Rohit"
  },
   {
    question: "What is jersy number of Virat Kohli?",
    answer: "18"
  },
  {
    question: "Who have completed mark of 100 centuries in international cricket?",
    answer: "Sachin"
  },
  {
    question: "Who have hit 6 sixes in over VS England?",
    answer: "Yuvraj"
  },
  {
    question: "In which year india won there first World Cup?",
    answer: "1983"
  },
  {
    question: "In which IPL team Rohit is playing?",
    answer: "MI"
  },
  {
    question: "Which color is Indian Cricket Team's jersy?",
    answer: "Blue"
  },
  {
    question: "What is  name of Indian Cricket Board?",
    answer: "BCCI"
  },
  {
    question: "How many players are there in cricket team on ground?",
    answer: "11"
  }]

  var userName = readline.question("What is your Name :");
  console.log("Welcome", userName+", in Cricket champ quiz..!");
  for(var i=0;i<quizArr.length;i++){
    cricketQuiz(quizArr[i].question,quizArr[i].answer);
  }
  console.log("Thanks for taking Quiz...:)");
  console.log(userName,"Your Final Score : ", score);
  
  if(score>=5&&score<=8){
    console.log("Congratulations...You have good knowledge about Cricket!");
  }
  else if(score==9){
    console.log("Congratulations Champ...You are master at Cricket!");
  }
    
}

function showHighScores(){
  var highScores = [{Name:"Ramesh", Score : "9"}];
  console.log("Check out High Score so far, If you got more than this plz ping me I will update it.");
  console.log(highScores[0].Name+" : "+highScores[0].Score);
}

play();
showHighScores();