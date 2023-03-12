// Home page javascript---------------------------------







// login page javascript-------------------------------
function login(){
    const email=document.getElementById('emailid').value;
    const password=document.getElementById('passkey').value;
    if(email==""){
        alert('Please fill the email id');
    }else if(password==""){
        alert('Please fill the password');
    }else{
        const myid="imakash0218@gmail.com";
        const passkey="12345"
        if(myid!=email || passkey!=password){
            alert('Invalid email id or password');
        }else{
            alert('Login Succesfully');
        }
        
    }
}










// register page javascript-----------------------------
function ragister(){
    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    const dob=document.getElementById('dob').value;
    const password=document.getElementById('password').value;
    const confirmPassword=document.getElementById('conPassword').value;
    if(name=="" || email=="" || dob=="" || password=="" || confirmPassword==""){
        alert('Please fill all the field!');
    }else if(password!=confirmPassword ){
        alert('Password not matched!');
        document.getElementById('conPassword').value="";

    }else{
        alert('Ragister Succsfully !');
        document.getElementById('name').value="";
        document.getElementById('email').value="";
        document.getElementById('dob').value="";
        document.getElementById('password').value="";
        document.getElementById('conPassword').value="";
        
    }
}