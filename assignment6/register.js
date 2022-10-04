window.onload = pageLoad;
function pageLoad(){
	var clickButton = document.getElementById("myForm");
    clickButton.onsubmit = validateForm;
}

function validateForm() {
    var PasswordMain = document.forms["myForm"]["password"].value;
    var PasswordCheck = document.forms["myForm"]["Repassword"].value;

    if(PasswordMain != PasswordCheck)
    {
        document.getElementById('errormsg').innerHTML = "Password not same";
        alert("Password not same");
        return false;
    }
    if(PasswordMain == PasswordCheck)
    {
        alert("You have successfully registered");
    }
}