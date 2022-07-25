const questionsDOM = document.getElementsByClassName(
  "display_question multiple_choice_question"
);
const questions = [];

Array.prototype.forEach.call(questionsDOM, (questionDOM) => {
  const id = questionDOM.id;
  const text = document.getElementById(`${id}_question_text`).innerText;

  const answers = [];
  const answersDOM = document.querySelectorAll(`#${id} .answer_text`);

  Array.prototype.forEach.call(answersDOM, (answerDOM) => {
    answers.push(answerDOM.innerText);
  });

  const correct = document
    .querySelector(`#${id} .correct_answer`)
    .innerText.replace(/Correct\ Answer/g, "");

  questions.push({
    id,
    text,
    answers,
    correct,
  });
});

console.log(`${questions.length} questions found.`);

let fullBuff = "";
questions.forEach((question, i) => {
  let buffer = "";
  buffer += `#### Question ${i + 1}\n`;
  buffer += `\n${question.text}\n`;
  question.answers.forEach((answer) => {
    buffer += `- ${answer}\n`;
  });
  buffer += `\n<details>\n`;
  buffer += `  <summary>Correct Answer</summary>\n`;
  buffer += `  ${question.correct}\n`;
  buffer += `</details>\n`;
  fullBuff += buffer;
  fullBuff += "\n";
});

console.log(fullBuff);
