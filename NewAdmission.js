const emailInput = document.querySelector(".Email");
const studentNameInput = document.querySelector(".StudentName");
const fatherNameInput = document.querySelector(".FatherName");
const rollNoInput = document.querySelector(".RollNO");
const subjectInput = document.querySelector(".Subject");
const classSelect = document.querySelector(".Class");
const btnSubmit = document.querySelector(".submit");
const message = document.querySelector(".msg");
const form = document.querySelector(".glass-form");

// Load data if editing
window.onload = function () {
    const index = localStorage.getItem("editIndex");
    if (index !== null) {
        const data = JSON.parse(localStorage.getItem("students")) || [];
        const stu = data[parseInt(index)];
        studentNameInput.value = stu.name;
        fatherNameInput.value = stu.father;
        rollNoInput.value = stu.roll;
        classSelect.value = stu.class;
        emailInput.value = stu.email;
        subjectInput.value = stu.subject;
        if (stu.gender) {
            document.querySelector(`input[name='g'][value='${stu.gender}']`).checked = true;
        }
    }
};

// Form submit
btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    const stuName = studentNameInput.value.trim();
    const fatherName = fatherNameInput.value.trim();
    const roll = rollNoInput.value.trim();
    const cls = classSelect.value;
    const email = emailInput.value.trim();
    const subject = subjectInput.value.trim();
    const gender = document.querySelector("input[name='g']:checked")?.value;

    if (!stuName || !fatherName || !roll || !cls || !email || !subject || !gender) {
        message.style.color = "red";
        message.textContent = "Please fill all fields!";
        return;
    }
    if (stuName === fatherName) {
        message.style.color = "red";
        message.textContent = "Student Name and Father Name cannot be the same!";
        return;
    }

    const student = { name: stuName, father: fatherName, roll, class: cls, email, subject, gender };
    const data = JSON.parse(localStorage.getItem("students")) || [];
    const editIndex = localStorage.getItem("editIndex");

    if (editIndex !== null) {
        data[parseInt(editIndex)] = student;
        localStorage.removeItem("editIndex");
        alert("Record Updated Successfully");
    } else {
        data.push(student);
        alert("Saved Successfully");
    }

    localStorage.setItem("students", JSON.stringify(data));
    form.reset();
    message.style.color = "green";
    message.textContent = "Form submitted successfully!";
    setTimeout(() => { window.location.href = "SeeAllRecord.Html"; }, 800);
});
