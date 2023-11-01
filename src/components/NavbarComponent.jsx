import { useNavigate } from 'react-router-dom';

export const NavbarComponent = () => {
  const navigate = useNavigate();

  const handleNav = (e, url) => {
    e.preventDefault();
    navigate( url );
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-dark bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="../" onClick={ e => handleNav(e, '../')}>Home</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse d-flex" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Programs
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="../text-length" onClick={ (e) => handleNav(e, '../text-length')}>Text Length</a></li>
                        <li><a className="dropdown-item" href="../cut-off" onClick={ (e) => handleNav(e, '../cut-off')}>Cut Off</a></li>
                        <li><a className="dropdown-item" href="../split-text" onClick={ (e) => handleNav(e, '../split-text')}>Split Text</a></li>
                        <li><a className="dropdown-item" href="../apply-discount" onClick={ (e) => handleNav(e, '../apply-discount')}>Apply Discount</a></li>
                        <li><a className="dropdown-item" href="../get-age" onClick={ (e) => handleNav(e, '../get-age')}>Get Age</a></li>
                        <li><a className="dropdown-item" href="../roman-numbers" onClick={ (e) => handleNav(e, '../roman-numbers')}>Roman Numbers</a></li>
                        <li><a className="dropdown-item" href="../binary" onClick={ (e) => handleNav(e, '../binary')}>Binary</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="../get-vocals" onClick={ (e) => handleNav(e, '../get-vocals')}>Get vocals</a></li>
                        <li><a className="dropdown-item" href="../palindrome" onClick={ (e) => handleNav(e, '../palindrome')}>Palindrome</a></li>
                        <li><a className="dropdown-item" href="../substract-spaces" onClick={ (e) => handleNav(e, '../substract-spaces')}>Substract Spaces</a></li>
                        <li><a className="dropdown-item" href="../initials" onClick={ (e) => handleNav(e, '../initials')}>Initials</a></li>
                        <li><a className="dropdown-item" href="../count-words" onClick={ (e) => handleNav(e, '../count-words')}>Count Words</a></li>
                        <li><a className="dropdown-item" href="../capitalize-first-letter" onClick={ (e) => handleNav(e, '../capitalize-first-letter')}>Cafitalize first letter</a></li>
                        <li><a className="dropdown-item" href="../reverse-string" onClick={ (e) => handleNav(e, '../reverse-string')}>Reverse String</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="../add-numbers" onClick={ (e) => handleNav(e, '../add-numbers')}>Add Numbers</a></li>
                        <li><a className="dropdown-item" href="../oldest-and-youngest" onClick={ (e) => handleNav(e, '../oldest-and-youngest')}>Oldest and Youngest</a></li>
                        <li><a className="dropdown-item" href="../notes-ranking" onClick={ (e) => handleNav(e, '../notes-ranking')}>Notes Ranking</a></li>
                        <li><a className="dropdown-item" href="../figures" onClick={ (e) => handleNav(e, '../figures')}>Cifras</a></li>
                        <li><a className="dropdown-item" href="../prime-numbers" onClick={ (e) => handleNav(e, '../prime-numbers')}>Primos</a></li>
                        <li><a className="dropdown-item" href="../rock-paper-scissors" onClick={ (e) => handleNav(e, '../rock-paper-scissors')}>Piedra, Papel o Tijera</a></li>
                        <li><a className="dropdown-item" href="../timer-message" onClick={ (e) => handleNav(e, '../timer-message')}>Timer Message</a></li>
                    </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

