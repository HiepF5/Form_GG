const TYPE_INPUT = 1;
const TYPE_PARAGRAPH = 2;
const TYPE_RADIO = 3;
const TYPE_CHECKBOX = 4;
let questions = [
  {
    id: 1,
    name: "Cau hoi loai input",
    type: TYPE_INPUT,
    answer: "",
    answerOptions: [],
  },
  {
    id: 2,
    name: "Cau hoi loai doan van",
    type: TYPE_PARAGRAPH,
    answer: "",
    answerOptions: [],
  },
  {
    id: 3,
    name: "Cau hoi loai radio",
    type: TYPE_RADIO,
    answer: [],
    answerOptions: [
      {
        name: "0 - 30",
        value: 30,
      },
      {
        name: "31 - 60",
        value: 60,
      },
      {
        name: "61 - 100",
        value: 100,
      },
    ],
  },
  {
    id: 4,
    name: "Cau hoi loai checkbox",
    type: TYPE_CHECKBOX,
    answer: [],
    answerOptions: [
      {
        name: "I have a bike",
        value: "Bike",
      },
      {
        name: "I have a car",
        value: "Car",
      },
      {
        name: "I have a boat",
        value: "Boat",
      },
    ],
  },
];
function renderAnswerOption(question) {
  const typeInput = question.type === TYPE_RADIO ? "radio" : "checkbox";
  const answerOption = question.answerOptions;
  // console.log(answerOption)
  const htmlArr = answerOption.map(
    (option) => `
      <input type="${typeInput}" id="${option.value}" name="${question.id}}" value="${option.value}"/>
        <label for="${option.value}">${option.name}</label><br />
       
        <br>
      `
  );
  return `
      <br>
      ${htmlArr.join("")}
      
      <br>
       
      `;
}
{/* <button onclick="addOption(${question.answerOptions})">Thêm lựa chọn</button> */}
function renderAnswer(question) {
  switch (question.type) {
    case TYPE_INPUT:
      return `
      <input type="text" name="question_input" placeholder="Enter" />`;
    case TYPE_PARAGRAPH:
      return `
      <textarea type="text" name="question_textarea" placeholder="Enter"></textarea>`;
    case TYPE_RADIO:
      return renderAnswerOption(question);
    case TYPE_CHECKBOX:
      return renderAnswerOption(question);
    default:
      return ``;
  }
}
function render() {
  // console.log("render")
  const questionList = document.querySelector(".questionList");
  console.log(questions)
  const htmls = questions
    .map((question, index) => {
      const commonInfoQuestion = `
          <div class="question">
            <span>${index + 1}</span>
            <input type="text" name="question_input" placeholder="Enter question" value="${question.name}"/>
            <select id="questionType-${index} ">
              <option value="${TYPE_INPUT}"${selectedType(question.type,TYPE_INPUT)}>Input</option>
              <option value="${TYPE_PARAGRAPH}"${selectedType(question.type,TYPE_PARAGRAPH)}>Textarea</option>
              <option value="${TYPE_RADIO}"${selectedType(question.type,TYPE_RADIO)}>Radio</option>
              <option value="${TYPE_CHECKBOX}"${selectedType(question.type,TYPE_CHECKBOX)}>Checkbox</option>
            </select> 
          </div>
          `;
      // console.log(commonInfoQuestion)
      return commonInfoQuestion.concat(renderAnswer(question));
    })
    .join("");
  console.log(htmls);
  questionList.innerHTML = htmls;
  const selectEl = document.querySelectorAll('select')
  Array.from(selectEl).map(selectElement =>{
    selectElement.addEventListener("change", (e) => {
      const element = e.target;
      const index =  +element.id.split('-')[1];
      const value = +element.value;
      // console.log(index);
      // console.log(value);
      changType(index, value);
    })
  }
  // console.log(questionList);
  )
}
render();
function setQuestion(newQuestions){
  questions =  newQuestions;
  render()
  

}
function addQuestion(){
  const newQuestion = {
    id: questions[questions.length-1].id+1,
    name: "",
    type: TYPE_INPUT,
    answer: [],
    answerOptions: [],
  }
  const newQuestions = [...questions,newQuestion]
  // console.log(newQuestions);
  // console.log(questions);
 
  setQuestion(newQuestions);
}
function changType(index, type){
  questions[index].type = type;
  render();

}
function selectedType(questionType, valueType){
  return questionType=== valueType? "selected" : "";
}

// function addOption(addAnswer){
//   console.log("click");

//   var newOption = {
//     name: "new",
//     value: "30-60 "
//   }
//   addAnswer = Object.assign({},addAnswer, newOption );
//   console.log(addAnswer);
//   render()
// }