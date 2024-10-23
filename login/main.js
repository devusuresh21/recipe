function login(){
   const username = usernameInput.value
   console.log(username);
   localStorage.setItem("username",username)
   //redirect to dashboard.html

   window.location = "dashboard.html"

   
}