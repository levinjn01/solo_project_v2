//this is the main file (entry point) that webpack looks to to create the bundle
import './styles/main.scss';
// import fetch from 'node-fetch';
// import sg from './assets/sg.png';

// const sweetgreen = document.getElementById('sweetgreen');
// sweetgreen.src = sg;

const name = document.getElementById('name');
const address = document.getElementById('address');
const hours = document.getElementById('hours');

const button = document.querySelector('button');

button.onclick = async function() {
    await fetch('http://localhost:8080/getlunch', {
        method: 'GET',
        mode: 'no-cors'
    })
    // .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log('error at onclick: ', err))
}