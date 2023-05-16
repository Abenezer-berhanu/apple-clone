import { Link } from "react-router-dom"
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

export default function FirstWallpaper() {
    const arrow = ">";
  return (
    <div className="ipad--first--wallpaper">
      <img src="./images/firstLeft.png" alt=""/>
      <div className="text">
      <p>Introducing</p>
      <h1>Final Cut Pro <br/> and Logic Pro <br/> for iPad</h1>
      <Link>Learn more about Final Cut Pro for iPad {arrow}</Link>
      <Link>Learn more about Logic Pro for iPad {arrow}</Link>
      <Link>Watch the film <PlayCircleIcon/></Link>
      </div>
      <img src="./images/firstRight.png" alt=""/>
    </div>
  )
}
