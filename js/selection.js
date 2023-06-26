function showInputField() {
  var question = document.getElementById("question" + questionCount);
  var newQuestionChild = document.createElement("div");
  newQuestionChild.id = "inputField";
  var nameLabel = document.createElement("p");
  nameLabel.textContent = "Câu hỏi input:";
  var inputOptionChild = document.createElement("input");
  inputOptionChild.type = "text";
  inputOptionChild.name = "question_input";
  newQuestionChild.appendChild(nameLabel);
  newQuestionChild.appendChild(inputOptionChild);
  question.appendChild(newQuestionChild);
}
function showTextareaField() {
  var question = document.getElementById("question" + questionCount);
  var newQuestionChild = document.createElement("div");
  newQuestionChild.id = "textareaField";
  var nameLabel = document.createElement("p");
  nameLabel.textContent = "Câu hỏi textarea:";
  var inputOptionChild = document.createElement("textarea");
  inputOptionChild.type = "text";
  inputOptionChild.name = "question_textarea";
  newQuestionChild.appendChild(nameLabel);
  newQuestionChild.appendChild(inputOptionChild);
  question.appendChild(newQuestionChild);
}
function showRadioField() {
  var question = document.getElementById("question" + questionCount);
  var newQuestionChild = document.createElement("div");
  newQuestionChild.id = "radioField";
  var nameLabel = document.createElement("p");
  nameLabel.textContent = "Câu hỏi radio:";
  var labelOptionChild = document.createElement("label");
  labelOptionChild.for = "question_radio_option1";
  labelOptionChild.textContent = "Option 1:";
  var inputOptionChild = document.createElement("input");
  inputOptionChild.type = "radio";
  inputOptionChild.id = "question_radio_option1";
  inputOptionChild.name = "question_radio";
  inputOptionChild.value = "option1";
  var labelOptionChild2 = document.createElement("label");
  labelOptionChild2.for = "question_radio_option2";
  labelOptionChild2.textContent = "Option 2:";
  var inputOptionChild2 = document.createElement("input");
  inputOptionChild2.type = "radio";
  inputOptionChild2.id = "question_radio_option2";
  inputOptionChild2.name = "question_radio";
  inputOptionChild2.value = "option1";
  newQuestionChild.appendChild(nameLabel);
  newQuestionChild.appendChild(labelOptionChild);
  newQuestionChild.appendChild(inputOptionChild);
  newQuestionChild.appendChild(labelOptionChild2);
  newQuestionChild.appendChild(inputOptionChild2);

  question.appendChild(newQuestionChild);
}

function showCheckboxField() {
  var question = document.getElementById("question" + questionCount);
  var newQuestionChild = document.createElement("div");
  newQuestionChild.id = "checkboxField";
  var nameLabel = document.createElement("p");
  nameLabel.textContent = "Câu hỏi checkbox:";
  var labelOptionChild = document.createElement("label");
  labelOptionChild.for = "question_checkbox_option1";
  labelOptionChild.textContent = "Option 1:";
  var inputOptionChild = document.createElement("input");
  inputOptionChild.type = "checkbox";
  inputOptionChild.id = "question_checkbox_option1";
  inputOptionChild.name = "question_checkbox";
  inputOptionChild.value = "option1";
  var labelOptionChild2 = document.createElement("label");
  labelOptionChild2.for = "question_checkbox_option2";
  labelOptionChild2.textContent = "Option 2:";
  var inputOptionChild2 = document.createElement("input");
  inputOptionChild2.type = "checkbox";
  inputOptionChild2.id = "question_checkbox_option2";
  inputOptionChild2.name = "question_checkbox";
  inputOptionChild2.value = "option1";
  newQuestionChild.appendChild(nameLabel);
  newQuestionChild.appendChild(labelOptionChild);
  newQuestionChild.appendChild(inputOptionChild);
  newQuestionChild.appendChild(labelOptionChild2);
  newQuestionChild.appendChild(inputOptionChild2);
  question.appendChild(newQuestionChild);
}

function showQuestionOptions() {
  var questionType = document.getElementById(
    "questionType" + questionCount
  ).value;
  if (questionType === "input") {
    showInputField();
  } else if (questionType === "textarea") {
    showTextareaField();
  } else if (questionType === "radio") {
    showRadioField();
  } else if (questionType === "checkbox") {
    showCheckboxField();
  }
}

var questionCount = 0;
function addQuestion() {
  questionCount++;
  var questionList = document.getElementById("questionList");
  var newQuestion = document.createElement("div");
  newQuestion.id = "question" + questionCount;
  var nameLabel = document.createElement("p");
  nameLabel.textContent = "Chọn loại đầu vào:";
  var optionSelect = document.createElement("select");
  optionSelect.id = "questionType" + questionCount;
  optionSelect.onchange = function () {
    showQuestionOptions();
  };
  var inputOption = document.createElement("option");
  inputOption.value = "input";
  inputOption.text = "Input";
  var textareaOption = document.createElement("option");
  textareaOption.value = "textarea";
  textareaOption.text = "Textarea";
  var radioOption = document.createElement("option");
  radioOption.value = "radio";
  radioOption.text = "Radio";
  var checkboxOption = document.createElement("option");
  checkboxOption.value = "checkbox";
  checkboxOption.text = "Checkbox";
  optionSelect.appendChild(inputOption);
  optionSelect.appendChild(textareaOption);
  optionSelect.appendChild(radioOption);
  optionSelect.appendChild(checkboxOption);
  newQuestion.appendChild(nameLabel);
  newQuestion.appendChild(optionSelect);
  questionList.appendChild(newQuestion);
}
