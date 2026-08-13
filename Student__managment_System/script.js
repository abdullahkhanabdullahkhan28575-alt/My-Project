const addBtn = document.getElementById("addBtn");
const studentList = document.getElementById("studentList");
const totalStudents = document.getElementById("totalStudents");
const search = document.getElementById("search");

let count = 0;

// Add Student
addBtn.addEventListener("click", function () {

    const name = document.getElementById("name").value.trim();
    const roll = document.getElementById("roll").value.trim();
    const course = document.getElementById("course").value.trim();
    const marks = document.getElementById("marks").value.trim();

    if (name === "" || roll === "" || course === "" || marks === "") {
        alert("Please fill all fields");
        return;
    }

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${name}</td>
        <td>${roll}</td>
        <td>${course}</td>
        <td>${marks}</td>
        <td>
            <button class="delete-btn">Delete</button>
        </td>
    `;

    studentList.appendChild(row);

    count++;
    totalStudents.innerText = count;

    // Clear input fields
    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("course").value = "";
    document.getElementById("marks").value = "";

    // Delete Student
    row.querySelector(".delete-btn").addEventListener("click", function () {
        row.remove();
        count--;
        totalStudents.innerText = count;
    });

});

// Search Student
search.addEventListener("keyup", function () {

    const value = search.value.toLowerCase();

    const rows = studentList.getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {

        const text = rows[i].innerText.toLowerCase();

        if (text.includes(value)) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }

});