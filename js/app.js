

const addBtn = document.querySelector('#add-btn');
const recordContainer = document.querySelector('.listContact');
const deleteBtn = document.querySelector('#delete-btn');
const dateElement = document.querySelector("#date");
const name = document.querySelector('#name');
const number = document.querySelector('#contact-num');
const mail = document.querySelector('#mail');
const photo = document.querySelector('#photo');

let ContactArray = [];
let id = 0;


function Contact(id, name, number, mail, photo){
    this.id = id;
    this.name = name;
    this.number = number;
    this.mail = mail;
    this.photo = photo;
}

document.addEventListener('DOMContentLoaded', function(){
    if(localStorage.getItem('contacts') == null){
        ContactArray = [];
    } else {
        ContactArray = JSON.parse(localStorage.getItem('contacts'));
        lastID(ContactArray);
    }
    displayRecord();
});


function displayRecord(){
    ContactArray.forEach(function(singleContact){
        addToList(singleContact);
    });
}

function lastID(ContactArray){
    if(ContactArray.length > 0){
        id = ContactArray[ContactArray.length - 1].id;
    } else {
        id = 0;
    }
}

addBtn.addEventListener('click', function(){
    if(checkInputFields([name, number, mail, photo])){
        setMessage("success", "");
        id++;
        const contact = new Contact(id, name.value, number.value, mail.value, photo.value);
        ContactArray.push(contact);
        localStorage.setItem('contacts', JSON.stringify(ContactArray));
        clearInputFields();
        addToList(contact);
    } else {
        alert("Заполните все поля");
    }
    
});
;

function checkInputFields(inputArr){
    for(let i = 0; i < inputArr.length; i++){
        if(inputArr[i].value === ""){
            return false;
        }
    }
    
    return true;
}

    function addToList(item){
        const newRecordDiv = document.createElement('div');
        newRecordDiv.classList.add('contact-item');
        newRecordDiv.innerHTML = `
        <div class = "contact-id">
            <span id = "labelling">ID: </span>
            <span id = "contact-id-content">${item.id}</span>
        </div>

        <div class = "contack__list--item">
            <span id = "labelling">Имя: </span>
            <span id = "name-content">${item.name}</span>
        </div>

        <div class = "contack__list--item">
            <span id = "labelling">Номер: </span>
            <span id = "contact-num-content"><a class="link" href="tel:+${item.number}">${item.number}</a></span>
        </div>

        <div class = "contack__list--item">
            <span id = "labelling">E-mail: </span>
            <span id = "mail"><a class="link" href="https://mail.google.com/mail/?view=cm&fs=1&to=${item.mail}" target="_blank">${item.mail}</a></span>
        </div>

        <div class = "photo__img">
            <span id = "labelling">Фото: </span>
            
            <img src="${item.photo}" alt="">
        </div>

        <button type = "button" id = "delete-btn">Удалить</button>
        `;
        recordContainer.appendChild(newRecordDiv);
    }

    recordContainer.addEventListener('click', function(event){
        //console.log(event.target);
        if(event.target.id === 'delete-btn'){
            // removing from DOM
            let recordItem = event.target.parentElement;
            recordContainer.removeChild(recordItem);
            let tempContactList = ContactArray.filter(function(record){
                return (record.id !== parseInt(recordItem.firstElementChild.lastElementChild.textContent));
            });
            ContactArray = tempContactList;
            //removing from localstorage by overwriting
            localStorage.setItem('contacts', JSON.stringify(ContactArray));
        }
    });

function setMessage(status, message){
    let messageBox = document.querySelector('.message');
    if(status == "error"){
        messageBox.innerHTML = `${message}`;
        messageBox.classList.add('error');
        removeMessage(status, messageBox);
    }
    if(status == "success"){
        messageBox.innerHTML = `${message}`;
        messageBox.classList.add('success');
        removeMessage(status, messageBox);
    }
}


function clearInputFields(){
    name.value = "";
    number.value = "";
    mail.value = "";
    photo.value = "";
}

function removeMessage(status, messageBox){
    setTimeout(function(){
        messageBox.classList.remove(`${status}`);
    }, 2000);
}





//Время на экране
const now = new Date();
//   const date = new Intl.DateTimeFormat('en-GB', {
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//   }).format(now);

const time = new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(now);
  dateElement.innerHTML = time
