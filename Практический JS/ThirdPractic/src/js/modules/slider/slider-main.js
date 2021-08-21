import Slider from './slider';

export default class MainSlider extends Slider {
    constructor(btns, next, prev) {
        super(btns, next, prev);
    }

    showSlides(n){
        if(n > this.slides.length){
            this.slideIndex = 1;
        }
        if(n < 1){
            this.slideIndex = this.slides.length;
        }

        try{
            this.hanson.style.opacity = '0';   

            if(n === 3){
                this.hanson.classList.add('animated');
                setTimeout(()=>{
                    this.hanson.style.opacity = '1';   
                    this.hanson.classList.add('slideInUp');
                }, 3000);
            } else {
                this.hanson.classList.remove('slideInUp');
            }
            
        } catch(e){}

        this.slides.forEach(slide=>{
            slide.style.display = 'none';
            slide.classList.add('animated');
        });
        this.slides[this.slideIndex-1].style.display = 'block';
    }

    plusSlides(n){
        this.showSlides(this.slideIndex += n);   
    }

    bindTriggers(n){
        this.btns.forEach(btn => {
            btn.addEventListener('click', ()=>{
                this.plusSlides(1);
                if(btn.classList.contains('next')){
                    this.slides[this.slideIndex - 1].classList.add('fadeInLeftBig');
                }
            });
            btn.parentNode.previousElementSibling.addEventListener('click', (e)=>{
                e.preventDefault();
                this.slideIndex = 1;
                this.showSlides(this.slideIndex);
            });
        });

        if(this.next && this.prev){
            this.next.forEach(item=>{
                item.addEventListener('click', (e)=>{
                    e.stopPropagation();
                    e.preventDefault();
                    this.plusSlides(1);
                });
            });
            this.prev.forEach(item=>{
                item.addEventListener('click', (e)=>{
                    e.stopPropagation();
                    e.preventDefault();
                    this.plusSlides(-1);
                });
            });
        }
    }

    render(){
        if(this.container){
            try{
                this.hanson = document.querySelector('.hanson');
            } catch(e){}
            this.bindTriggers();
            this.showSlides(this.slideIndex);
        }
    } 
}