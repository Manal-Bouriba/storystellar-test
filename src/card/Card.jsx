import './card.css'
import { Link } from 'react-router-dom'
export default function Card(props) {
  return (
    
    <div className='crd'>
      <Link className='no-deco' to={props.url}>
        <img className='ico' src={props.picUrl} alt='icon'/>
        <p className='crd-txt helvetica'>{props.text}</p>
      </Link>
    </div>

  )
}
