"use strict";
const allFiles = [
    "first.js",
    "second.css",
    "third.html",
    "fourth.php",
    "fifth.js",
    "sixth.css"
];
let html = document.querySelector("#html");
let css = document.querySelector("#css");
let js = document.querySelector("#js");
let php = document.querySelector("#php");
let fileDropdown = document.querySelector("#file-dropdown");
function updateFileList() {
    fileDropdown.innerHTML = "";
    fileDropdown.innerHTML = '<option value="" disabled selected>The list of files</option>';
    const excludedExtensions = [];
    if (html.checked)
        excludedExtensions.push("html");
    if (css.checked)
        excludedExtensions.push("css");
    if (js.checked)
        excludedExtensions.push("js");
    if (php.checked)
        excludedExtensions.push("php");
    let filesToShow = allFiles;
    if (excludedExtensions.length > 0) {
        filesToShow = filesToShow.filter(file => {
            const fileExtenstion = file.split('.').pop();
            return fileExtenstion && !excludedExtensions.includes(fileExtenstion);
        });
    }
    filesToShow.forEach(file => {
        fileDropdown.innerHTML += `<option value="${file}">${file}</option>`;
    });
}
html.addEventListener("change", updateFileList);
css.addEventListener("change", updateFileList);
js.addEventListener("change", updateFileList);
php.addEventListener("change", updateFileList);
updateFileList();
