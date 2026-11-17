import Header from "./components/Header/Header"
import { perfil } from "./data/perfil.js"

function App() {

  return (
    <>
    <Header usuario={perfil.usuario}/>

    </>
  )

}

export default App
