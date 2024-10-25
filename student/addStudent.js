document.querySelectorAll('input[type="number"]').forEach((input) => {
  input.addEventListener("keydown", function (e) {
    if (e.key === "e" || e.key === "E" || e.key === "+") {
      e.preventDefault();
    }
  });
});
document.getElementById("studentForm").onsubmit = function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const subject1 = parseInt(document.getElementById("subject1").value);
  const subject2 = parseInt(document.getElementById("subject2").value);
  const subject3 = parseInt(document.getElementById("subject3").value);
  if (
    [subject1, subject2, subject3].some((score) => score < 0 || score > 100)
  ) {
    alert("Scores must be between 0 and 100.");
    return;
  }

  const average = (subject1 + subject2 + subject3) / 3;

  const studentData = {
    name: name,
    scores: [subject1, subject2, subject3],
    average: average,
  };

  let students = JSON.parse(localStorage.getItem("students")) || [];

  students.push(studentData);

  localStorage.setItem("students", JSON.stringify(students));

  alert("Student added successfully!");

  document.getElementById("studentForm").reset();
};
