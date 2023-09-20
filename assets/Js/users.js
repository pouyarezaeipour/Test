document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {});



    const adduserbtn = document.getElementById("ADDBTN");
    adduserbtn.addEventListener("click",()=>{
      document.querySelector(".add_user_model").classList.add("show");
      document.querySelector(".add_user_model_back").classList.remove("dis-none");
    });

    document.querySelector(".add_user_model_back").addEventListener("click",(e)=>{
      document.querySelector(".add_user_model").classList.remove("show");
      document.querySelector(".add_user_model_back").classList.add("dis-none");



      


    });


    


//     fetch('https://jsonplaceholder.typicode.com/users', {
//   method: 'POST',
//   body: JSON.stringify({
//     email: 'pouya@gmail.com',
//     id : 1 ,
//     name : "pouya",
//     phone: "545454",
//     username : "pou",
//     website : "pou.com"
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) => response.json())
// .then((json) => {
//   console.log(json);
// html = "";
// for(const user of json){
//     html = html + `   <tr>
//     <td>${user.id}</td>
//     <td>${user.name}</td>
//     <td>${user.username}</td>
//     <td>p${user.email}</td>
//     <td>${user.address.city}</td>
//     <td>
//       <span>action :</span>
//       <i class="material-icons p-l-5 p-r-2 yellow-text">edit</i>
//       <i class="material-icons p-l-5 p-r-2  orange-text">delete</i>
//     </td>
//   </tr>`
// }

// document.querySelector(".body-of-table").innerHTML=html;


// });



  });


  
