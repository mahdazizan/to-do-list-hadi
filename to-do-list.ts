const app = document.getElementById('app');

const form = document.createElement("form");
const input = document.createElement("input");
input.placeholder = "please add your task";

const submit = createButton('Add ToDo');

form.append(input);
form.append(submit);

app.append(form);

const ul = document.createElement("ul");
app.append(ul);

function createButton(str : string) {
    const button = document.createElement('button');
    const buttonText = document.createTextNode(str);
    button.append(buttonText);
    return button;   
}

function addTodo(todo: string){
    const li = document.createElement("li");
    const text = document.createTextNode(todo);
    li.append(text);
    li.style.cursor = 'pointer';
    li.addEventListener("click" , (Event) => {
       li.style.textDecoration = li.style.textDecoration === "line-through"?"none" : "line-through"; 
    })
    ul.append(li);
}


form.addEventListener('submit' , (Event) => {
    Event.preventDefault();
    const value = input.value;
    

    addTodo(input.value);
    input.value = '';
});

const filterContainer = document.createElement('div');



const steSelectedButton = (button : HTMLButtonElement) => {
    button.style.backgroundColor = 'white';
    button.style.border = 'none';
}
const steNotSelectedButton = (button : HTMLButtonElement) => {
    button.style.backgroundColor = 'grey';
    button.style.border = '1px solid black';
}

const todoButton = createButton('Todo');
const allButton = createButton('All');
const doneButton = createButton('Done');

todoButton.addEventListener('click' , () => {
    steSelectedButton (todoButton);
    steNotSelectedButton (allButton);
    steNotSelectedButton (doneButton);
    [...ul.children].forEach((x: HTMLLIElement) => {
        if(x.style.textDecoration = 'line-through'){
            x.style.display = 'none';
        }
        else{
            x.style.display = 'list-item';
        }
    });
});

doneButton.addEventListener('click' , () => {
    steSelectedButton (doneButton);
    steNotSelectedButton (allButton);
    steNotSelectedButton (todoButton);
    [...ul.children].forEach((x: HTMLLIElement) => {
        if(x.style.textDecoration !== 'line-through'){
            x.style.display = 'none';
        }
        else{
            x.style.display = 'list-item';
        }
    });
});

allButton.addEventListener('click' , () => {
    steSelectedButton (allButton);
    steNotSelectedButton (doneButton);
    steNotSelectedButton (todoButton);
    [...ul.children].forEach((x: HTMLLIElement) => {
        x.style.display = 'block';
    });
});
steSelectedButton (allButton);
steNotSelectedButton (doneButton);
steNotSelectedButton (todoButton);

filterContainer.append(allButton);
filterContainer.append(todoButton);
filterContainer.append(doneButton);


filterContainer.append(todoButton);
app.append(filterContainer);