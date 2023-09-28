const hamburguer2 = document.querySelector('.hamburguer')
const menu = document.querySelector('.menu-navegacion')


hamburguer2.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e =>{
    if(menu.classList.contains('spread') 
        && e.target != menu && e.target != hamburguer2){
        console.log('cerrar')
        menu.classList.toggle("spread")
    }
})