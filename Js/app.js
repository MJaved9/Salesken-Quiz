function Load() {
  let token = JSON.parse(localStorage.getItem("token"));
  if (!token) {
    window.location.href = "Login.html";
  }
}

const quizData = [
  {
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
  },
  {
    question: "Javascript is an _______ language?",
    a: "Object-Oriented",
    b: "Object-based",
    c: "Procedural",
    d: "none of the Above",
    correct: "a",
  },
  {
    question: "Which of the following methods is used to access HTML elements using Javascript?",
    a: "getElementById",
    b: "getElementByClassName",
    c: "Both A and B",
    d: "None of the Above",
    correct: "c",
  },
  {
    question: "How can a datatype be declared to be a constant type?",
    a: "const",
    b: "let",
    c: "var",
    d: "constant",
    correct: "a",
  },
  {
    question: "Which of the following methods can be used to display data in some form using Javascript?",
    a: "document.write()",
    b: "console.log()",
    c: "window.alert()",
    d: "All of the Above",
    correct: "d",
  },
  {
    question: "What keyword is used to check whether a given property is valid or not?",
    a: "in",
    b: "is in",
    c: "exists",
    d: "lies",
    correct: "a",
  },
  {
    question: " Which function is used to serialize an object into a JSON string in Javasc",
    a: "stringify()",
    b: "parse()",
    c: "convert()",
    d: "None of the Above",
    correct: "a",
  },
  {
    question: "Which of the following is correct about JavaScript?",
    a: " JavaScript is an Object-Based language",
    b: "JavaScript is Assembly-language",
    c: "JavaScript is an Object-Oriented language",
    d: "JavaScript is a High-level language",
    correct: "a",
  },
];
let index = 0;
let correct = 0,
  incorrect = 0,
  total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']");
const loadQuestion = () => {
  if (total === index) {
    return quizEnd();
  }
  reset();
  const data = quizData[index];
  questionBox.innerHTML = `${index + 1}) ${data.question}`;
  allInputs[0].nextElementSibling.innerText = data.a;
  allInputs[1].nextElementSibling.innerText = data.b;
  allInputs[2].nextElementSibling.innerText = data.c;
  allInputs[3].nextElementSibling.innerText = data.d;
};

document.querySelector("#submit").addEventListener("click", myFun);
document.querySelector("#submit2").addEventListener("click", myFun);
function myFun(){
    const data = quizData[index];
    const ans = getAnswer();
    if (ans === data.correct) {
      correct++;
    } else {
      incorrect++;
    }
    index++;
    loadQuestion();
}
const getAnswer = () => {
  let ans;
  allInputs.forEach((inputEl) => {
    if (inputEl.checked) {
      ans = inputEl.value;
    }
  });
  return ans;
};

const reset = () => {
  allInputs.forEach((inputEl) => {
    inputEl.checked = false;
  });
};

const quizEnd = () => {
  // console.log(document.getElementsByClassName("container"));
  document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
    <p><h1>Hii Your score Card is Here..</h1></p>
        <h3 class="w-100">you've scored ${correct} / ${total} </h3>
    </div>
`;
let all={
    data:`You are Scored ${correct}/${total}`
}
localStorage.setItem("Score",JSON.stringify(all))
};
loadQuestion(index);
