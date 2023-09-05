import logoBanco from '../../../images/logo.jpg'
export default function Header () {
  return (
    <header className='cabecera'>
      <figure className='cabecera__contenedor__logoIndex'>
        <img id='logoIndex' src={logoBanco} alt='logo de ITBANK' />
      </figure>
      <h1 className='cabecera__titulo'>Homebanking</h1>
    </header>
  )
}
