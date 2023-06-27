const TYPE_INPUT = 1;
const TYPE_PARAGRAPH = 2;
const TYPE_RADIO = 3;
const TYPE_CHECKBOX = 4;
const BASE_API = "http://localhost:3000";
const API_GET_ALL_LIST = `${BASE_API}/lists`;
const url_base_id = "add2.html?id=1";
var inputEl = document.querySelector(".form__main-name");
var input2El = document.querySelector(".form__main-descri");
console.log(url_base_id);
const url_id = url_base_id.split("=");
console.log(url_id[1]);
console.log(`${API_GET_ALL_LIST}/${url_id[1]}`);

async function getForm() {
  try {
    const resp = await fetch(`${API_GET_ALL_LIST}/${url_id[1]}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await resp.json();
    return data;
  } catch (error) {
    console.log("api get loi ");
  }
}
// const data = await getForm();
// const questions = data.questions;

async function makeForm() {
  const item = await getForm();
  console.log(item.id);
  inputEl.value = item.title;
  input2El.value = item.description;
}
makeForm();
// render();
function renderAnswerOption(question, index) {
  // console.log(question.id)
  const typeInput = question.type === TYPE_RADIO ? "radio" : "checkbox";
  const answerOption = question.answerOptions;
  const htmlArr = answerOption.map((option) => {
    console.log(option);
    return `
      <input type="${typeInput}" id="${option.value}" name="${question.id}}" value="${option.value}" disabled/>
        <input value ="${option.name} " for="${option.value}"/><br />
       
        <br>
      `;
  });
  return `
      <br>
      ${htmlArr.join("")}
      <button id="buttonAddQuestion-${index}" class="buttonAddQuestion" onclick="addOption()">Thêm lựa chọn</button>
      <br>
      `;
}
// questions[index].answerOptions.push
function renderAnswer(question, index) {
  switch (question.type) {
    case TYPE_INPUT:
      return `
      <input type="text" name="question_input" placeholder="Enter" />`;
    case TYPE_PARAGRAPH:
      return `
      <textarea type="text" name="question_textarea" placeholder="Enter"></textarea>`;
    case TYPE_RADIO:
      return renderAnswerOption(question, index);
    case TYPE_CHECKBOX:
      return renderAnswerOption(question, index);
    default:
      return ``;
  }
}
async function main() {
  const data = await getForm();
  const questions = data.questions;
  var buttonAdd = document.querySelector("#buttonAdd");
  buttonAdd.addEventListener("click", (e) => {
    console.log(questions);
    addQuestion(questions);
  });
  console.log(buttonAdd);
  render(questions);
}
main();
function render(questions) {
  const questionList = document.querySelector(".questionList");
  //   const data = await getForm();
  //   const questions = data.questions;
  console.log(questions);
  //   console.log(questions)
  const htmls = questions
    ?.map((question, index) => {
      const commonInfoQuestion = `
          <div class="question">
            <span>${index + 1}</span>
            <input type="text" name="question_input" placeholder="Enter question" value="${
              question.name
            }"/>
            <select id="questionType-${index} ">
              <option value="${TYPE_INPUT}"${selectedType(
        question.type,
        TYPE_INPUT
      )}>Input</option>
              <option value="${TYPE_PARAGRAPH}"${selectedType(
        question.type,
        TYPE_PARAGRAPH
      )}>Textarea</option>
              <option value="${TYPE_RADIO}"${selectedType(
        question.type,
        TYPE_RADIO
      )}>Radio</option>
              <option value="${TYPE_CHECKBOX}"${selectedType(
        question.type,
        TYPE_CHECKBOX
      )}>Checkbox</option>
            </select> 
          </div>
          `;
      return commonInfoQuestion.concat(renderAnswer(question, index));
    })
    .join("");
  //   console.log(htmls);
  questionList.innerHTML = htmls;
  const selectEl = document.querySelectorAll("select");
  Array.from(selectEl).map((selectElement) => {
    selectElement.addEventListener("change", (e) => {
      const element = e.target;
      const index = +element.id.split("-")[1];
      const value = +element.value;
      changType(index, value, questions);
    });
  });
  const buttonAddOptions = document.querySelectorAll(".buttonAddQuestion");
  Array.from(buttonAddOptions).map((buttonAddQuestionId) => {
    buttonAddQuestionId.addEventListener("click", (e) => {
      const element = e.target;
      const index = +element.id.split("-")[1];
      var newOption = {
        name: "new option",
        value: "fake",
      };
      console.log(questions);
      // questions[index].answerOptions.push(newOption)
      const newQuestion = questions?.map((item) => Object.assign({}, item));
      newQuestion[index].answerOptions.push(newOption);
      setQuestion(newQuestion, questions);
    });
  });
}
// render();
async function setQuestion(newQuestions, questions) {
  questions = newQuestions;
  console.log(questions);
  //   questions = questions;
  //   console.log(data);
  //   await editForm(data);
  render(questions);
}
function addQuestion(questions) {
  if (questions) {
    const newQuestion = {
      id: questions[questions?.length - 1].id + 1,
      name: "",
      type: TYPE_INPUT,
      answer: [],
      answerOptions: [],
    };

    const newQuestions = [...questions, newQuestion];
    console.log(newQuestion);
    setQuestion(newQuestions, questions);
  }
  // console.log(questions)
  // const data = await getForm();
  // const questions = data.questions;
}
function changType(index, type, questions) {
  console.log(questions);
  questions[index].type = type;
  //   const typeInput = question.type === TYPE_RADIO ? "radio" : "checkbox";
  if (type === TYPE_INPUT || type === TYPE_PARAGRAPH) {
    questions[index].answerOptions = [];
    setQuestion([...questions], questions);
  }
  //   await editForm(data);
  //   console.log(data)
  else render(questions);
}
async function editForm(newForm) {
  try {
    const resp = await fetch(`${API_GET_ALL_LIST}/${url_id[1]}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newForm),
    });
    console.log(resp);
  } catch (error) {
    console.log("API edit loi");
  }
}
function selectedType(questionType, valueType) {
  return questionType === valueType ? "selected" : "";
}

// function addOption() {
//   console.log("click");

//   //   var newOption = {
//   //     name: "new",
//   //     value: "30-60 ",
//   //   };
//   //   const ans = questions[questions.length - 1].answerOptions;
//   //   console.log(ans);
//   //   console.log(questions.answerOptions.length);
//   //   questions[questions.length].answerOptions.push(newOption);
//   //   console.log(addAnswer);
//   render();
// }
