const tbody = document.getElementById("allData");
const searchInput = document.querySelector(".searchInput");
const searchBtn = document.querySelector(".search-btn");
const msg = document.querySelector(".msg");

// Load students
function loadAllStudents(filter = "") {
    const students = JSON.parse(localStorage.getItem("students")) || [];
    let table = "";
    students.forEach((stu, i) => {
        if (filter && !stu.name.toLowerCase().includes(filter.toLowerCase()) && !stu.roll.includes(filter)) return;
        table += `
        <tr>
            <td>${stu.name}</td>
            <td>${stu.father}</td>
            <td>${stu.roll}</td>
            <td>${stu.class}</td>
            <td>${stu.email}</td>
            <td>${stu.subject}</td>
            <td>${stu.gender}</td>
            <td><button onclick="editStudent(${i})">🔄</button></td>
            <td><button onclick="deleteStudent(${i})">❌</button></td>
        </tr>`;
    });
    tbody.innerHTML = table;
}

// Edit student
function editStudent(i) {
    localStorage.setItem("editIndex", i);
    window.location.href = "NewAddMission.html";
}

// Delete student
function deleteStudent(i) {
    const students = JSON.parse(localStorage.getItem("students")) || [];
    if (!confirm("Are you sure you want to delete this record?")) return;
    students.splice(i, 1);
    localStorage.setItem("students", JSON.stringify(students));
    msg.style.color = "green";
    msg.textContent = "Record deleted successfully!";
    loadAllStudents();
}

// Search
searchBtn.addEventListener("click", () => loadAllStudents(searchInput.value.trim()));
searchInput.addEventListener("keyup", e => { if (e.key === "Enter") loadAllStudents(searchInput.value.trim()); });

// Initial load
window.onload = () => loadAllStudents();
