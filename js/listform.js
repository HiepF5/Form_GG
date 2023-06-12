//call API
const BASE_API = 'http://localhost:3000';
const API_GET_ALL_LIST = `${BASE_API}/lists`
const resCallAPI = fetch(API_GET_ALL_LIST ,{
    headers:{
        "Content-Type":"application/json"
    }

})
resCallAPI
.then((Response)=>Response.json())
.then((data)=>console.log(data))
.catch((err)=> console.log(err));