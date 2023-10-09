const todolist = [{
    name: 'prem', date: '20-12-2020'}, {
    name: 'raja', date:'29-03-22'}];

save();

function save() {
    let todoHtml = '';
    for(let i = 0; i < todolist.length; i++){
        const todoObject = todolist[i];
        // const name = todoObject.name;
        // const date = todoObject.date;

        const {name, date} = todoObject;

        const html = `
        <div>${name}</div>
        <div>${date}</div>
        <button class="del-btn" onclick="
        todolist.splice(${i}, 1);
        save();
        
        savetoStorage();
        ">Delete</button>
        `;
        todoHtml += html;
    }
    document.querySelector('.t-l')
    .innerHTML = todoHtml;
    }

function addTodo() {
    const inputElem = document.querySelector('.input');
    const name = inputElem.value;
    const dateElem = document.querySelector('.date');
    const date = dateElem.value;

    todolist.push({
        // name: name,
        // date: date
        name,
        date
    });
    inputElem.value = '';
    save();
    savetoStorage();
}
function savetoStorage(){
    localStorage.setItem('todolist', JSON.stringify(todolist));
}