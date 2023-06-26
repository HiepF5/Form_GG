const BASE = "http://localhost:3000";
const API_BASE = `${BASE}/lists`;
const callAPI = fetch(API_BASE, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
});
callAPI
  .then((resp) => resp.json())
  .then((data) => console.log(data))
  .catch(() => console.log("call api loi"));
const fake = {
  id: 6,
  title: "Hoafffzxcdsfsdfsdfdsfsdf",
  description: "cxzxczx",
  author: "hiep",
  amount: "Manager",
  tags: "$1000",
};

const callAPI2 = fetch(API_BASE, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(fake),
});
callAPI2
  .then((resp) => resp.json())
  .then((data) => console.log(data))
  .catch(() => console.log("call api post loi"));

// const callAPI3 = fetch(`${API_BASE}/2`, {
//   method: "PUT",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(fake),
// });
// callAPI2
//   .then((resp) => resp.json())
//   .then((data) => console.log(data))
//   .catch(() => console.log("call api put loi"));

// const callAPI4 = fetch(`${API_BASE}/2`, {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//     },
// 
//   });
//   callAPI2
//     .then((resp) => resp.json())
//     .then((data) => console.log(data))
//     .catch(() => console.log("call api post loi"));
CRUD 