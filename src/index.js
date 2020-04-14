const root = document.querySelector('div#root');

const container_first = document.createElement('div');
container_first.setAttribute('class','container_first');
root.appendChild(container_first);

const container_input = document.createElement('form');
container_input.setAttribute('id','container_input');
container_first.appendChild(container_input);

const find = document.createElement('div');
find.setAttribute('class','find');
find.setAttribute('title','регистрация');
find.innerHTML = 'Input your data';
container_input.appendChild(find);

const label_name = document.createElement('label');
label_name.setAttribute('for','name');
label_name.innerHTML = 'Name <span>*<span>';
container_input.appendChild(label_name);

const input_name = document.createElement('input');
input_name.setAttribute('type','text');
input_name.setAttribute('name','name');
input_name.setAttribute('id','name');
input_name.setAttribute('placeholder','Enter your name:');
container_input.appendChild(input_name);

const label_surname = document.createElement('label');
label_surname.setAttribute('for','surname');
label_surname.innerHTML = 'Surname <span>*<span>';
container_input.appendChild(label_surname);

const input_surname = document.createElement('input');
input_surname.setAttribute('type','text');
input_surname.setAttribute('surname','surname');
input_surname.setAttribute('id','surname');
input_surname.setAttribute('placeholder','Enter your surname:');
container_input.appendChild(input_surname);

const label_age = document.createElement('label');
label_age.setAttribute('for','age');
label_age.innerHTML = 'Age <span>*<span>';
container_input.appendChild(label_age);

const input_age = document.createElement('input');
input_age.setAttribute('type','number');
input_age.setAttribute('min','1');
input_age.setAttribute('max','100');
input_age.setAttribute('name','age');
input_age.setAttribute('id','age');
input_age.setAttribute('placeholder','age:');
container_input.appendChild(input_age);

const button = document.createElement('div');
button.setAttribute('onclick', 'sendName()')
button.setAttribute('id','mess_send');
button.setAttribute('class','btn');
button.innerHTML = 'Submit';
container_input.appendChild(button)

const formTag_1 = document.createElement('form');
formTag_1.setAttribute('id','container_input')
container_first.appendChild(formTag_1);

const findDiv = document.createElement('div');
findDiv.setAttribute('class', 'find');
findDiv.textContent = 'List of names';
findDiv.title = 'вы можете найти тут свою имя';
formTag_1.appendChild(findDiv);

const textarea = document.createElement('textarea');
textarea.setAttribute('id', 'message');
textarea.setAttribute('name', 'message')
textarea.setAttribute('placeholder','Name Surname Age');
textarea.setAttribute('readonly', 'readonly');
formTag_1.appendChild(textarea);
//3
const div_1 = document.createElement('div');
div_1.setAttribute('class', 'container-second');
root.appendChild(div_1);

const formTag_2 = document.createElement('form');
formTag_2.setAttribute('id','container_input');
div_1.appendChild(formTag_2);

const RegDiv_1 = document.createElement('div');
RegDiv_1.setAttribute('class', 'find');
RegDiv_1.title = 'найдите свое имя';
RegDiv_1.textContent = 'Searching !';
formTag_2.appendChild(RegDiv_1);

const lebel_3 = document.createElement('label');
lebel_3.setAttribute('for', 'nname');
lebel_3.innerHTML = 'Name <span>*</span>';
formTag_2.appendChild(lebel_3);

const input_3 = document.createElement('input');
input_3.setAttribute('id', 'nname');
input_3.setAttribute('type', 'text');
input_3.placeholder = 'Enter your name:';
formTag_2.appendChild(input_3);

const lebel_4 = document.createElement('label');
lebel_4.setAttribute('for', 'ssurname');
lebel_4.innerHTML = 'Surname <span>*</span>';
formTag_2.appendChild(lebel_4);

const input_4 = document.createElement('input');
input_4.setAttribute('id', 'ssurname');
input_4.setAttribute('type', 'text');
input_4.placeholder = 'Enter your age:';
formTag_2.appendChild(input_4);

const lebel_5 = document.createElement('label');
lebel_5.setAttribute('for', 'aage');
lebel_5.innerHTML = 'Age <span>*</span>';
formTag_2.appendChild(lebel_5);

const input_5 = document.createElement('input');
input_5.setAttribute('id', 'aage');
input_5.setAttribute('type', 'number');
input_5.placeholder = 'age:';
input_5.min = '1';
input_5.max = '100';
formTag_2.appendChild(input_5);

const btnDiv_1 = document.createElement('div');
btnDiv_1.setAttribute('class', 'btn');
btnDiv_1.textContent = 'Find';
formTag_2.appendChild(btnDiv_1);

const formTag_3 = document.createElement('form');
formTag_3.setAttribute('id','container_input')
div_1.appendChild(formTag_3);

const findDiv_1 = document.createElement('div');
findDiv_1.setAttribute('class', 'find');
findDiv_1.title = 'Result';
findDiv_1.textContent = 'Result';
formTag_3.appendChild(findDiv_1);

const textarea_1 = document.createElement('textarea');
textarea_1.setAttribute('id', 'message');
textarea_1.setAttribute('name', 'message');
textarea_1.setAttribute ('placeholder','Name Surname true/false') ;
textarea_1.setAttribute('readonly', 'readonly');
formTag_3.appendChild(textarea_1);



function sendName() {
    let people = [];
    let Name = document.getElementById('name').value;
    let Surname = document.getElementById('surname').value;
    let Age = document.getElementById('age').value;
    
    let list = {
        name: Name,
        surname: Surname,
        age: Age, 
    }

    people.unshift(list);
    
    for (let i = 0; i < people.length; i++) {
        let oldlist = document.getElementById('message');
        
        for (i = 0; i < people.length; i++) {
            var newlist = document.getElementById('message').innerHTML;
            newlist =  newlist + people[i].name + " " + people[i].surname  + " " +  people[i].age + '\n';
        }
        
        oldlist.innerHTML =  newlist;
    }
}







// const Model = require('./js/Model.js');
// const View = require('./js/View.js');
// const Controller = require('./js/Controller.js');

// function initProject() {
//     const model = new Model();
//     const view = new View();
//     const controller = new Controller(model, view);
// }
// Controller.prototype.init = function (controller) {
//     this.controller = controller
// }
// init(controller)

// initProject();