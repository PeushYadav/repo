import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import gavel from './assets/gavel.svg';
import Navbar from './components/navbar'
import Mainpage from './components/mainpage'
import Firstcard from './components/card'
import Secondcard from './components/card2'
import Footer2 from './components/footer';

function App() {
  const [counter, setCounter] = useState(15)

  const addValue = () => {
    console.log("clicked", counter)
    setCounter(counter + 1)
  }

  return (
    <>
      <Navbar />
      <Mainpage />
      <Firstcard/>
      <Secondcard/>
      <Footer2/>
    </>
  )
}

export default App
