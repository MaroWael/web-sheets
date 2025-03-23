"use strict";
const btn = document.querySelector("input[type='button']");
const outputTextarea = document.getElementById("output");
let arr = [];
btn.addEventListener('click', () => {
    const sortingSelect = document.getElementById("sorting");
    const nameInput = document.getElementById("name");
    const ageInput = document.getElementById("age");
    const gpaInput = document.getElementById("gpa");
    const obj = {
        name: nameInput.value.trim() || "Unknown",
        age: Number(ageInput.value) || 0,
        gpa: Number(gpaInput.value) || 0
    };
    arr.push(obj);
    outputTextarea.value = "";
    if (sortingSelect.value === 'gpa_asc') {
        arr.sort((a, b) => a.gpa - b.gpa);
    }
    else if (sortingSelect.value === 'name_desc') {
        arr.sort((a, b) => b.name.localeCompare(a.name)); // Sort names in descending order
    }
    let alerts = 0;
    arr.forEach(e => { if (e.gpa < 2)
        ++alerts; });
    if (alerts >= 3)
        alert("WTF!!!");
    arr.forEach(item => {
        outputTextarea.value +=
            `Name: ${item.name}
Age: ${item.age}
GPA: ${item.gpa}
------------------------------
`;
    });
});
