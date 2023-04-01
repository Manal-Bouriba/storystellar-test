import './card.css'
import { Link } from 'react-router-dom'
export default function Card(props) {
  return (
    <Link className='no-deco-card' to={props.url}>
    <div className='crd mb-4'>
      
        <img className='ico' src={props.picUrl} alt='icon'/>
        <p className='crd-txt inter'>{props.text}</p>
      
    </div>
    </Link>
  )
}
