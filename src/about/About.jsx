import './about.css'

export default function About() {
  return (
    <div className='About mt-5'>
      <div className='container'>
        <div className='row d-flex justify-content-around align-items-center'>
            <div className='col-sm-6 col-10 placeHolder mb-3'>
            <img src="https://storystellar.com/wp-content/uploads/2021/09/Tournage-Storystellar-no-logo-1.jpeg" className="img-fluid immg" alt="Qui sommes-nous"/>
            </div>
            <div className='col-sm-6 col-9'>
                <h2 className='helvetica mt-0 mb-2 mx-0 px-0'>Qui Sommes-Nous</h2>
                <p className='txt'> Storyscope est une plateforme en ligne qui permet aux entreprises de trouver rapidement et facilement une agence de marketing ou de communication adaptée à leurs besoins. La plateforme fonctionne en mettant en relation les entreprises avec une sélection d'agences triées sur le volet en fonction de leurs besoins spécifiques. </p> 
                <p className='txt'>Pour utiliser Storyscope, les entreprises remplissent un formulaire en ligne qui décrit leur projet ou leur besoin en termes de marketing ou de communication. Ensuite, la plateforme utilise un algorithme sophistiqué pour trouver les agences les plus pertinentes en fonction des critères spécifiés par l'entreprise, tels que la taille de l'agence, le budget, la localisation géographique et les compétences requises.</p>
                <p className='txt'>Une fois que la liste d'agences a été générée, l'entreprise peut facilement comparer les différentes offres et choisir celle qui correspond le mieux à ses besoins.</p>
            </div>
        </div>
      </div>
    </div>
  )
}
