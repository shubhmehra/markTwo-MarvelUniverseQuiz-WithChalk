var readLineSync = require("readline-sync")
const chalk = require('chalk');

var score = 0;
var userName = readLineSync.question(chalk.black.bgYellowBright("What is your name? \n"))


function quiz(question, options, answer) {
  let userAnswer = readLineSync.keyInSelect(options, chalk.blackBright.bgCyanBright.bold.underline(question));

  if(options[userAnswer] === answer) {
    console.log(chalk.greenBright("You are right! Your score is :"), 
    ++score);
  } else {
    console.log(chalk.redBright("You are wrong! Your score is :"), score == 0 ? 0 : --score);
  }

  console.log("----------------------")
}

var question = [
  {
    question: "What year was the first Iron Man movie released?",
    options: ["2005","2008","2010","2012"],
    answer: "2008"
  },
  {
    question: "What is the name of Thor’s hammer?",
    options: ["Vanir","Mjolnir","Aesir","Norn"],
    answer: "Mjolnir"
  },
  {
    question: "What is Captain America’s shield made of?",
    options: ["Adamantium","Vibranium","Promethium","Carbonadium"],
    answer: "Vibranium"
  },
  {
    question: "Who does the Mad Titan sacrifice to acquire the Soul Stone?",
    options: ["Nebula","Ebony Maw","Cull Obsidian","Gamora"],
    answer: "Gamora"
  },
  {
    question: "Who is Black Panther’s sister?",
    options: ["Shuri","Nakia","Ramonda","Okoye"],
    answer: "Shuri"
  },
]

for(i=0; i<question.length; i++) {
  quiz(question[i].question,question[i].options, question[i].answer)
}

console.log("Your score is :" + score);

var highscore =  {
  name : "Shubham",
  score : "3"
}

if(score >= highscore.score) {
  highscore = {
    name : userName,
    score : score
  }
}
console.log(chalk.blackBright.bgGreenBright.bold.underline("Highscore:") +" "+ highscore.name+" "+highscore.score)