import React from 'react'
export default function About(props) {
   const { name, age,setName,setAge } = props;
  
  return (
    
   <>
   
   Name:{name} <br></br> Age:{age}
   </>
  )
}
