import React from 'react'
import{useNavigate} from 'react-router-dom'

export default function Child(props) {
   
    const { name, age,setName,setAge } = props;
    const navigate = useNavigate();
  return (
    
    <>
  <input type = "text" name={name} value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter the name here:'/>
  <input type = "text" age={age} value={age} onChange={(e) => setAge(e.target.value)} placeholder='Enter the age here:' />
   <button onClick ={() => navigate('/about')}>
      Submit</button>
  Hello my name is {name} and my age is {age}.
    </>
  )
}
