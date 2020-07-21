const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(results => {
    renderPerson(results.results[0]);
  });

  function renderPerson(person){
    const container = document.querySelector(".container")
    const img = document.createElement("img")
    img.src = person.picture.large
    container.appendChild(img)
  }
});
