const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?



document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});

// fetch 
fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(data => {
    data.forEach(toy => {
      renderToys(toy);
    });
    console.log(renderToys(toy))
})

function fetchData(){
  let data = fetch('https://randomuser.me/api/')
    .then( res => res.json() )
    .then( console.log )
}

fetchData()