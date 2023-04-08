import './navBar.css'

export default function NavBar() {
  return (
    <div className='NavBar'>
      <header className='nav'>
        <p className='inter logo d-flex text-center text-md-start'>
          <a className='no-deco' href='/storyscope'> Storyscope</a> 
        </p>
      </header>
      <div className='container sm-gray'>
        <h1 className='helvetica headline text-center'>Trouvez l'<span className='blue'>agence parfaite</span> pour vos besoins en <br/>marketing / communication</h1>
      </div>
    </div>
  )
}
