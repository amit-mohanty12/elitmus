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

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
<script src="https://www.gstatic.com/firebasejs/8.1.1/firebase-database.js"></script>

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC86I0TH3GubhBeD17F2lSiY2wtbKuhB8E",
  authDomain: "e-litmus-f57af.firebaseapp.com",
  databaseURL: "https://e-litmus-f57af-default-rtdb.firebaseio.com",
  projectId: "e-litmus-f57af",
  storageBucket: "e-litmus-f57af.appspot.com",
  messagingSenderId: "741603547483",
  appId: "1:741603547483:web:2aac20b934f8d47f50627e",
  measurementId: "G-PBWX0E1PWD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
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


