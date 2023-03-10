import './navBar.css'

export default function NavBar() {
  return (
    <div className='NavBar'>
      <div className='nav'>
        <p className='inter logo d-flex text-center text-md-start'>
          Storyscope
        </p>
      </div>
      <div className='container sm-gray'>
        <p className='helvetica headline text-center'>Trouvez l'<span className='blue'>agence parfaite</span> pour vos besoins en <br/>marketing / communication</p>
      </div>
    </div>
  )
}
