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
     //   resetAnimation(); 

        const offset = e.target.dataset.carouselButton === "next" ? 1 : -1
        const activeSlide = slides.querySelector("[data-active]")
         console.log(activeSlide)
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        console.log(offset)
        if(offset == 1){//next
            toNext();
            console.log(activeSlide)
        }else{ //prev
            toPrev()
        }
        resetAnimation()
        isSliding = false;
       

         function toNext(){
            console.log(activeSlide.dataset)
            activeSlide.dataset.animation='slide-out';
           //  delete activeSlide.dataset.active
            slides.children[newIndex].dataset.animation='slide-in';
         }
        function toPrev(){
            activeSlide.dataset.animation='slide-in-reverse';//animate out of view
         //    delete activeSlide.dataset.active
            slides.children[newIndex].dataset.animation='slide-out-reverse';//animate in view
        }
        function resetAnimation(){
            const resetSlides= container.querySelectorAll('.slide:not([data-active="true"])')
            console.log(resetSlides)
            resetSlides.forEach((slide)=>{
                    slide.addEventListener('animationend',()=>{
                        delete slide.dataset.animation
                        
                    }, { once: true })
                  
            })
            delete activeSlide.dataset.active
            // let prevSlideIndex = [...slides.children].indexOf(activeSlide) - 1 ;
            // if (prevSlideIndex < 0) prevSlideIndex = slides.children.length - 1
            // if (prevSlideIndex >= slides.children.length) prevSlideIndex = 0
    
         //    slides.children[prevSlideIndex].addEventListener('animationend',()=>{
            //    delete slides.children[prevSlideIndex].dataset.animation
         //    })
             
            // delete activeSlide.dataset.animation
            // delete activeSlide.dataset.active
        }
    }

   

}

export {
    carousel
}