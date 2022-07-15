let passOne = document.querySelector('#psw1');
let passTwo = document.querySelector('#psw2');
let spanPass = document.querySelector('.matchPass');
let $submit = document.querySelector('.btnSubmit');

passTwo.addEventListener('focusout', (event) =>{
    if (passOne.value === passTwo.value){
        passTwo.setAttribute('style', 'border: 1px solid rgb(7, 236, 7)');
        spanPass.setAttribute('style', 'display: none');
        $submit.disabled = false;
    } else{
        passTwo.setAttribute('style', 'border: 1px solid rgb(236, 7, 7)');
        spanPass.setAttribute('style', 'display: block');
        $submit.disabled = true;
    }
})

