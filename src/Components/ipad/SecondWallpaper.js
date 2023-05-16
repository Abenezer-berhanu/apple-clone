import { Link } from "react-router-dom"


export default function SecondWallpaper() {
    const arrow = '>';
  return (
    <div className="second--wallpaper--card">
      <img src="./images/macCurve.png" alt="" />
      <div className="text">
      <p>NEW</p>
      <h1>iPad</h1>
      <h3>Lovable. Drawable. <br/> Magical.</h3>
      <h4>From $449</h4>
      <button>BUY</button>
      <Link>Learn more {arrow}</Link>
      </div>
    </div>
  )
}
