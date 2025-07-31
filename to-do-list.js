var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var app = document.getElementById('app');
var form = document.createElement("form");
var input = document.createElement("input");
input.placeholder = "please add your task";
var submit = createButton('Add ToDo');
form.append(input);
form.append(submit);
app.append(form);
var ul = document.createElement("ul");
app.append(ul);
function createButton(str) {
    var button = document.createElement('button');
    var buttonText = document.createTextNode(str);
    button.append(buttonText);
    return button;
}
function addTodo(todo) {
    var li = document.createElement("li");
    var text = document.createTextNode(todo);
    li.append(text);
    li.style.cursor = 'pointer';
    li.addEventListener("click", function (Event) {
        li.style.textDecoration = li.style.textDecoration === "line-through" ? "none" : "line-through";
    });
    ul.append(li);
}
form.addEventListener('submit', function (Event) {
    Event.preventDefault();
    var value = input.value;
    addTodo(input.value);
    input.value = '';
});
var filterContainer = document.createElement('div');
var steSelectedButton = function (button) {
    button.style.backgroundColor = 'white';
    button.style.border = 'none';
};
var steNotSelectedButton = function (button) {
    button.style.backgroundColor = 'grey';
    button.style.border = '1px solid black';
};
var todoButton = createButton('Todo');
var allButton = createButton('All');
var doneButton = createButton('Done');
todoButton.addEventListener('click', function () {
    steSelectedButton(todoButton);
    steNotSelectedButton(allButton);
    steNotSelectedButton(doneButton);
    __spreadArray([], ul.children, true).forEach(function (x) {
        if (x.style.textDecoration = 'line-through') {
            x.style.display = 'none';
        }
        else {
            x.style.display = 'block';
        }
    });
});
doneButton.addEventListener('click', function () {
    steSelectedButton(doneButton);
    steNotSelectedButton(allButton);
    steNotSelectedButton(todoButton);
    __spreadArray([], ul.children, true).forEach(function (x) {
        if (x.style.textDecoration !== 'line-through') {
            x.style.display = 'none';
        }
        else {
            x.style.display = 'block';
        }
    });
});
allButton.addEventListener('click', function () {
    steSelectedButton(allButton);
    steNotSelectedButton(doneButton);
    steNotSelectedButton(todoButton);
    __spreadArray([], ul.children, true).forEach(function (x) {
        x.style.display = 'block';
    });
});
steSelectedButton(allButton);
steNotSelectedButton(doneButton);
steNotSelectedButton(todoButton);
filterContainer.append(allButton);
filterContainer.append(todoButton);
filterContainer.append(doneButton);
filterContainer.append(todoButton);
app.append(filterContainer);
