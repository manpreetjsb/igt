import React from 'react'
//import { CustomThemeContext } from './Theme/CustomThemeProvider'
import Footer from './components/Footer/'
import Header from './components/Header'
import CarouselSection from './components/Carousel/CarouselSection'
import Newsletter from './components/Newsletter'
import CodeSection from './components/Code'
import OrderButton from './components/Button'
import Cards from './components/Cards'
import TwoCards from './components/TwoCards'

import { BgBlueColor } from './App.styles'

const App = () => {
  /*  const classes = useStyles()
  const { currentTheme, setTheme } = useContext(CustomThemeContext)
  const isDark = Boolean(currentTheme === 'dark') */

  /*   const handleThemeChange = (event) => {
    const { checked } = event.target
    if (checked) {
      setTheme('dark')
    } else {
      setTheme('normal')
    }
  } */
  return (
    <div>
      <Header />
      <CarouselSection />
      <BgBlueColor>
        <TwoCards />
        <Cards />
        <OrderButton />
      </BgBlueColor>
      <Newsletter />
      <CodeSection />
      <Footer />
    </div>
  )
}

export default App
