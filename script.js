const about = document.querySelector('.about');
const services = document.querySelector('.services');
const projects = document.querySelector('.projects');
const contact = document.querySelector('.contact');
const menu = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navigations.mobile-view')

about.addEventListener('click', function (){
    isactive(about);
});

services.addEventListener('click', function (){
    isactive(services);
});

projects.addEventListener('click', function (){
    isactive(projects);
});

contact.addEventListener('click', function (){
    isactive(contact);
});

menu.addEventListener('click', function () {
    navbar.classList.toggle('display');
})

function isactive(para) {
    let present = document.querySelector('.active')
    if(!para.classList.contains('active')){
        present.classList.remove('active');
        para.classList.add('active');
    }
}