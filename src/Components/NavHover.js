import { useState } from "react"
import CloseIcon from '@mui/icons-material/Close';

export default function NavHover({className, onMouseOver, onMouseOut, hideNeasted}) {
  return (
    <div className={className} onMouseOver={onMouseOver}  onMouseOut={onMouseOut}>
        <div className="close--hover--nav" onClick={hideNeasted}><CloseIcon/></div>
        <div className="nav--hover--full">
            <h6>store</h6>
            <h2>Shop the Least</h2>
            <h2>Mac</h2>
            <h2>iPad</h2>
            <h2>iPhone</h2>
            <h2>Apple Watch</h2>
            <h2>Accessories</h2>
        </div>
        <div>
            <h6>Quick Links</h6>
            <p>Find a store</p>
            <p>Order Status</p>
            <p>Financing</p>
            <p>Apple Trade in</p>
        </div>
        <div>
            <h6>Store special store</h6>
            <p>Certified </p>
            <p>Education</p>
            <p>Bussiness</p>
            <p>Veteranss and Millitary</p>
            <p>Government</p>
        </div>
    </div>
  )
}
