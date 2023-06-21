//call API
// const emptyJson = {};
// const setLists = JSON.stringify(emptyJson)
const BASE_API = "http://localhost:3000";
const API_GET_ALL_LIST = `${BASE_API}/lists`;
const resCallAPI = fetch(API_GET_ALL_LIST, {
  headers: {
    "Content-Type": "application/json",
  },
});
resCallAPI
  .then((Response) => Response.json())
  .then((data) => {
    const rows = renderRow(data);
    // console.log(rows);
    renderUI(rows);
  })
  .catch(() => console.log("call api loi"));

const renderRow = function (setLists) {
  return setLists.map(
    (item) =>
      `
      <tr>
          <th><input type="checkbox"></th>
          <td>${item.author}</td>
          <td>${item.title}</td>
          <td>${item.description}</td>
          <td>${item.amount}</td>
          <td>${item.tags}</td>
          <td>
            <button onclick='handEdit(${item.id})'>
            <a href="editform.html?id=${item.id}" class="table_hover fa-solid fa-pen-to-square" style="color: #00ff11;" ></a>
            </button>
            <button onclick='handDelete(${item.id})' > 
            bam vào đây
            <i class=" table_hover fa-sharp fa-solid fa-trash" style="color: #e4683f;"> </i> 
            </button>
          </td>
          </tr>
      `
  );
};
function renderUI(UIDataTable) {
  var tableUI = document.querySelector(".ren");
  console.log("html siunh ra tai day");
  tableUI.innerHTML = UIDataTable;
}
function deleteTable(id){
  return fetch(`${API_GET_ALL_LIST}/${id}`,{
    method: "delete",
    headers: {
      "Content-Type": "application/json",
    },
  })
}
function handDelete(id){
  const resp =  deleteTable(id);
  resp.then((res)=>console.log(res)).catch(console.log("call api delete loi"))
}
function handEdit(id){
  console.log(id);
  // console.log(`${API_GET_ALL_LIST}`);
  // <a href="">Văn bản liên kết</a>

}
