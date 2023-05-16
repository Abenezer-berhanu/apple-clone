import {Link} from "react-router-dom"   

export default function IpadTypesTitle() {
    const arrow = '>';
  return (
    <div className="ipad--types--card">
      <div className="title">
      <h1>Which iPad is right <br/> for you?</h1>
      <Link>Compare all iPad models {arrow}</Link>
      <Link>Shop iPad {arrow}</Link>
      </div>
      
    </div>
  )
}
