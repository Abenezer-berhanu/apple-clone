
import React, { useState } from 'react'

export default function WhichMacTitle({onclick}) {

const [active , setActive] = useState(true)

  return (
    <div className='mac--laptop--desktop--choice--conatiner'>
      <h2>Which Mac is right for you?</h2>
      <ul>
      <li className={active ? "active" : ""} onClick={()=>{
        setActive(!active)
        onclick()
      }}>Laptop</li>
      <li className={!active ? "active" : ""} onClick={()=>{
        setActive(!active)
        onclick()
      }}>desktop</li>
      </ul>
    </div>
  )
}

