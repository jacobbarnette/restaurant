function loadAbout() {
    const pgContent = document.getElementById('pgContent');
    const tagline = document.getElementById('tagline');
    pgContent.removeChild(tagline);

    const aboutTxt = document.createElement('h3');
    aboutTxt.setAttribute('id', 'tagline');
    aboutTxt.textContent = '   Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi perferendis nobis nulla facere! Modi dignissimos corporis ipsa nam ullam reprehenderit, est error, consequuntur dolor hic commodi? Exercitationem neque dignissimos maxime.    '
    pgContent.appendChild(aboutTxt);
}


export default loadAbout ;
