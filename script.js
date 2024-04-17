var tagNameInput = document.getElementById("TagName");
var classNameInput = document.getElementById("ClassName");
var idInput = document.getElementById("ID");
var nameInput = document.getElementById("Name");

function showResult() {
  var tagsNum = document.getElementsByTagName(tagNameInput.value).length;
  var classNum = document.getElementsByClassName(classNameInput.value).length;
  var idIs = document.getElementById(idInput.value) != null ? "true" : "false";
  var nameNum = document.getElementsByName(nameInput.value);

  document.querySelector(
    ".res"
  ).textContent = `${tagNameInput.value}: ${tagsNum}, class: ${classNum}, id: ${idIs}, Name: ${nameNum}`;
}
