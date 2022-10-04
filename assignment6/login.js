window.onload = loginLoad;
function loginLoad(){
	var clickButton = document.getElementById("myLogin");
    clickButton.onsubmit = checkLogin;
}

function checkLogin(){
	const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const UserName = urlParams.get('username');
    const password = urlParams.get('password');

    var User = document.forms["myLogin"]["username"].value;
    var PW = document.forms["myLogin"]["password"].value;

    if(User == UserName && PW == password)
    {
        alert("You have logged in finished");
    }
    if(User != UserName || PW != password)
    {
        alert("Your Username or Password is incorrect.");
    }

}

