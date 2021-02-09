window.onscroll = function(){
    if(document.documentElement.scrollTop > 100){
        document.querySelector('.arriba')
        .classList.add('show')
    }else{
        document.querySelector('.arriba')
        .classList.remove('show')
    }
 
    
}

document.querySelector('.arriba')
.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        behavior:'smooth'
    });
});