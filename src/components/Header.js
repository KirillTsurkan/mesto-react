import logo from '../images/mesto_logo.svg';



function Header () {
  return(
  <header className="header section page__header">
        <img className="header__logo" src={logo} alt="логотип mesto"/>
    </header>
  )}

export default Header
