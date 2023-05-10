import React from 'react'

export default function StoreThirdScroll({key,img ,black,name,status,title,description}) {
  return (
    <div id='store--third--scroll--card'>
    {!black && <div className='store--third--scroll--card' key={key}>
      {name && <p className='store--third--scroll--name'>{name}</p>}
      {status && <p className='store--third--scroll--status'>{status}</p>}
      {title && <h3 className='store--third--scroll--title'>{title}</h3>}
      {description && <p className='store--third--scroll--description'>{description}</p>}
      <img src={img} alt=''/>
    </div>}
    {black && <div className='store--third--scroll--card'>
    {name && <p className='store--third--scroll--name--black'>{name}</p>}
    {status && <p className='store--third--scroll--status--black'>{status}</p>}
    {title && <h3 className='store--third--scroll--title--black'>{title}</h3>}
    {description && <p className='store--third--scroll--description--black'>{description}</p>}
    <img src={img} alt=''/>
    </div>}
    </div>
  )

}
