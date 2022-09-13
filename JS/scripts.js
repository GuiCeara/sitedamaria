// FORM STYLE (index)

// email: eusoulindasempre@gmail.com, senha: amoserlindatododia

var email = document.getElementById('email');
var password = document.getElementById('password');

email.addEventListener('focus', () => {
    email.style.borderColor = "#4A5F6A";
});

email.addEventListener('blur', () => {
    email.style.borderColor = "#ccc";
});

password.addEventListener('focus', () => {
    password.style.borderColor = "#4A5F6A";
});

password.addEventListener('blur', () => {
    password.style.borderColor = "#ccc";
});

// FORM FUNÇÃO

let elementEmail = document.getElementById('email');
let elementSenha = document.getElementById('password');

let btnLogin = document.getElementById('send');

function fazerLogin(email="",senha=""){
  if(email.length > 0 && senha.length){
    if(email == "eusoulindasempre@gmail.com" && senha == "amoserlindatododia" ){
      return true;        
    }
    return false;
  }
  else{
    email = prompt("Email");
    senha = prompt("Senha");
    if(email == "eusoulindasempre@gmail.com" && senha == "amoserlindatododia"){
      return true;        
    }
    return false;
  }  
}

btnLogin.onclick = function(){
  if(fazerLogin(elementEmail.value,elementSenha.value)){
    window.location.assign(`${window.location.origin}/homePage.html`);
  }else{
    if(confirm("Senha inválida. \nTentar novamente?")){
      if(fazerLogin()){
        window.location.assign(`${window.location.origin}/homePage.html`);
      }
      else{
        alert("Não foi desta vez");
      }          
    }  
  }    
       
  
}

