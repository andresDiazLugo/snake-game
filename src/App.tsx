import { useState } from 'react'
import reactLogo from './assets/react.svg'
import NintendoConsole from './components/NintendoConsole/NintendoConsole'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
      <NintendoConsole/>
    </div>
  )
}

export default App
