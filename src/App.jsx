import { useState } from 'react'
import { SignupForm } from './Components/SignupForm'
import Root from './Root'
import Home from './Components/Home'
import Hero from './Components/Hero'
import Articles from './Components/Articles'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero/>
      <Articles/>
    </>
  )
}

export default App
