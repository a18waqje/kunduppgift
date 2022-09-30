//function that checks the user input and password to login the user to the homepage.
let errMessage = document.getElementById("errMessage");
function check(e) {
  e.preventDefault();//Opening the page as default
  let username = e.target.form.username.value; //get values of username and password from the form 
    let password = e.target.form.password.value;//createing a variable to store password


    if (username == "Sara" && password == "qwe123") {
      //Condition to check if the data entered by the user is equal to the data in local storage.
      localStorage.setItem("uname", username); //creating uname variable to store the username in the localStorage.
      localStorage.setItem("pass", password); //creating passwordvariable to store the username in the localStorage.
      localStorage.setItem("code", "secret"); //creating secret key variable to store the username in the localStorage.
      window.location.href = "main.html"; //redirecthe user to the homepage
      errMessage.innerHTML = "User Logged in Successfully"; //message on successful login
      errMessage.style.color = "white";
      errMessage.style.backgroundColor = "green";
    }
    else {
        errMessage.innerHTML = "Ivalid Username/Password!";//Message for Invalid credentials entered by user
        errMessage.style.color = "white";//Changing message font color to white
        errMessage.style.backgroundColor = "red";//change message background color
  }
};




