import { BrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import PublicRouter from "./pages/PublicRouter"

function App() {

  return (
    <div className="w-full max-h-full mx-auto sm:w-[1440px] lg:mx-auto">
       <BrowserRouter>
        <PublicRouter />
       </BrowserRouter>
    </div>
  )
}

export default App