var signin = () =>{
    let username = document.getElementById("username")
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    let address = document.getElementById("address")
    let phone_no = document.getElementById("phone_no")
    
// console.log(username)
// console.log(email)
// console.log(address)
// console.log(password)
// console.log(phone_no)

    
  //  let users = {
  //      username : username.value,
  //      email : email.value,
  //      password : password.value
  //  }
  
   
  //   firebase.database().ref('user').push(users)
  
  
  firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
          .then((result) =>{
              console.log("res=>",result) 
              window.location = "login.html"
  
          })
          .catch((error) => {
              console.log("error=>", error)
          })
  }
  
  let login = () => {
      let email = document.getElementById("email");
      let password = document.getElementById("password");
  
      firebase.auth().signInWithEmailAndPassword(email.value, password.value)
          .then((res) => {
              console.log("user log in ho gaya hai")
              if(document.getElementById("user").checked){
                    location.href = "../food website/index.html"
                  }
                  else{
                    location.href  = "../Restrudent interface/server.html"
                  }
      
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            message.innerHTML = "Invalid credentials"
            setTimeout(() => {
              message.innerHTML = "";
              email.value = "";
              password.value = "";
          }, 2000);
            console.log(errorMessage)
          });
        }

        var currentUser = users.find(function (val) {
          return val.email.toLowerCase() === user.email.toLowerCase() && val.password === user.password;
      });
      if (currentUser) {
        firebase.getItem("user", JSON.stringify(currentUser));
        // user login
        location.href = "index.html";
    } else {
        message.innerHTML = "Invalid credentials";
    }