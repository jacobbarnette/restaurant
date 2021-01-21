import  './assets/css/styles.css';
import './modules/initial.js'
import loadAbout from './modules/about.js'
import loadPage from './modules/initial';
import loadHome from './modules/home.js';

console.log('working');

function navBarEvents(){
    const homePgBtn = document.getElementById('homePg');
    const menuPgBtn = document.getElementById('menuPg')
    const aboutPgBtn = document.getElementById('aboutPg');

    homePgBtn.addEventListener('click', loadHome);
    aboutPgBtn.addEventListener('click', loadAbout);
}

 function init() {
    
     navBarEvents()
 }
 init();