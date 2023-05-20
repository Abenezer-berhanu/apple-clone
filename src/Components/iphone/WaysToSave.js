import { Link } from "react-router-dom"

export default function WaysToSave({defination,linkText,img,information,title,description,buy,className}) {
  const arrow = '>';
  return (
    <div className={className}>
    <div className="text">
      {defination && <p className="new-line">{defination}</p>}
      {information && <h3 className="new-line">{information}</h3>}
      {title && <h2 className="new-line">{title}</h2>}
      {description && <h5 className="new-line">{description}</h5>}
      {buy && <Link>Buy {arrow}</Link>}
      <Link>{linkText} {arrow}</Link>
    </div>
    {img && <img src={img} alt="" />}
    </div>
  )
}
