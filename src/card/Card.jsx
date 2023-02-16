import './card.css'

export default function Card(props) {
  return (
    <div className='crd'>
      <img className='ico' src={props.picUrl} alt='icon'/>
      <p className='crd-txt helvetica'>{props.text}</p>
    </div>
  )
}
