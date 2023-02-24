//  const getJokes=async()=>
//  {
//      try{
//          const res= await fetch("https://api.chucknorris.io/jokes/random");
//          const data = await res.json();
//          const test= document.querySelector("#test");
//          test.innerHTML = data.value;
// }catch(error){}
//  };

//  window.addEventListener("load",()=>{
//      getJokes();

//  });
console.log("hello");
function callvalue(event){


    event.preventDefault();
    console.log("hello lkk");
    var name = document.getElementById("fname").value;
    var email= document.getElementById("email").value;
    var Regno=document.getElementById("number").value;
    console.log(name);
}
const form =document.getElementById("user_form");
form.addEventListener("submit",callvalue,true);


