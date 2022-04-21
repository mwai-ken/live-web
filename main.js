const menubtn =document.querySelector(".menu-btn");
const nav =document.querySelector(".nav");


/*hamburger*/
menubtn.addEventListener('click', ()=>{
    menubtn.classList.toggle('active');
    nav.classList.toggle('active');
});