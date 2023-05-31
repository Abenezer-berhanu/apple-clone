import LocalShippingIcon from '@mui/icons-material/LocalShipping';

export default function StoreFifthScroll({ data}) {
  return (
    <>
    {!data.linearGradient && <div className='store--fifth--scroll--card' key={data.key}>
        <div className="icon" style={{color:data.color}}>{data.icon}</div>
        <p>{data.descriptionOne &&<p>{data.descriptionOne}</p>} {data.spanOne && <span style={{color:data.color}}>{data.spanOne}</span>} {data.descriptionTwo &&<p>{data.descriptionTwo}</p>} {data.spanTwo && <span style={{color:data.color}}>{data.spanTwo}</span>}</p>
    </div>}
    {data.linearGradient && <div className='store--fifth--scroll--card'>
        <div className="icon-gradient">{data.icon}</div>
        <p>{data.descriptionOne &&<p>{data.descriptionOne}</p>} {data.spanOne && <span className='gradient--text'>{data.spanOne}</span>} {data.descriptionTwo &&<p>{data.descriptionTwo}</p>} {data.spanTwo && <span className='gradient--text'>{data.spanTwo}</span>}</p>
    </div>}
    </>
  )
}   
