import React from 'react'
import { Slider } from './components/Slider'
import { SliderData } from './data'



const App = () => {
  return (
    <div>
      <Slider data={ SliderData } />
    </div>
  )
}

export default App
