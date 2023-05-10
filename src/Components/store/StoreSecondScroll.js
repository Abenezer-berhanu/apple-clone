import React from 'react'

export default function StoreSecondScroll({key,className,name,title,description,img}) {
  return (
    <div className={className} key={key}>
        <span>{name}</span>
        <h3>{title}</h3>
        <p>{description}</p>
        <img src={img} alt=""/>
    </div>
  )
}
