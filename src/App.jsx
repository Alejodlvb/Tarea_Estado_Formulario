import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormularioPacientes from './Formulario'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FormularioPacientes/>
    </>
  )
}

export default App
