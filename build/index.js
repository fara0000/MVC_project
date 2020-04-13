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
button.setAttribute('id','mess_send');
button.setAttribute('class','btn');
button.innerHTML = 'Submit';
container_input.appendChild(button)
//2
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
textarea.name = 'message';
textarea.placeholder = 'Name Surname Age';
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

//second-page_second-form-------------------------------
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
textarea_1.name = 'message';
textarea_1.placeholder = 'Name Surname true/false';
formTag_3.appendChild(textarea_1);

//---------------------------------------------------------
// function sendName() {
//     let sName = document.getElementById('name').value;  
//     let sSurname = document.getElementById('surname').value;
//     let sAge = document.getElementById('age').value;

//     let concatt = sName + ' ' + sSurname + ' ' + sAge ;
//     let oldValue = document.getElementById('message').value;
//     let newValue = concatt + oldValue;
//     document.getElementById('message').innerHTML = newValue;
// }











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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIiwianMvQ29udHJvbGxlci5qcyIsImpzL01vZGVsLmpzIiwianMvVmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2I3Jvb3QnKTtcblxuY29uc3QgY29udGFpbmVyX2ZpcnN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb250YWluZXJfZmlyc3Quc2V0QXR0cmlidXRlKCdjbGFzcycsJ2NvbnRhaW5lcl9maXJzdCcpO1xucm9vdC5hcHBlbmRDaGlsZChjb250YWluZXJfZmlyc3QpO1xuXG5jb25zdCBjb250YWluZXJfaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5jb250YWluZXJfaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ2NvbnRhaW5lcl9pbnB1dCcpO1xuY29udGFpbmVyX2ZpcnN0LmFwcGVuZENoaWxkKGNvbnRhaW5lcl9pbnB1dCk7XG5cbmNvbnN0IGZpbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmZpbmQuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2ZpbmQnKTtcbmZpbmQuc2V0QXR0cmlidXRlKCd0aXRsZScsJ9GA0LXQs9C40YHRgtGA0LDRhtC40Y8nKTtcbmZpbmQuaW5uZXJIVE1MID0gJ0lucHV0IHlvdXIgZGF0YSc7XG5jb250YWluZXJfaW5wdXQuYXBwZW5kQ2hpbGQoZmluZCk7XG5cbmNvbnN0IGxhYmVsX25hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xubGFiZWxfbmFtZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ25hbWUnKTtcbmxhYmVsX25hbWUuaW5uZXJIVE1MID0gJ05hbWUgPHNwYW4+KjxzcGFuPic7XG5jb250YWluZXJfaW5wdXQuYXBwZW5kQ2hpbGQobGFiZWxfbmFtZSk7XG5cbmNvbnN0IGlucHV0X25hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuaW5wdXRfbmFtZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCd0ZXh0Jyk7XG5pbnB1dF9uYW1lLnNldEF0dHJpYnV0ZSgnbmFtZScsJ25hbWUnKTtcbmlucHV0X25hbWUuc2V0QXR0cmlidXRlKCdpZCcsJ25hbWUnKTtcbmlucHV0X25hbWUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsJ0VudGVyIHlvdXIgbmFtZTonKTtcbmNvbnRhaW5lcl9pbnB1dC5hcHBlbmRDaGlsZChpbnB1dF9uYW1lKTtcblxuY29uc3QgbGFiZWxfc3VybmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5sYWJlbF9zdXJuYW1lLnNldEF0dHJpYnV0ZSgnZm9yJywnc3VybmFtZScpO1xubGFiZWxfc3VybmFtZS5pbm5lckhUTUwgPSAnU3VybmFtZSA8c3Bhbj4qPHNwYW4+JztcbmNvbnRhaW5lcl9pbnB1dC5hcHBlbmRDaGlsZChsYWJlbF9zdXJuYW1lKTtcblxuY29uc3QgaW5wdXRfc3VybmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5pbnB1dF9zdXJuYW1lLnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKTtcbmlucHV0X3N1cm5hbWUuc2V0QXR0cmlidXRlKCdzdXJuYW1lJywnc3VybmFtZScpO1xuaW5wdXRfc3VybmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywnc3VybmFtZScpO1xuaW5wdXRfc3VybmFtZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywnRW50ZXIgeW91ciBzdXJuYW1lOicpO1xuY29udGFpbmVyX2lucHV0LmFwcGVuZENoaWxkKGlucHV0X3N1cm5hbWUpO1xuXG5jb25zdCBsYWJlbF9hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xubGFiZWxfYWdlLnNldEF0dHJpYnV0ZSgnZm9yJywnYWdlJyk7XG5sYWJlbF9hZ2UuaW5uZXJIVE1MID0gJ0FnZSA8c3Bhbj4qPHNwYW4+JztcbmNvbnRhaW5lcl9pbnB1dC5hcHBlbmRDaGlsZChsYWJlbF9hZ2UpO1xuXG5jb25zdCBpbnB1dF9hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuaW5wdXRfYWdlLnNldEF0dHJpYnV0ZSgndHlwZScsJ251bWJlcicpO1xuaW5wdXRfYWdlLnNldEF0dHJpYnV0ZSgnbWluJywnMScpO1xuaW5wdXRfYWdlLnNldEF0dHJpYnV0ZSgnbWF4JywnMTAwJyk7XG5pbnB1dF9hZ2Uuc2V0QXR0cmlidXRlKCduYW1lJywnYWdlJyk7XG5pbnB1dF9hZ2Uuc2V0QXR0cmlidXRlKCdpZCcsJ2FnZScpO1xuaW5wdXRfYWdlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCdhZ2U6Jyk7XG5jb250YWluZXJfaW5wdXQuYXBwZW5kQ2hpbGQoaW5wdXRfYWdlKTtcblxuY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5idXR0b24uc2V0QXR0cmlidXRlKCdpZCcsJ21lc3Nfc2VuZCcpO1xuYnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdidG4nKTtcbmJ1dHRvbi5pbm5lckhUTUwgPSAnU3VibWl0JztcbmNvbnRhaW5lcl9pbnB1dC5hcHBlbmRDaGlsZChidXR0b24pXG4vLzJcbmNvbnN0IGZvcm1UYWdfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbmZvcm1UYWdfMS5zZXRBdHRyaWJ1dGUoJ2lkJywnY29udGFpbmVyX2lucHV0JylcbmNvbnRhaW5lcl9maXJzdC5hcHBlbmRDaGlsZChmb3JtVGFnXzEpO1xuXG5jb25zdCBmaW5kRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5maW5kRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmluZCcpO1xuZmluZERpdi50ZXh0Q29udGVudCA9ICdMaXN0IG9mIG5hbWVzJztcbmZpbmREaXYudGl0bGUgPSAn0LLRiyDQvNC+0LbQtdGC0LUg0L3QsNC50YLQuCDRgtGD0YIg0YHQstC+0Y4g0LjQvNGPJztcbmZvcm1UYWdfMS5hcHBlbmRDaGlsZChmaW5kRGl2KTtcblxuY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xudGV4dGFyZWEuc2V0QXR0cmlidXRlKCdpZCcsICdtZXNzYWdlJyk7XG50ZXh0YXJlYS5uYW1lID0gJ21lc3NhZ2UnO1xudGV4dGFyZWEucGxhY2Vob2xkZXIgPSAnTmFtZSBTdXJuYW1lIEFnZSc7XG5mb3JtVGFnXzEuYXBwZW5kQ2hpbGQodGV4dGFyZWEpO1xuLy8zXG5jb25zdCBkaXZfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZGl2XzEuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb250YWluZXItc2Vjb25kJyk7XG5yb290LmFwcGVuZENoaWxkKGRpdl8xKTtcblxuY29uc3QgZm9ybVRhZ18yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuZm9ybVRhZ18yLnNldEF0dHJpYnV0ZSgnaWQnLCdjb250YWluZXJfaW5wdXQnKTtcbmRpdl8xLmFwcGVuZENoaWxkKGZvcm1UYWdfMik7XG5cbmNvbnN0IFJlZ0Rpdl8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5SZWdEaXZfMS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZpbmQnKTtcblJlZ0Rpdl8xLnRpdGxlID0gJ9C90LDQudC00LjRgtC1INGB0LLQvtC1INC40LzRjyc7XG5SZWdEaXZfMS50ZXh0Q29udGVudCA9ICdTZWFyY2hpbmcgISc7XG5mb3JtVGFnXzIuYXBwZW5kQ2hpbGQoUmVnRGl2XzEpO1xuXG5jb25zdCBsZWJlbF8zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbmxlYmVsXzMuc2V0QXR0cmlidXRlKCdmb3InLCAnbm5hbWUnKTtcbmxlYmVsXzMuaW5uZXJIVE1MID0gJ05hbWUgPHNwYW4+Kjwvc3Bhbj4nO1xuZm9ybVRhZ18yLmFwcGVuZENoaWxkKGxlYmVsXzMpO1xuXG5jb25zdCBpbnB1dF8zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbmlucHV0XzMuc2V0QXR0cmlidXRlKCdpZCcsICdubmFtZScpO1xuaW5wdXRfMy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuaW5wdXRfMy5wbGFjZWhvbGRlciA9ICdFbnRlciB5b3VyIG5hbWU6JztcbmZvcm1UYWdfMi5hcHBlbmRDaGlsZChpbnB1dF8zKTtcblxuY29uc3QgbGViZWxfNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5sZWJlbF80LnNldEF0dHJpYnV0ZSgnZm9yJywgJ3NzdXJuYW1lJyk7XG5sZWJlbF80LmlubmVySFRNTCA9ICdTdXJuYW1lIDxzcGFuPio8L3NwYW4+JztcbmZvcm1UYWdfMi5hcHBlbmRDaGlsZChsZWJlbF80KTtcblxuY29uc3QgaW5wdXRfNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5pbnB1dF80LnNldEF0dHJpYnV0ZSgnaWQnLCAnc3N1cm5hbWUnKTtcbmlucHV0XzQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbmlucHV0XzQucGxhY2Vob2xkZXIgPSAnRW50ZXIgeW91ciBhZ2U6JztcbmZvcm1UYWdfMi5hcHBlbmRDaGlsZChpbnB1dF80KTtcblxuY29uc3QgbGViZWxfNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5sZWJlbF81LnNldEF0dHJpYnV0ZSgnZm9yJywgJ2FhZ2UnKTtcbmxlYmVsXzUuaW5uZXJIVE1MID0gJ0FnZSA8c3Bhbj4qPC9zcGFuPic7XG5mb3JtVGFnXzIuYXBwZW5kQ2hpbGQobGViZWxfNSk7XG5cbmNvbnN0IGlucHV0XzUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuaW5wdXRfNS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FhZ2UnKTtcbmlucHV0XzUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ251bWJlcicpO1xuaW5wdXRfNS5wbGFjZWhvbGRlciA9ICdhZ2U6JztcbmlucHV0XzUubWluID0gJzEnO1xuaW5wdXRfNS5tYXggPSAnMTAwJztcbmZvcm1UYWdfMi5hcHBlbmRDaGlsZChpbnB1dF81KTtcblxuY29uc3QgYnRuRGl2XzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmJ0bkRpdl8xLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYnRuJyk7XG5idG5EaXZfMS50ZXh0Q29udGVudCA9ICdGaW5kJztcbmZvcm1UYWdfMi5hcHBlbmRDaGlsZChidG5EaXZfMSk7XG5cbi8vc2Vjb25kLXBhZ2Vfc2Vjb25kLWZvcm0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5jb25zdCBmb3JtVGFnXzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5mb3JtVGFnXzMuc2V0QXR0cmlidXRlKCdpZCcsJ2NvbnRhaW5lcl9pbnB1dCcpXG5kaXZfMS5hcHBlbmRDaGlsZChmb3JtVGFnXzMpO1xuXG5jb25zdCBmaW5kRGl2XzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmZpbmREaXZfMS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZpbmQnKTtcbmZpbmREaXZfMS50aXRsZSA9ICdSZXN1bHQnO1xuZmluZERpdl8xLnRleHRDb250ZW50ID0gJ1Jlc3VsdCc7XG5mb3JtVGFnXzMuYXBwZW5kQ2hpbGQoZmluZERpdl8xKTtcblxuY29uc3QgdGV4dGFyZWFfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG50ZXh0YXJlYV8xLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVzc2FnZScpO1xudGV4dGFyZWFfMS5uYW1lID0gJ21lc3NhZ2UnO1xudGV4dGFyZWFfMS5wbGFjZWhvbGRlciA9ICdOYW1lIFN1cm5hbWUgdHJ1ZS9mYWxzZSc7XG5mb3JtVGFnXzMuYXBwZW5kQ2hpbGQodGV4dGFyZWFfMSk7XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBmdW5jdGlvbiBzZW5kTmFtZSgpIHtcbi8vICAgICBsZXQgc05hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpLnZhbHVlOyAgXG4vLyAgICAgbGV0IHNTdXJuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1cm5hbWUnKS52YWx1ZTtcbi8vICAgICBsZXQgc0FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZ2UnKS52YWx1ZTtcblxuLy8gICAgIGxldCBjb25jYXR0ID0gc05hbWUgKyAnICcgKyBzU3VybmFtZSArICcgJyArIHNBZ2UgO1xuLy8gICAgIGxldCBvbGRWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXNzYWdlJykudmFsdWU7XG4vLyAgICAgbGV0IG5ld1ZhbHVlID0gY29uY2F0dCArIG9sZFZhbHVlO1xuLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXNzYWdlJykuaW5uZXJIVE1MID0gbmV3VmFsdWU7XG4vLyB9XG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gY29uc3QgTW9kZWwgPSByZXF1aXJlKCcuL2pzL01vZGVsLmpzJyk7XG4vLyBjb25zdCBWaWV3ID0gcmVxdWlyZSgnLi9qcy9WaWV3LmpzJyk7XG4vLyBjb25zdCBDb250cm9sbGVyID0gcmVxdWlyZSgnLi9qcy9Db250cm9sbGVyLmpzJyk7XG5cbi8vIGZ1bmN0aW9uIGluaXRQcm9qZWN0KCkge1xuLy8gICAgIGNvbnN0IG1vZGVsID0gbmV3IE1vZGVsKCk7XG4vLyAgICAgY29uc3QgdmlldyA9IG5ldyBWaWV3KCk7XG4vLyAgICAgY29uc3QgY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyKG1vZGVsLCB2aWV3KTtcbi8vIH1cbi8vIENvbnRyb2xsZXIucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoY29udHJvbGxlcikge1xuLy8gICAgIHRoaXMuY29udHJvbGxlciA9IGNvbnRyb2xsZXJcbi8vIH1cbi8vIGluaXQoY29udHJvbGxlcilcblxuLy8gaW5pdFByb2plY3QoKTsiLCIvLyBmdW5jdGlvbiBDb250cm9sbGVyKHZpZXcsIG1vZGVsKSB7XG4vLyAgICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuLy8gICAgIHRoaXMudmlldyA9IHZpZXc7XG4vLyB9XG5cbi8vIG1vZHVsZS5leHBvcnRzID0gQ29udHJvbGxlcjtcbiIsIi8vIGZ1bmN0aW9uIE1vZGVsKCkge1xuICAgIFxuLy8gfVxuXG4vLyBtb2R1bGUuZXhwb3J0cyA9IE1vZGVsOyIsIlxuXG5cblxuXG4vLyBmdW5jdGlvbiBWaWV3KCkge1xuLy8gfVxuXG4vLyBtb2R1bGUuZXhwb3J0cyA9IFZpZXc7Il19