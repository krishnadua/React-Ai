import React from 'react'
import { useState } from 'react'

function Usestate() {

    const[count,setcount]=useState(10)

  return (
      <>

      <p>you click {count} times</p>
      <button onClick={()=>{setcount(count+1)}}>add</button>
      <button onClick={()=>{setcount(count-1)}}>subtarct</button>

   </>



  )
}

export default Usestate