const displayCardContainer = document.getElementsByClassName('display-card-container')[0];
const createBox = document.getElementsByClassName('create-box')[0];
const question = document.getElementById('question');
const answer = document.getElementById('answer');

let contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

contentArray.forEach(divCardCreation);


function createNewCard(){

    //this variable put the input question and answer to an object
    var flashcard_info = {
        'my_question' : question.value,
        'my_answer' : answer.value
    }
    contentArray.push(flashcard_info);
    localStorage.setItem('items', JSON.stringify(contentArray));

    divCardCreation(contentArray[contentArray.length - 1]);
    question.value = '';
    answer.value = '';
}
function divCardCreation(text){
    var div = document.createElement('div');
    var h2_question = document.createElement('h2');
    var h2_answer = document.createElement('h2');

    div.className = 'flashcard';

    h2_question.setAttribute('style', 'border-top:2px solid lightgray; padding: 15px; margin-top:30px; text-transform:uppercase');

    h2_question.innerHTML = text.my_question;

    h2_answer.setAttribute('style', 'margin-top: 10px; text-align:center; display:none; color:red; cursor:pointer; text-transform:uppercase');

    h2_answer.innerHTML = text.my_answer;

    div.appendChild(h2_question);
    div.appendChild(h2_answer);

    div.addEventListener('click', function(){
        if(h2_answer.style.display == 'none'){
             h2_answer.style.display = 'block';
        }
        else{
            h2_answer.style.display = 'none';
        }
    })
   

    displayCardContainer.appendChild(div)
}

//this function hides the creation box for a flashcard
function hideCard(){
    createBox.style.display = "none";
}

//this one delete a flashcard
function deleteCard(){
    localStorage.clear();
    displayCardContainer.innerHTML = '';
    contentArray = [];
}

//this one shows the createtion box when the 'New Card' button is selected
function showCreateCard(){
    createBox.style.display = 'block'
}