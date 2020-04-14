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
// function Controller(view, model) {
//     this.model = model;
//     this.view = view;
// }

// module.exports = Controller;

// function Model() {
    
// }

// module.exports = Model;





// function View() {
// }

// module.exports = View;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIiwianMvQ29udHJvbGxlci5qcyIsImpzL01vZGVsLmpzIiwianMvVmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiNyb290Jyk7XG5cbmNvbnN0IGNvbnRhaW5lcl9maXJzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29udGFpbmVyX2ZpcnN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdjb250YWluZXJfZmlyc3QnKTtcbnJvb3QuYXBwZW5kQ2hpbGQoY29udGFpbmVyX2ZpcnN0KTtcblxuY29uc3QgY29udGFpbmVyX2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuY29udGFpbmVyX2lucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCdjb250YWluZXJfaW5wdXQnKTtcbmNvbnRhaW5lcl9maXJzdC5hcHBlbmRDaGlsZChjb250YWluZXJfaW5wdXQpO1xuXG5jb25zdCBmaW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5maW5kLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdmaW5kJyk7XG5maW5kLnNldEF0dHJpYnV0ZSgndGl0bGUnLCfRgNC10LPQuNGB0YLRgNCw0YbQuNGPJyk7XG5maW5kLmlubmVySFRNTCA9ICdJbnB1dCB5b3VyIGRhdGEnO1xuY29udGFpbmVyX2lucHV0LmFwcGVuZENoaWxkKGZpbmQpO1xuXG5jb25zdCBsYWJlbF9uYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbmxhYmVsX25hbWUuc2V0QXR0cmlidXRlKCdmb3InLCduYW1lJyk7XG5sYWJlbF9uYW1lLmlubmVySFRNTCA9ICdOYW1lIDxzcGFuPio8c3Bhbj4nO1xuY29udGFpbmVyX2lucHV0LmFwcGVuZENoaWxkKGxhYmVsX25hbWUpO1xuXG5jb25zdCBpbnB1dF9uYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbmlucHV0X25hbWUuc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpO1xuaW5wdXRfbmFtZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCduYW1lJyk7XG5pbnB1dF9uYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCduYW1lJyk7XG5pbnB1dF9uYW1lLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCdFbnRlciB5b3VyIG5hbWU6Jyk7XG5jb250YWluZXJfaW5wdXQuYXBwZW5kQ2hpbGQoaW5wdXRfbmFtZSk7XG5cbmNvbnN0IGxhYmVsX3N1cm5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xubGFiZWxfc3VybmFtZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ3N1cm5hbWUnKTtcbmxhYmVsX3N1cm5hbWUuaW5uZXJIVE1MID0gJ1N1cm5hbWUgPHNwYW4+KjxzcGFuPic7XG5jb250YWluZXJfaW5wdXQuYXBwZW5kQ2hpbGQobGFiZWxfc3VybmFtZSk7XG5cbmNvbnN0IGlucHV0X3N1cm5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuaW5wdXRfc3VybmFtZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCd0ZXh0Jyk7XG5pbnB1dF9zdXJuYW1lLnNldEF0dHJpYnV0ZSgnc3VybmFtZScsJ3N1cm5hbWUnKTtcbmlucHV0X3N1cm5hbWUuc2V0QXR0cmlidXRlKCdpZCcsJ3N1cm5hbWUnKTtcbmlucHV0X3N1cm5hbWUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsJ0VudGVyIHlvdXIgc3VybmFtZTonKTtcbmNvbnRhaW5lcl9pbnB1dC5hcHBlbmRDaGlsZChpbnB1dF9zdXJuYW1lKTtcblxuY29uc3QgbGFiZWxfYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbmxhYmVsX2FnZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ2FnZScpO1xubGFiZWxfYWdlLmlubmVySFRNTCA9ICdBZ2UgPHNwYW4+KjxzcGFuPic7XG5jb250YWluZXJfaW5wdXQuYXBwZW5kQ2hpbGQobGFiZWxfYWdlKTtcblxuY29uc3QgaW5wdXRfYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbmlucHV0X2FnZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdudW1iZXInKTtcbmlucHV0X2FnZS5zZXRBdHRyaWJ1dGUoJ21pbicsJzEnKTtcbmlucHV0X2FnZS5zZXRBdHRyaWJ1dGUoJ21heCcsJzEwMCcpO1xuaW5wdXRfYWdlLnNldEF0dHJpYnV0ZSgnbmFtZScsJ2FnZScpO1xuaW5wdXRfYWdlLnNldEF0dHJpYnV0ZSgnaWQnLCdhZ2UnKTtcbmlucHV0X2FnZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywnYWdlOicpO1xuY29udGFpbmVyX2lucHV0LmFwcGVuZENoaWxkKGlucHV0X2FnZSk7XG5cbmNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuYnV0dG9uLnNldEF0dHJpYnV0ZSgnb25jbGljaycsICdzZW5kTmFtZSgpJylcbmJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywnbWVzc19zZW5kJyk7XG5idXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsJ2J0bicpO1xuYnV0dG9uLmlubmVySFRNTCA9ICdTdWJtaXQnO1xuY29udGFpbmVyX2lucHV0LmFwcGVuZENoaWxkKGJ1dHRvbilcblxuY29uc3QgZm9ybVRhZ18xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuZm9ybVRhZ18xLnNldEF0dHJpYnV0ZSgnaWQnLCdjb250YWluZXJfaW5wdXQnKVxuY29udGFpbmVyX2ZpcnN0LmFwcGVuZENoaWxkKGZvcm1UYWdfMSk7XG5cbmNvbnN0IGZpbmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmZpbmREaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmaW5kJyk7XG5maW5kRGl2LnRleHRDb250ZW50ID0gJ0xpc3Qgb2YgbmFtZXMnO1xuZmluZERpdi50aXRsZSA9ICfQstGLINC80L7QttC10YLQtSDQvdCw0LnRgtC4INGC0YPRgiDRgdCy0L7RjiDQuNC80Y8nO1xuZm9ybVRhZ18xLmFwcGVuZENoaWxkKGZpbmREaXYpO1xuXG5jb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG50ZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lc3NhZ2UnKTtcbnRleHRhcmVhLnNldEF0dHJpYnV0ZSgnbmFtZScsICdtZXNzYWdlJylcbnRleHRhcmVhLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCdOYW1lIFN1cm5hbWUgQWdlJyk7XG50ZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJ3JlYWRvbmx5Jyk7XG5mb3JtVGFnXzEuYXBwZW5kQ2hpbGQodGV4dGFyZWEpO1xuLy8zXG5jb25zdCBkaXZfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZGl2XzEuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb250YWluZXItc2Vjb25kJyk7XG5yb290LmFwcGVuZENoaWxkKGRpdl8xKTtcblxuY29uc3QgZm9ybVRhZ18yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuZm9ybVRhZ18yLnNldEF0dHJpYnV0ZSgnaWQnLCdjb250YWluZXJfaW5wdXQnKTtcbmRpdl8xLmFwcGVuZENoaWxkKGZvcm1UYWdfMik7XG5cbmNvbnN0IFJlZ0Rpdl8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5SZWdEaXZfMS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZpbmQnKTtcblJlZ0Rpdl8xLnRpdGxlID0gJ9C90LDQudC00LjRgtC1INGB0LLQvtC1INC40LzRjyc7XG5SZWdEaXZfMS50ZXh0Q29udGVudCA9ICdTZWFyY2hpbmcgISc7XG5mb3JtVGFnXzIuYXBwZW5kQ2hpbGQoUmVnRGl2XzEpO1xuXG5jb25zdCBsZWJlbF8zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbmxlYmVsXzMuc2V0QXR0cmlidXRlKCdmb3InLCAnbm5hbWUnKTtcbmxlYmVsXzMuaW5uZXJIVE1MID0gJ05hbWUgPHNwYW4+Kjwvc3Bhbj4nO1xuZm9ybVRhZ18yLmFwcGVuZENoaWxkKGxlYmVsXzMpO1xuXG5jb25zdCBpbnB1dF8zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbmlucHV0XzMuc2V0QXR0cmlidXRlKCdpZCcsICdubmFtZScpO1xuaW5wdXRfMy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuaW5wdXRfMy5wbGFjZWhvbGRlciA9ICdFbnRlciB5b3VyIG5hbWU6JztcbmZvcm1UYWdfMi5hcHBlbmRDaGlsZChpbnB1dF8zKTtcblxuY29uc3QgbGViZWxfNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5sZWJlbF80LnNldEF0dHJpYnV0ZSgnZm9yJywgJ3NzdXJuYW1lJyk7XG5sZWJlbF80LmlubmVySFRNTCA9ICdTdXJuYW1lIDxzcGFuPio8L3NwYW4+JztcbmZvcm1UYWdfMi5hcHBlbmRDaGlsZChsZWJlbF80KTtcblxuY29uc3QgaW5wdXRfNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5pbnB1dF80LnNldEF0dHJpYnV0ZSgnaWQnLCAnc3N1cm5hbWUnKTtcbmlucHV0XzQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbmlucHV0XzQucGxhY2Vob2xkZXIgPSAnRW50ZXIgeW91ciBhZ2U6JztcbmZvcm1UYWdfMi5hcHBlbmRDaGlsZChpbnB1dF80KTtcblxuY29uc3QgbGViZWxfNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5sZWJlbF81LnNldEF0dHJpYnV0ZSgnZm9yJywgJ2FhZ2UnKTtcbmxlYmVsXzUuaW5uZXJIVE1MID0gJ0FnZSA8c3Bhbj4qPC9zcGFuPic7XG5mb3JtVGFnXzIuYXBwZW5kQ2hpbGQobGViZWxfNSk7XG5cbmNvbnN0IGlucHV0XzUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuaW5wdXRfNS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FhZ2UnKTtcbmlucHV0XzUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ251bWJlcicpO1xuaW5wdXRfNS5wbGFjZWhvbGRlciA9ICdhZ2U6JztcbmlucHV0XzUubWluID0gJzEnO1xuaW5wdXRfNS5tYXggPSAnMTAwJztcbmZvcm1UYWdfMi5hcHBlbmRDaGlsZChpbnB1dF81KTtcblxuY29uc3QgYnRuRGl2XzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmJ0bkRpdl8xLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYnRuJyk7XG5idG5EaXZfMS50ZXh0Q29udGVudCA9ICdGaW5kJztcbmZvcm1UYWdfMi5hcHBlbmRDaGlsZChidG5EaXZfMSk7XG5cbmNvbnN0IGZvcm1UYWdfMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbmZvcm1UYWdfMy5zZXRBdHRyaWJ1dGUoJ2lkJywnY29udGFpbmVyX2lucHV0JylcbmRpdl8xLmFwcGVuZENoaWxkKGZvcm1UYWdfMyk7XG5cbmNvbnN0IGZpbmREaXZfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZmluZERpdl8xLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmluZCcpO1xuZmluZERpdl8xLnRpdGxlID0gJ1Jlc3VsdCc7XG5maW5kRGl2XzEudGV4dENvbnRlbnQgPSAnUmVzdWx0JztcbmZvcm1UYWdfMy5hcHBlbmRDaGlsZChmaW5kRGl2XzEpO1xuXG5jb25zdCB0ZXh0YXJlYV8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbnRleHRhcmVhXzEuc2V0QXR0cmlidXRlKCdpZCcsICdtZXNzYWdlJyk7XG50ZXh0YXJlYV8xLnNldEF0dHJpYnV0ZSgnbmFtZScsICdtZXNzYWdlJyk7XG50ZXh0YXJlYV8xLnNldEF0dHJpYnV0ZSAoJ3BsYWNlaG9sZGVyJywnTmFtZSBTdXJuYW1lIHRydWUvZmFsc2UnKSA7XG50ZXh0YXJlYV8xLnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAncmVhZG9ubHknKTtcbmZvcm1UYWdfMy5hcHBlbmRDaGlsZCh0ZXh0YXJlYV8xKTtcblxuXG5cbmZ1bmN0aW9uIHNlbmROYW1lKCkge1xuICAgIGxldCBwZW9wbGUgPSBbXTtcbiAgICBsZXQgTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJykudmFsdWU7XG4gICAgbGV0IFN1cm5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VybmFtZScpLnZhbHVlO1xuICAgIGxldCBBZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWdlJykudmFsdWU7XG4gICAgXG4gICAgbGV0IGxpc3QgPSB7XG4gICAgICAgIG5hbWU6IE5hbWUsXG4gICAgICAgIHN1cm5hbWU6IFN1cm5hbWUsXG4gICAgICAgIGFnZTogQWdlLCBcbiAgICB9XG5cbiAgICBwZW9wbGUudW5zaGlmdChsaXN0KTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBlb3BsZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgb2xkbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXNzYWdlJyk7XG4gICAgICAgIFxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGVvcGxlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgbmV3bGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXNzYWdlJykuaW5uZXJIVE1MO1xuICAgICAgICAgICAgbmV3bGlzdCA9ICBuZXdsaXN0ICsgcGVvcGxlW2ldLm5hbWUgKyBcIiBcIiArIHBlb3BsZVtpXS5zdXJuYW1lICArIFwiIFwiICsgIHBlb3BsZVtpXS5hZ2UgKyAnXFxuJztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgb2xkbGlzdC5pbm5lckhUTUwgPSAgbmV3bGlzdDtcbiAgICB9XG59XG5cblxuXG5cblxuXG5cbi8vIGNvbnN0IE1vZGVsID0gcmVxdWlyZSgnLi9qcy9Nb2RlbC5qcycpO1xuLy8gY29uc3QgVmlldyA9IHJlcXVpcmUoJy4vanMvVmlldy5qcycpO1xuLy8gY29uc3QgQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vanMvQ29udHJvbGxlci5qcycpO1xuXG4vLyBmdW5jdGlvbiBpbml0UHJvamVjdCgpIHtcbi8vICAgICBjb25zdCBtb2RlbCA9IG5ldyBNb2RlbCgpO1xuLy8gICAgIGNvbnN0IHZpZXcgPSBuZXcgVmlldygpO1xuLy8gICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlcihtb2RlbCwgdmlldyk7XG4vLyB9XG4vLyBDb250cm9sbGVyLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKGNvbnRyb2xsZXIpIHtcbi8vICAgICB0aGlzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyXG4vLyB9XG4vLyBpbml0KGNvbnRyb2xsZXIpXG5cbi8vIGluaXRQcm9qZWN0KCk7IiwiLy8gZnVuY3Rpb24gQ29udHJvbGxlcih2aWV3LCBtb2RlbCkge1xuLy8gICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbi8vICAgICB0aGlzLnZpZXcgPSB2aWV3O1xuLy8gfVxuXG4vLyBtb2R1bGUuZXhwb3J0cyA9IENvbnRyb2xsZXI7XG4iLCIvLyBmdW5jdGlvbiBNb2RlbCgpIHtcbiAgICBcbi8vIH1cblxuLy8gbW9kdWxlLmV4cG9ydHMgPSBNb2RlbDsiLCJcblxuXG5cblxuLy8gZnVuY3Rpb24gVmlldygpIHtcbi8vIH1cblxuLy8gbW9kdWxlLmV4cG9ydHMgPSBWaWV3OyJdfQ==