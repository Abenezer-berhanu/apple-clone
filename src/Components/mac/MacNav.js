import React from 'react'

export default function MacNav({icon , name, key}) {
  return (
    <div className='mac--nav--card' key={key}>
      <div>{icon}</div>
      <p>{name}</p>
    </div>
  )
}
