const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
let signup = document.getElementById('signup');
let name =document.getElementById('name');

let number = document.getElementById('number');

const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	
	container.classList.add("right-panel-active");
	
});

signup.addEventListener("click", function(){
	
	username =name.value;
	emailaddress= email.value;
	mobile = number.value;
	pass = password.value;
	//confirmpass = conpass.value;
  
     
	
  //var email= document.getElementById("email");
  //var password= document.getElementById("password");
  
  //let conpass = document.getElementById('conpass');

  let webtask = localStorage.getItem("user");
        if(webtask == null){
            task = [];
        }
        else{
            task = JSON.parse(webtask);
		}
		task.push({'username':username,'password':pass,
		'email':emailaddress,'phone':mobile});
		//localStorage.setItem("name",JSON.stringify( name.value));
  //localStorage.setItem("contact",JSON.stringify( number.value));
 //// localStorage.setItem("mail",JSON.stringify( email.value));
  //localStorage.setItem("password",JSON.stringify( password.value));
  //localStorage.setItem("conpass", conpass.value);
  localStorage.setItem("user", JSON.stringify(task));
		alert('sucessfully registered');
       
});


signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

signin.addEventListener('click', (event) => {
//window.location="/home.html"	
event.preventDefault();
	let emailadd = document.getElementById('emailadd').value;
	
	let pass =document.getElementById('pass').value;
	
	var inputUsername = localStorage.getItem("user".slice(3));
	//console.log("inputUsername",inputUsername);
    var inputPassword = localStorage.getItem("password");
	   if(inputUsername === emailadd && inputPassword === pass)
	   {
		alert("welcome");

	   }
	   else{
		   alert('invalid username and password');
	   }
	   
	

});
