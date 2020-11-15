const navMenu = document.getElementById('nav-menu')
const toggleMenu = document.getElementById('nav-toggle')
const closeMenu = document.getElementById('nav-close')

/*SHOW*/ 
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
    navMenu.classList.remove('hidden')
})

/*HIDDEN*/
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('hidden')
    navMenu.classList.remove('show')
})

// 
$(document).ready(function(){
    $(".contact__inputs .fcontact__input").blur(function(){
        if($(this).val()!=""){
            $(this).siblings("label").addClass("active");
        }else{
            $(this).siblings("label").removeClass("active");
        }
    });
});

