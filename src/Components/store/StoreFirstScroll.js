import React from 'react'

export default function StoreFirstScroll({name , img, id}) {
  return (
    <div className='store--first--scroll--card' key={id}>
    <img src={img} alt=''/>
    <p>{name}</p>
    </div>
  )
}
