import React, { useState } from 'react'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'





export const ImageSlider = ({ data }) => {
    const [currentImage, setCurrentImage] = useState(0)
    const length = data.length



    const nextSlide = () => {
        setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1)
    }


    const prevSlide = () => {
        setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1)
    }



    if (!Array.isArray(data) || data.length <= 0) {
        return null
    }



    return (
        <section className="slider">
            <FaArrowAltCircleRight
                onClick={prevSlide}
                className="left__arrow" />

            <FaArrowAltCircleLeft
                onClick={nextSlide}
                className="right__arrow" />

            { data.map((image, index) => (
               <div className={ index === currentImage ? 'slide active' : 'slide'  } key={ index } >  
               { index === currentImage && <img
                    key={index}
                    src={image.img}
                    alt="img"
                    className="image"
                />}
               </div>
            ))}
        </section>
    )
}
