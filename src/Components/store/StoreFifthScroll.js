import LocalShippingIcon from '@mui/icons-material/LocalShipping';

export default function StoreFifthScroll({ 
    key,
    color,
    linearGradient,
    icon,
    descriptionOne,
    descriptionTwo,
    spanOne,
    spanTwo,}) {
  return (
    <>
    {!linearGradient && <div className='store--fifth--scroll--card' key={key}>
        <div className="icon" style={{color:color}}>{icon}</div>
        <p>{descriptionOne &&<p>{descriptionOne}</p>} {spanOne && <span style={{color:color}}>{spanOne}</span>} {descriptionTwo &&<p>{descriptionTwo}</p>} {spanTwo && <span style={{color:color}}>{spanTwo}</span>}</p>
    </div>}
    {linearGradient && <div className='store--fifth--scroll--card'>
        <div className="icon-gradient">{icon}</div>
        <p>{descriptionOne &&<p>{descriptionOne}</p>} {spanOne && <span className='gradient--text'>{spanOne}</span>} {descriptionTwo &&<p>{descriptionTwo}</p>} {spanTwo && <span className='gradient--text'>{spanTwo}</span>}</p>
    </div>}
    </>
  )
}   

// style={{color:{color}}}