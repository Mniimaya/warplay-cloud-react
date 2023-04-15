import { v4 as uuidv4 } from 'uuid';
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react';
import IntroSlide from './IntroSlide'
import styles from './IntroSlider.module.scss'
import  slide1 from '../images/index-slide1.jpg';
import  slide2 from '../images/index-slide2.jpg';
import  slide3 from '../images/index-slide3.jpg';
import  slide4 from '../images/index-slide4.jpg';


register();

function IntroSlider() {

    const imagesSlider = [
        {
            src: slide1,
            key: uuidv4(),
            alt: 'Изображение первого слайда.'
        },
        {
            src: slide2,
            key: uuidv4(),
            alt: 'Изображение второго слайда.'
        },
        {
            src: slide3,
            key: uuidv4(),
            alt: 'Изображение третьего слайда.'
        },
        {
            src: slide4,
            key: uuidv4(),
            alt: 'Изображение чертвертого слайда.'
        },
    ]

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
         window.addEventListener("resize", handleResizeWindow);
         return () => {
           window.removeEventListener("resize", handleResizeWindow);
         };
    }, []);

       if(width > 1280) {
            return (
                <div className={styles.intro__slider}>
                <Swiper 
                className={styles.intro__sliderWrapper}  
                direction = 'vertical' 
                loop = {true} 
                slides-per-view = {1} 
                autoplay = {{delay : 5000}} 
                scrollbar={{ draggable: true, el: ".intro__slider__scrollbar"}}
                >
                    {imagesSlider.map((item) => 
                        <SwiperSlide className={styles.intro__slide} key={item.key}>
                            <IntroSlide  alt={item.alt} src={item.src} />
                        </SwiperSlide>
                    )}
                </Swiper>
                <div className="intro__slider__scrollbar"></div>
                </div>  
            )
       }
}

export default IntroSlider