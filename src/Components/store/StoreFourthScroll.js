import React from 'react'

export default function StoreFourthScroll({key,name,title,description,img,black}) {
  return (
    <>
    {!black && <div className='store--fourth--scroll--card' key={key}>
    {name && <p className='store--fourth--scroll--name'>{name}</p>}
    {title && <h3 className='store--fourth--scroll--title'>{title}</h3>}
    {description && <p className='store--fourth--scroll--description'>{description}</p>}
    <img src={img} alt=''/>
    </div>}
    {black && <div className='store--fourth--scroll--card' key={key}>
    {name && <p className='store--fourth--scroll--name--black'>{name}</p>}
    {title && <h3 className='store--fourth--scroll--title--black'>{title}</h3>}
    {description && <p className='store--fourth--scroll--description--black'>{description}</p>}
    <img src={img} alt=''/>
    </div>}
    </>
  )
}
