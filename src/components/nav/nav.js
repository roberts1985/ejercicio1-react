import './nav.css'
import logo from '../../images/logo.svg'

const Nav = () => {
    return (
        <nav>
        <div id="nav-image">
            <img src={logo} alt=""/>
        </div>
        <div id="nav-menu">
            <ul>
                <li>Features</li>
                <li>Company</li>
                <li>Careers</li>
                <li>About</li>
            </ul>
            <div id="nav-btn">
                <button id="btn-login">
                    Login
                </button>
                <button id="btn-register">
                    Register
                </button>
            </div>
        </div>
    </nav>
    )
}

export default Nav