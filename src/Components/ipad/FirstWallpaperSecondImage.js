import {Link} from "react-router-dom"

export default function FirstWallpaperSecondImage() {
  return (
    <div className='frist--wallpaper--seond--image'>
      <div className="text">
      <p>New</p>
      <h1>iPad Pro</h1>
      <h3>Supercharged byM2 <img src="./images/m1.png" alt="" /></h3>
      <h4>From $799</h4>
      <button>buy</button>
      <Link>Learn more</Link>
      </div>
      <img src="./images/fristWallpaperSeondImage.png" alt="" />
    </div>
  )
}
