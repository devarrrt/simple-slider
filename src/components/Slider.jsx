import React, { useState } from 'react'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'




export const Slider = ({ data }) => {
const [ currentImage, setCurrentImage ] = useState(0)
const dataLength = data.length


const nextButton = () => {
    setCurrentImage( currentImage === dataLength - 1 ? 0 : currentImage + 1 )
} // когда нажимаем на кнопку вперед, у нас: находится последний элемент массива с помощью dataLength - 1 . и если элемент действительно последний, то выводится первый элемент. иначе прибавляется 


const prevButton = ( )=> {
    setCurrentImage( currentImage === 0 ? dataLength - 1 : currentImage - 1 )
} // когда мы щелкаем назад, работает условие: если текущая картинка является первой, то мы берем последний элемент с помощью  dataLength - 1, иначе, если элемент не первый, мы просто убавляем на один




    return (
        <div className="slider_wrapper">
            <FaArrowAltCircleRight
                onClick={nextButton}
                className="left__arrow" />
            <FaArrowAltCircleLeft
                onClick={prevButton}
                className="right__arrow" />
                
            { data.map((Image, index) => (
              <div key={ index } className={ index === currentImage ? 'slider active' : 'sllider' }>
                  {/* если высвечивается картинка с нужным индексом, то он принимает класс slider_active и его видно */}
                    { index === currentImage && <img
                    src={Image.img}
                    className="image"
                    alt="img"
                    key={index} />}
              </div>
            ))}
        </div>
    )
}
