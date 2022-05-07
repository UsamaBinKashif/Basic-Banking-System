// console.log("Welcome to ALL CITIZENS BANK");

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-analytics.js";
// import { getDatabase } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-database.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCuL2kjHMRaRy06MXTL8I-wt12ttQkUBCQ",
//   authDomain: "basic-banking-system-eed4c.firebaseapp.com",
//   databaseURL: "https://basic-banking-system-eed4c-default-rtdb.firebaseio.com",
//   projectId: "basic-banking-system-eed4c",
//   storageBucket: "basic-banking-system-eed4c.appspot.com",
//   messagingSenderId: "172888738646",
//   appId: "1:172888738646:web:6f0be10b96139335ede4f7",
//   measurementId: "G-TRR8LSH5YZ",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);
// const analytics = getAnalytics(app);
// const db = `${database.app._options.databaseURL}/.json`;

// async function getUser() {
//   const resp = await fetch(db);
//   const respData = await resp.json();
//   console.log(respData);
// }
// getUser()

let myAccountBalance = parseInt(
  document.getElementById("myAccountBalance").innerText
);

function sendMoney() {
  var enterName = document.getElementById("enterName").value;
  var enterAmount = parseInt(document.getElementById("enterAmount").value);

  if (enterAmount > 500000) {
    alert("Insufficient Balance.");
  } else {
    var findUserBankAccount = enterName + "AccountBalance";
    var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) +
      enterAmount;
    var myAccountBalance =
      parseInt(document.getElementById("myAccountBalance").innerText) -
      enterAmount;
    document.getElementById("myAccountBalance").innerText = myAccountBalance;
    document.getElementById(findUserBankAccount).innerHTML = finalAmount;
    alert(`Transaction Successful !!  
      ${enterAmount} rs sent to ${enterName}`);

    // transaction history
    var createPTag = document.createElement("li");
    var textNode = document.createTextNode(
      `${enterAmount} rs Transferred Successfully to ${enterName} on ${Date()}.`
    );
    createPTag.appendChild(textNode);
    var element = document.getElementById("transaction-history-body");
    element.insertBefore(createPTag, element.firstChild);
  }
}
sendMoney();
