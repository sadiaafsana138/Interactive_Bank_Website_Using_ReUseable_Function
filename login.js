//submit button at LOGIN FORM
document.getElementById('btn-submit').addEventListener('click',function(){
    //User Email value (.value)
    const UserEmail = document.getElementById('User-Email').value ;
    //console.log(UserEmail);
    //User password
    const UserPassword = document.getElementById('User-Password').value ;
    //console.log(UserPassword);
    if(UserEmail== "s.sadiaafsanamumu@gmail.com" && UserPassword== "sadia"){
        window.location.href = "bank.html";
    }
    else{
        alert("Invalid User!! Please Enter a valid Combination!");
        document.getElementById('User-Email').value = "";
        document.getElementById('User-Password').value = "";
    }
})



