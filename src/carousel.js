function carousel(container,itemWidth,containerWidth='100vw'){
    // const nextBtn = container.querySelector('.next');
    // const prevBtn = container.querySelector('.prev');
    const buttons = container.querySelectorAll("[data-carousel-button]")
    const slides = container.querySelector('[data-slides]')//slides parent html elemnt
  
    let isSliding = false;
   
    container.style.setProperty('--item-width',`${itemWidth}`);


    buttons.forEach(button => {
        button.addEventListener("click",(e)=>{
            console.log(isSliding)
            if(!isSliding){
                 moveSlide(e)
            }
           
        })
    });
    function moveSlide(e){
        isSliding = true; 
         

        const offset = e.target.dataset.carouselButton === "next" ? 1 : -1
        const activeSlide = slides.querySelector("[data-active]")
         
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        if(offset){//next
            toNext();
            console.log(isSliding)
        }else{ //prev
            toPrev()
        }
        resetAnimation()
        isSliding = false;
       

         function toNext(){
            activeSlide.dataset.animation='slide-out';
            slides.children[newIndex].dataset.animation='slide-in';
         }
        function toPrev(){
            activeSlide.dataset.animation='slide-out-reverse';
            slides.children[newIndex].dataset.animation='slide-in-reverse';
        }
        function resetAnimation(){
       
            let prevSlideIndex = [...slides.children].indexOf(activeSlide) - 1 ;
            if (prevSlideIndex < 0) prevSlideIndex = slides.children.length - 1
            if (prevSlideIndex >= slides.children.length) prevSlideIndex = 0
    
            console.log(prevSlideIndex)
             slides.children[prevSlideIndex].dataset.animation=""
             slides.children[prevSlideIndex].addEventListener('animationend',()=>{
                delete slides.children[prevSlideIndex].dataset.animation
             })
             
            delete activeSlide.dataset.animation
            delete activeSlide.dataset.active
        }
    }

   

}

export {
    carousel
}