import { useEffect, useState } from "react"
import Header from "./layouts/Header"

function App() {
  
  // CADA COMPONENTE TEM SEU ESTADOS.
  const [contador, setContador] = useState(1)
  const [tema, setTema] = useState('light')
  
  function aumentar() {
    setContador(contador + 1)
  }
  function diminuir() {
    setContador(contador - 1)
  }

  function trocarTema() {
    if(tema === 'light') {
      setTema('dark')
    } else {
      setTema('light')
    }
  }

  useEffect(() => {
    if(contador === 11 || contador < 1) {
      setContador(1)
    }
  }, [contador])

  return (
    <div id={tema}>
      {tema}
      <button onClick={() => trocarTema()}>
        {tema === 'light' ? 'Escuro' : 'Claro'}
      </button>
      <h1>FDEV009 - {contador}</h1>
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={diminuir}>Diminuir</button>
      <Header />
    </div>
  )
}

export default App
