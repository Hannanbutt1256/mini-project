window.onload = function () {
  const email = localStorage.getItem("userEmail");
  if (email) {
    const username = email.split("@")[0];
    document.getElementById(
      "greetingMessage"
    ).innerText = `Welcome, ${username}!`;
  }

  document.getElementById("btnPage1").onclick = function () {
    window.location.href = "./addStudent.html";
  };

  document.getElementById("btnPage2").onclick = function () {
    window.location.href = "./fetchStudent.html";
  };
};
