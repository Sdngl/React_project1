import './App.css'
import  {useState} from 'react'
import About from './components/About'
import Child from './components/Child'
import Dashboard from './components/Dashboard'
import Home from './components/home'
import Parent from './components/Parent'
import Protect from './components/Protect'
import {Routes , Route} from 'react-router-dom'

function App() {
 const[name,setName] = useState("")
  const[age,setAge] = useState()
  //React component reusability
  return (
    <>
    {/* nesting or nested routes */}
    <Routes>
      <Route path='/' element={<Home/>}/>
   <Route path='/about' element ={<About name={name} age={age} setName={setName} setAge={setAge}/>}/>



      <Route path='/dashboard' element={<Dashboard/>}>
      <Route index element ={<Dashboard/>}/>
       <Route path='protect' element={<Protect/>}/>
       </Route>

<Route path='/parent' element ={<Parent/>}/>
<Route path='/child' element ={<Child name={name} age={age} setName={setName} setAge={setAge}/>}/>
      <Route path='*' element ={<h1> 404 not found</h1>}/>
      
    </Routes>
    {/* <About/>
    <Protect/>
    <Home/> */}
    </>
  )
}

export default App
