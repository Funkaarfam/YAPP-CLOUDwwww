import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDB8F7l0eIIt6NyZoDKtMI6EvOAEDP18rc",
  authDomain: "desi-market-85cc8.firebaseapp.com",
  databaseURL: "https://desi-market-85cc8-default-rtdb.firebaseio.com",
  projectId: "desi-market-85cc8",
  storageBucket: "desi-market-85cc8.appspot.com", // ✅ FIXED typo here
  messagingSenderId: "707912806399",
  appId: "1:707912806399:web:088a4453c3fda7d527c1ca",
  measurementId: "G-XVBBG830NR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("login-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("Please enter email and password.");
    return;
  }

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    if (!user.emailVerified) {
      alert("Please verify your email before logging in.");
      await signOut(auth);
      return;
    }

    alert("Logged in successfully!");
    // Optionally redirect:
    // window.location.href = "dashboard.html";
  } catch (error) {
    alert("Error: " + error.message);
    console.error(error);
  }
});
