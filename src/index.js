//this is the main file (entry point) that webpack looks to to create the bundle
import './styles/main.scss';

const name = document.getElementById('name');
const address = document.getElementById('address');
const hours = document.getElementById('hours');
const lunchButton = document.getElementById('wheresLunch');
const addUpdateButton = document.getElementById('addUpdateButton');
const updateName = document.getElementById('updateName');
const updateAddress = document.getElementById('updateAddress');
const updateHours = document.getElementById('updateHours');


//lunch button functionality
lunchButton.onclick = function() {
    fetch('http://localhost:8080/getlunch', {
        method: 'GET',
        mode: 'no-cors'
    })
    .then(response => response.json())
    .then(data => {
        name.innerText = 'Restaurant: ' + data.name;
        address.innerText = 'Address: ' + data.address;
        hours.innerText = 'Hours: ' + data.hours_and_days;
    })
    .catch(err => console.log('error at onclick: ', err))
}

//Add/Update button functionality
addUpdateButton.onclick = function() {
    fetch('http://localhost:8080/addlunch', {
        method: 'POST',
        headers: {
        Accept: 'application.json',
        'Content-Type': 'Application/JSON'
        },
      body: JSON.stringify({
        name: updateName.value,
        address: updateAddress.value,
        hours_and_days: updateHours.value
        }),
      cache: 'default'
    })
    .then(response => response.json())
    .then(data => console.log('Inside index.js addUpdateButton'))
    .catch(err => console.log('error at onclick: ', err))
}