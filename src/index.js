//this is the main file that webpack looks to to create the bundle
import generateJoke from "./joke";
import './styles/main.scss';
import sg from './assets/sg.png';

const sweetgreen = document.getElementById('sweetgreen');
sweetgreen.src = sg;

console.log(generateJoke());