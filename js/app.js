const mainContent = document.querySelector('#container');
const navbar = document.querySelector('.navbar');

const loadData = e => {
    e.preventDefault();
    if(e.target.classList.contains('')|| e.target.classList.contains('')){
        
    }
}
window.addEventListener('DOMContentLoaded', () => {
    fetch('../pages/home.html')
     .then(page => {
        //const div => document.createElement('div');
        return page.text();
     })
     .then(contentHtml => {
        const div = document.createElement('div');
        div.innerHTML = contentHtml;
        mainContent.appendChild(div);
     })
     navbar.addEventListener('click', loadData);
})