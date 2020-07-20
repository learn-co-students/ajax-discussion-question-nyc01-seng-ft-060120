const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  
  const button = document.querySelector('.btn');
  //console.log(button);
  button.addEventListener('click', function(e) {

  })
});
