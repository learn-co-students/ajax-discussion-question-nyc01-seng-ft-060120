const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  
  function clickHandler() {
    const button = document.querySelector('.btn');
    //console.log(button);
    button.addEventListener('click', function(e) {
      getInfo();
    })
  }

  function getInfo() {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
        //console.log(data);
        const user = data.results[0];
        renderUser(user)
      })
  }

  const renderPic = user => {
    const profilePicture = user.picture.large
    document.getElementById('profile_picture').src = profilePicture;
  }

  const renderName = user => {
    const title = user.name.title;
    const first = user.name.first;
    const last = user.name.last;
    const fullname = `${title}. ${first} ${last}`;
    document.getElementById('fullname').innerText = fullname;
  }

  const renderEmail = user => {
    const email = user.email;
    document.getElementById('email').innerText = email;
  }

  const renderAddress = user => {
    const location = user.location;
    const street = `${location.street.number} ${location.street.name}`;
    const city = location.city;
    const state = location.state;
    const postCode = location.postcode;

    document.getElementById('street').innerText = street;
    document.getElementById('city').innerText = city;
    document.getElementById('state').innerText = state;
    document.getElementById('postcode').innerText = postCode;
  }

  const renderPhone = user => {
    const phone = user.phone;
    const cell = user.cell;

    document.getElementById('phone').innerText = phone;
    document.getElementById('cell').innerText = cell;
  }

  const renderDate = user => {
    const date = user.dob.date;

    document.getElementById('date_of_birth').innerText = date;
  }

  function renderUser(user) {
    console.log(user);
    renderPic(user);
    renderName(user);
    renderEmail(user);
    renderAddress(user);
    renderPhone(user);
    renderDate(user);
  }

  clickHandler();
});
