import './App.css'
import About from './components/About'
import Dashboard from './components/Dashboard'
import Home from './components/home'
import Protect from './components/Protect'
import {Routes , Route} from 'react-router-dom'

function App() {
  //React component reusability
  return (
    <>
    {/* nesting or nested routes */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>



      <Route path='/dashboard' element={<Dashboard/>}>
      <Route index element ={<Dashboard/>}/>
       <Route path='protect' element={<Protect/>}/>
       </Route>


      <Route path='*' element ={<h1> 404 not found</h1>}/>
      
    </Routes>
    {/* <About/>
    <Protect/>
    <Home/> */}
    </>
  )
}

export default App
