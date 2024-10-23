window.onload = function () {
  const studentCounter = (function () {
    let studentCount = 0;
    return {
      increment: function () {
        studentCount++;
      },
      getCount: function () {
        return studentCount;
      },
    };
  })();

  const students = JSON.parse(localStorage.getItem("students")) || [];

  let maxAverage = -Infinity;
  let minAverage = Infinity;

  students.forEach((student) => {
    if (student.average > maxAverage) {
      maxAverage = student.average;
    }
    if (student.average < minAverage) {
      minAverage = student.average;
    }
  });

  const tableBody = document.querySelector("#studentTable tbody");

  students.forEach((student) => {
    const row = document.createElement("tr");

    if (student.average === maxAverage) {
      row.classList.add("green-highlight");
    } else if (student.average === minAverage) {
      row.classList.add("red-highlight");
    }

    row.innerHTML = `
          <td>${student.name}</td>
          <td>${student.scores[0]}</td>
          <td>${student.scores[1]}</td>
          <td>${student.scores[2]}</td>
          <td>${student.average.toFixed(2)}</td>
      `;

    tableBody.appendChild(row);

    studentCounter.increment();
  });

  const studentScoresHeading = document.querySelector("#studentScoresHeading");
  const studentCountElement = document.createElement("p");
  studentCountElement.innerHTML = `Total Number of Students: ${studentCounter.getCount()}`;

  studentScoresHeading.insertAdjacentElement("afterend", studentCountElement);
};
