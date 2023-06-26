var inputEl = document.querySelector(".form__main-name");
var input2El = document.querySelector(".form__main-descri");
const BASE_API = "http://localhost:3000";
const API_GET_ALL_LIST = `${BASE_API}/lists`;


async function handleAddForm() {
  console.log("xư li add form");
  const listForm = await getForm();
  console.log(listForm);
  const newId =  (listForm.length) ? listForm[listForm.length - 1].id + 1:1;
  console.log(newId)
    var newOJ = {
      id: newId,
      title: inputEl.value,
      description: input2El.value,
      author: "hiep",
      amount: "Manager",
      tags: "$1000",
    };
    console.log(newOJ);
    await addForm(newOJ);
    window.location.href = "index.html"
}

async function addForm(newForm) {
  try {
    const resp = await fetch(`${API_GET_ALL_LIST}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newForm),
    });
    console.log(resp);
  } catch (error) {
    console.log("api add loi ");
  }
}

async function getForm() {
  try {
    const resp = await fetch(`${API_GET_ALL_LIST}`, {
      method: "GET",
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
