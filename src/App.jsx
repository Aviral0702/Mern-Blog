import { useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Home from './Pages/Home'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path = "/" element={<Home/>} />
          <Route path = "/dashboard" element={<Dashboard/>} />
          <Route path = "/signin" element={<SignIn/>} />
          <Route path = "/signup" element={<SignUp/>} />
          <Route path = "/about" element={<About/>} />
          <Route path = "/projects" element={<Projects/>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
