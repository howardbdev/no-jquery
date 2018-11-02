// jQuery
// $(function(){
//   console.log("document ready")
// })

// vanillaJS
document.addEventListener("DOMContentLoaded",init)

function init(){ attachListeners() }

// jQuery
// $("#header").click(function(){
//   console.log("clicking!")
// })

function attachListeners() {
  document.getElementById("header").addEventListener("click", function(){
    console.log("clicking")
  })
  document.getElementById("js-form").addEventListener("submit", function(event){
    event.preventDefault()
    debugger

    let userObj = {
      name: document.getElementById("name-input").value,
      email: document.getElementById("email-input").value
    }

    fetch("myapi.com/users", {
      method: "POST",
      headers: {
        contentType: "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(userObj)

    })
  })
}
