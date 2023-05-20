import {Link} from 'react-router-dom'


export default function IphoneWallpaper({status,name,type,img,black}) {
    const arrow = '>';
  return (
    <div className={black ? 'iphone--first--wallpaper--card--black' : 'iphone--first--wallpaper--card'}>
      <div className="text">
      {status && <p>{status}</p>}
      {name && <h2>{name}</h2>}
      {type && <h1  className='new-line'>{type}</h1>}
      <button>Buy</button>
      <Link>Learn More {arrow}</Link>
      </div>
      <img src={img} alt="" />
    </div>
  )
}
