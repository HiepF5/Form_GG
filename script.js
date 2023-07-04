// Lấy các phần tử từ DOM
const form = document.getElementById('dynamic-form');
const questionContainer = document.getElementById('question-container');
const addQuestionBtn = document.getElementById('add-question-btn');

// Mảng lưu các câu hỏi
let questions = [];

// Xử lý sự kiện click nút "Thêm câu hỏi"
addQuestionBtn.addEventListener('click', () => {
  // Tạo câu hỏi mới
  const question = document.createElement('div');
  question.classList.add('question');

  // Input nhập tên câu hỏi
  const questionNameInput = document.createElement('input');
  questionNameInput.type = 'text';
  questionNameInput.placeholder = 'Tên câu hỏi';
  question.appendChild(questionNameInput);

  // Select option
  const questionTypeSelect = document.createElement('select');
  questionTypeSelect.addEventListener('change', handleQuestionTypeChange);
  
  const optionInput = document.createElement('option');
  optionInput.value = 'input';
  optionInput.textContent = 'Input';
  questionTypeSelect.appendChild(optionInput);

  const optionTextarea = document.createElement('option');
  optionTextarea.value = 'textarea';
  optionTextarea.textContent = 'Textarea';
  questionTypeSelect.appendChild(optionTextarea);

  const optionRadio = document.createElement('option');
  optionRadio.value = 'radio';
  optionRadio.textContent = 'Radio button';
  questionTypeSelect.appendChild(optionRadio);

  const optionCheckbox = document.createElement('option');
  optionCheckbox.value = 'checkbox';
  optionCheckbox.textContent = 'Checkbox';
  questionTypeSelect.appendChild(optionCheckbox);

  const optionDropdown = document.createElement('option');
  optionDropdown.value = 'dropdown';
  optionDropdown.textContent = 'Dropdown';
  questionTypeSelect.appendChild(optionDropdown);

  question.appendChild(questionTypeSelect);

  // Nút "Thêm tuỳ chọn" (chỉ hiển thị khi loại câu hỏi là dropdown)
  const addOptionBtn = document.createElement('button');
  addOptionBtn.textContent = 'Thêm tuỳ chọn';
  addOptionBtn.style.display = 'none';
  addOptionBtn.addEventListener('click', addOption);
  question.appendChild(addOptionBtn);

  // Thêm câu hỏi vào container
  questionContainer.appendChild(question);

  // Lưu câu hỏi vào mảng
  questions.push({ name: questionNameInput, type: questionTypeSelect, options: [] });
});

// Xử lý sự kiện khi loại câu hỏi thay đổi
function handleQuestionTypeChange(event) {
  const questionType = event.target.value;
  const addOptionBtn = event.target.parentElement.querySelector('button');
  
  if (questionType === 'dropdown') {
    addOptionBtn.style.display = 'inline-block';
  } else {
    addOptionBtn.style.display = 'none';
  }
}

// Xử lý sự kiện click nút "Thêm tuỳ chọn"
function addOption(event) {
  const questionDiv = event.target.parentElement;
  const questionIndex = Array.from(questionDiv.parentElement.children).indexOf(questionDiv);
  const question = questions[questionIndex];
  
  const optionInput = document.createElement('input');
  optionInput.type = 'text';
  optionInput.placeholder = 'Tuỳ chọn';
  
  const removeOptionBtn = document.createElement('button');
  removeOptionBtn.textContent = 'Xóa';
  removeOptionBtn.addEventListener('click', () => {
    optionInput.remove();
    removeOptionBtn.remove();
    question.options = question.options.filter(option => option !== optionInput);
  });
  
  questionDiv.insertBefore(optionInput, event.target);
  questionDiv.insertBefore(removeOptionBtn, event.target);
  
  question.options.push(optionInput);
}

// Xử lý sự kiện submit biểu mẫu
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  const formName = formData.get('form-name');
  const formDescription = formData.get('form-description');

  console.log('Tên biểu mẫu:', formName);
  console.log('Mô tả biểu mẫu:', formDescription);

  questions.forEach((question) => {
    const questionName = question.name.value;
    const questionType = question.type.value;
    const questionOptions = question.options.map(option => option.value);
    
    console.log('Tên câu hỏi:', questionName);
    console.log('Loại câu hỏi:', questionType);
    console.log('Tuỳ chọn:', questionOptions);
  });

  // Gửi dữ liệu đến máy chủ hoặc xử lý theo yêu cầu của bạn
});
