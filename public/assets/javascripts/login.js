// {/* <script type="module"> */}
//   // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";
//   import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

  
//   // TODO: Add SDKs for Firebase products that you want to use
//   // https://firebase.google.com/docs/web/setup#available-libraries

//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   const firebaseConfig = {
//     apiKey: "AIzaSyDfirfFB7xkE8pnOF6p7zml0Iixn9q-zeQ",
//     authDomain: "hehe-7f455.firebaseapp.com",
//     projectId: "hehe-7f455",
//     storageBucket: "hehe-7f455.appspot.com",
//     messagingSenderId: "938652971525",
//     appId: "1:938652971525:web:e9278ecd869a67c4a4626c",
//     measurementId: "G-TM69EF5CCN"
//   };

//     // Initialize Firebase
//     const app = initializeApp(firebaseConfig);
//     const analytics = getAnalytics(app);
  

// const submitButton = document.getElementById('submit');
// submit.addEventListener("click", function (event) {
//     event.preventDefault()
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     const auth = getAuth();
//     signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed in 
//       const user = userCredential.user;
//       // ...
//       alert("Đăng nhập thành công!")
//       window.location.href = "../../../index.html";
//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       alert("Tài khoản, mật khẩu không đúng!")
//       // ..
//     });
//   })    