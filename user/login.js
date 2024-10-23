document.getElementById("loginForm").onsubmit = function () {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const validEmail = "hannan@example.com";
  const validPassword = "password123";

  if (email === validEmail && password === validPassword) {
    localStorage.setItem("userEmail", email);
    window.location.href = "../student/student.html";
    return false;
  } else {
    alert("Invalid email or password. Please try again.");
    return false;
  }
};
