// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_n9YMxqYvf6m3mnRKOiRK6FzsVhVfx4w",
  authDomain: "explorer-club-85af6.firebaseapp.com",
  projectId: "explorer-club-85af6",
  storageBucket: "explorer-club-85af6.appspot.com",
  messagingSenderId: "894418231336",
  appId: "1:894418231336:web:f2814bf5ff2c9d28f9d51d",
  measurementId: "G-7L423NMXSG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// firebase.initializeApp(firebaseConfig);
// var sendmszDB=firebase.database().ref("sendmsz");
// document.getElementById("sendmsz").addEventListener("Send Message",submit);
// function submit(e){
//   e.preventDefault();
//   var name=getElementVal("name");
//   var E_mail=getElementVal("E_mail");
//   var purpose=getElementVal("purpose");
//   var txt=getElementVal("txt");
//   saveMessages(name,E_mail,purpose,txt);
//   document.querySelector(".alert").style.display="block";
//   setTimeout(()=>{
//     document.querySelector(".alert").style.display="none";
//   },3000);
//   document.getElementById("sendmsz").reset();
  

// }
// const saveMessages=(name,E_mail,purpose,txt)=>{
//   var newinfo=sendmszDB.push();
//   newinfo.set({
//     name:name,
//     E_mail:E_mail,
//     purpose:purpose,
//     txt:txt,
//   });
// };
// const getElementVal =(id)=>{
//   return document.getElementById(id).value;
// };