import React from 'react'
import{useNavigate} from 'react-router-dom'
export default function Home() {
  const navigate = useNavigate();
  return (
    <>
    <input type="text" placeholder='Enter name'/>
    <input type="number" placeholder='Enter age'/>
    <button onClick ={() => navigate('/about')}>
      Submit</button>
    </>
    
  )
}
