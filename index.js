const submit = document.getElementById("submit");
const addItem = document.getElementById("addItem");
const todoForm = document.getElementById("todoForm");
const listParents = document.getElementById("listParents");
const todoParagraph = document.getElementById("todoP");

function clickHandler(event) {
  event.preventDefault();
  const itemText = addItem.value;
  if (itemText !== "") {
    createItem(itemText);
    addItem.value = "";
    updateTodoParagraph();
    addItem.placeholder = "Was möchtest du hinzufügen?";
  } else {
    addItem.placeholder = "Bitte etwas eingeben!";
  }
}

function createItem(input) {
  const newItem = document.createElement("li");
  newItem.classList.add("itemOnList");
  const newCheckbox = document.createElement("input");
  newCheckbox.classList.add("checkboxes");
  newCheckbox.type = "checkbox";
  const textNode = document.createTextNode(input);
  newItem.appendChild(newCheckbox);
  newItem.appendChild(textNode);
  listParents.appendChild(newItem);
}

todoForm.addEventListener("submit", clickHandler);

listParents.addEventListener("change", function (event) {
  const targetCheckbox = event.target;
  if (
    targetCheckbox.classList.contains("checkboxes") &&
    targetCheckbox.checked
  ) {
    const listItem = targetCheckbox.closest("li");
    if (listItem) {
      targetCheckbox.disabled = true;
      listItem.style.textDecoration = "line-through";
      setTimeout(() => {
        listItem.remove();
        updateTodoParagraph();
      }, 500);
    }
  }
});

function updateTodoParagraph() {
  if (listParents.children.length === 0) {
    todoParagraph.textContent = "Hurra! Du hast aktuell nichts mehr zu tun!";
  } else {
    todoParagraph.textContent = "Was hast du noch alles zu tun?";
  }
}
