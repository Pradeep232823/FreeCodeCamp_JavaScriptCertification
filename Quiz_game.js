const questions = [
  {
    category: "Science",
    question: "What planet is known as the Red Planet?",
    choices: ["Mars", "Venus", "Jupiter"],
    answer: "Mars"
  },
  {
    category: "Math",
    question: "What is 2 + 2?",
    choices: ["3", "4", "5"],
    answer: "4"
  },
  {
    category: "Geography",
    question: "What is the capital of France?",
    choices: ["Paris", "Rome", "Berlin"],
    answer: "Paris"
  },
  {
    category: "History",
    question: "Who was the first President of the USA?",
    choices: ["George Washington", "Abraham Lincoln", "John Adams"],
    answer: "George Washington"
  },
  {
    category: "Programming",
    question: "Which language runs in a web browser?",
    choices: ["JavaScript", "Python", "C++"],
    answer: "JavaScript"
  }
];

function getRandomQuestion(questions) {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

function getRandomComputerChoice(choices) {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResults(question, computerChoice) {
  if (computerChoice === question.answer) {
    return "The computer's choice is correct!";
  } else {
    return "The computer's choice is wrong. The correct answer is: " + question.answer;
  }
}
const selectedQuestion = getRandomQuestion(questions);
const computerChoice = getRandomComputerChoice(selectedQuestion.choices);
const result = getResults(selectedQuestion, computerChoice);

console.log(selectedQuestion.question);
console.log(computerChoice);
console.log(result);