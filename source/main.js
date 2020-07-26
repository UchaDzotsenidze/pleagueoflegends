

function validateEmail(emailField){
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(emailField) == false) 
    {
        alert('Invalid Email Address');
        return false;
    }

    return true;

}

function validpassword(password){
    var passw=  /^[A-Za-z]\w{5,14}$/;

    if(!password.match(passw)) 
    { 
        alert('wrong password \n password must be at least 6 characters, first letter must be letter and at least one symbol required.')
        return false;
    }

    return true;
}

function confirmPassword(fps, cps){
    if(fps != cps){
        alert("your password doesnot match!")
    }
}
    
function Check(){


    var psw = document.getElementById('ps').value;
    var cpsw = document.getElementById('cpsw').value;
    var email = document.getElementById('em').value;
    
    validateEmail(email);
    validpassword(psw);

    if(cpsw != ""){
        confirmPassword(psw, cpsw);
    }

}



// function add(){

//     if(MainUser.length > 4){
//         return;
//     }
    
    
//     firstname = document.getElementById('fn').value;
//     lastname = document.getElementById('ln').value;
//     email = document.getElementById('em').value;
//     password = document.getElementById('ps').value;

//     MainUser.push(firstname);
//     MainUser.push(lastname);
//     MainUser.push(email);
//     MainUser.push(password);

//     localStorage.setItem("value", firstname = document.getElementById('fn').value);
//     window.location.href = "profile.html";
// }




// const add = (ev) =>{

//     if(MainUser.length > 1){
//         return;
//     }
//     ev.preventDefault();

//     let user = {
//         firstName: document.getElementById('fn').value,
//         lastName: document.getElementById('ln').value,
//         email: document.getElementById('em').value,
//         password: document.getElementById('ps').value
//     };

//     MainUser.push(user);
//     // document.forms[0].reset();
// }



// document.addEventListener('DOMContentLoaded', ()=>{
//     document.getElementById('btn').addEventListener('click', add);
// });


// console.log(MainUser.length)