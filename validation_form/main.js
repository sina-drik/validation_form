
const usernameInput=document.querySelector('.user-input');
const passwordInput=document.querySelector('.pass-input');
const signupBtn=document.querySelector('.signin-button')
const usernameMsg=document.querySelector('.username-msg');
const passwordMsg=document.querySelector('.password-msg');
const signupMsg=document.querySelector('.signin-status');
let ifSenddata;


signupBtn.addEventListener('click',signup);
function signup(event){
    event.preventDefault();
    const usernameValue=usernameInput.value;
    const passwordValue=passwordInput.value;
    if(usernameValue=="" || usernameValue.indexOf('@')===-1 || usernameValue.indexOf('.')===-1){
        usernameMsg.innerText='Please a valid username';
        ifSenddata=false;
    }else{
        usernameMsg.innerText='';
        ifSenddata=true;
    }
    if(passwordValue=="" || passwordValue.length <=4){
        passwordMsg.innerText='Your password is short'
        ifSenddata=false
    }else{
        passwordMsg.innerText='';
        ifSenddata=true;
    }

    if(ifSenddata){
        const body=JSON.stringify({
            username:usernameValue,
            password:passwordValue
        });
        const headers= {
            'Content-type': 'application/json; charset=UTF-8',
          };
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method:"POST",
            body:body,
            headers:headers
        })
        .then((response)=>{
            if(response.ok){
                signupMsg.innerText='You have successfully signed up';
            }
        })
    }
}


