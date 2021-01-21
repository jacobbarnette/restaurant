function loadPage(){
    const content = document.getElementById('content');
    const navContainer = document.createElement('div');
    navContainer.setAttribute('id', 'navContainer');
    
    const header = document.createElement('h1');
    
    header.textContent = 'Stormwind Inn';
    
    const navbar = document.createElement('nav');
    const ul = document.createElement('ul');
    const homePg = document.createElement('button');
    homePg.textContent = 'Home';
    homePg.setAttribute('id', 'homePg');
    const menuPg = document.createElement('button');
    menuPg.textContent = 'Menu';
    menuPg.setAttribute('id', 'menuPg');
    const aboutPg = document.createElement('button');
    aboutPg.textContent = 'About';
    aboutPg.setAttribute('id', 'aboutPg');
    
    navContainer.appendChild(header);
    navContainer.appendChild(navbar);
    navbar.appendChild(ul);
    ul.appendChild(homePg);
    ul.appendChild(menuPg);
    ul.appendChild(aboutPg);
    
    const pgContent = document.createElement('div');
    pgContent.setAttribute('id', 'pgContent'); 
    
    const homeHeader = document.createElement('h2');
    homeHeader.textContent= 'For The Alliance!' 
    pgContent.appendChild(homeHeader)
    
    const tagLine = document.createElement('p');
    tagLine.textContent = 'The best Food in all of  Azeroth'
    tagLine.setAttribute('id','tagline');
    pgContent.appendChild(tagLine)
    
    
    
    content.appendChild(navContainer);
    content.appendChild(pgContent);

    
  
}
loadPage();

export default loadPage ;