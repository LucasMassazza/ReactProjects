import { useState } from 'preact/hooks'
import { Navbar } from './components/navbar'
import './index.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
    </>
  )
}
