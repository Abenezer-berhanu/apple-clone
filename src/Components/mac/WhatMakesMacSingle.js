import {Link} from "react-router-dom"

export default function WhatMakesMacSingle({title,description,information,img,className}) {
  const arrow = ">";
  
    return (
    <div className={className}>
    <div className='text--container'>
    {information && <h4>{information}</h4>}
    {title && <h2 className="new-line">{title}</h2>}
    {description && <p className="new-line">{description}</p>}
    <Link>Learn more {arrow}</Link>
    </div>
    {img && <img src={img} alt="" />}
    </div>
  )
}
