function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
} 

function checkCookie() {
    let username = getCookie("username");
    if (username === "dev" || username === "Dev") {
      alert("Welcome back, " + username + ". I hope you can add something in the next update.");
    }
    else if (username === "qa" || username === "QA") {
      alert("Welcome, " + username + ". I hope you can enjoy our project.");
    }
    else if (username != "") {
      alert("Welcome, " + username + ".");
    }
    else {
        username = prompt("Please enter your name:", "");
        if (username != "" && username != null) {
            setCookie("username", username, 1);
            checkCookie();
        } else {
          alert("Username can't be empty!");
          checkCookie();
        }
    }
}
function changeName() {
  const changeName = confirm("Are you sure to change name?");
  if (changeName === true) {
    setCookie("username", null, null);
    checkCookie();
  }
}
function deleteUserData() {
  const deleteData = confirm("Are you sure to delete your data?");
  if (deleteData === true) {
    let deleteDataConfirm = prompt("Type delete_data to continue.");
    if (deleteDataConfirm === "delete_data") {
      setCookie("username", null, null);
    alert("Your user data has been deleted successfully.");
    } else {
      alert("Invalid characters.");
    }
  }
}
function dataDelete() {
  setCookie("username", null, null);
  alert("Your data has been deleted immediately.");
}
window.onload = checkCookie();
