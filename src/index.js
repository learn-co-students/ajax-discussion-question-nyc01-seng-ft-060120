const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

  const profilePicture = document.getElementById('profile_picture')
  const fullname = document.getElementById('fullname')
  const email = document.getElementById('email')
  const street = document.getElementById('street')
  const city = document.getElementById('city')
  const state = document.getElementById('state')
  const postCode = document.getElementById('postcode')
  const phone = document.getElementById('phone')
  const cell = document.getElementById('cell')
  const dateOfBirth = document.getElementById('date_of_birth')
  const newPersonBTN = document.querySelector('.btn-primary')

  function newPerson() {
    fetch("https://randomuser.me/api/")
      .then(function(response) {
        return response.json();
      })
      .then(function(json){
        profilePicture.setAttribute('src', json['results']["0"]["picture"]["large"])
        fullname.innerHTML = ""
        for (const key in json['results']["0"]["name"]) {
          fullname.innerHTML += `${json['results']["0"]["name"][key]}&nbsp;`
        }
        email.innerText = json['results']["0"]["email"]
        street.innerText = `${json['results']["0"]["location"]["street"]["number"]} ${json['results']["0"]["location"]["street"]["name"]}`
        city.innerText = json['results']["0"]["location"]["city"]
        state.innerText = json['results']["0"]["location"]["state"]
        postCode.innerText = json['results']["0"]["location"]["postcode"]
        phone.innerText = json['results']["0"]["phone"]
        cell.innerText = json['results']["0"]["cell"]
        let dob = new Date(json['results']["0"]["dob"]["date"])
        dateOfBirth.innerText = `${dob.getMonth() + 1}/${dob.getDate()}/${dob.getFullYear()}`
        console.log(dob)
      })
  }

  newPersonBTN.addEventListener('click', function() {
    newPerson()
  })

});
