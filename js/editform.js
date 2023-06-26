const BASE_API = "http://localhost:3000";
const API_GET_ALL_LIST = `${BASE_API}/lists`;
const url_base_id = window.location.href;
var inputEl = document.querySelector(".form__main-name");
var input2El = document.querySelector(".form__main-descri");
console.log(url_base_id);
const url_id = url_base_id.split("=");
console.log(url_id[1]);
console.log(`${API_GET_ALL_LIST}/${url_id[1]}`)
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
async function makeForm(){
  const item = await getForm();
  console.log(item.id)
  inputEl.value = item.title;
  input2El.value = item.description;
}
makeForm()
async function handleEditForm() {
  console.log("xư li add form");
  const listForm = await getForm();
  console.log(listForm);
    var newOJ = {
      id:  parseInt(url_id[1]),
      title: inputEl.value,
      description: input2El.value,
      author: "hiep",
      amount: "Manager",
      tags: "$1000",
    };
    console.log(newOJ);
    await editForm(newOJ);
    window.location.href = "index.html"
}

async function editForm(newForm){
    try {
        const resp = await fetch(`${API_GET_ALL_LIST}/${url_id[1]}`, {
            method: "PUT",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newForm),
        });
        console.log(resp);
        
    }
    catch(error)
    {
        console.log("API edit loi")
    }
}

