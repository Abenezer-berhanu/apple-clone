import AppleIcon from '@mui/icons-material/Apple';
import { Link } from "react-router-dom"

export default function IpadVideoTitle() {
    const arrow = ">";
  return (
    <div className='ipad--video--title--card'>
      <h1><AppleIcon sx={{ fontSize:60}}/>tv+</h1>
      <p className='new-line'>{`Get 3 months of Apple TV+ free \n when you buy an iPad.`}</p>
      <Link>Try if free &#8599;</Link>
      <Link>Learn more {arrow}</Link>
    </div>
  )
}
