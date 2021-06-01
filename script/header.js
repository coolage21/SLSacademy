/*헤더부분*/
let header = document.querySelector('header')

header.addEventListener('scroll', function(){
    if(window.scrollY !== 0){
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll')
    }
})
