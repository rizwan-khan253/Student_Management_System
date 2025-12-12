const items = document.querySelectorAll(".classItem");
const sections = document.querySelectorAll(".section");
const title = document.getElementById("courseTitle");

document.getElementById("class1").style.display = "block";
title.textContent = "Class 1 Course";

items.forEach(item => {
  item.addEventListener("click", () => {

    sections.forEach(section => section.style.display = "none");
    const id = item.getAttribute("data-target");
    document.getElementById(id).style.display = "block";
    title.textContent = item.textContent + " Course";
  });
});
