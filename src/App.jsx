import { Outlet } from "react-router-dom"
import Players from "./components/Players"
import Teams from "./components/Teams"

function App() {
  

  return (
    <>
      <div>
        <h1>IPL AUCTION</h1>
      </div>
      <Outlet></Outlet>
      

    </>
  )
}

export default App
