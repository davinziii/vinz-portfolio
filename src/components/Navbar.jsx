import './Navbar.css'
import Logo from '../assets/logo.jpg'
import { Link } from 'react-scroll'

function Navbar() {
    return(
        <>
            <div className='navbar'>
                <div className='logo'>
                    <img id="logo" src={Logo} alt="profilelogo" />
                    <p>Vinz de Leon</p>
                </div>
                <div className='sections'>
                    <Link to='home' smooth={true} duration={500} offset={-300} ><span>Home</span></Link>
                    <Link to='projects' smooth={true} duration={300} offset={-250} ><span>Projects</span></Link>
                    <Link to='work-with-me' smooth={true} duration={500} ><span className='work-with-me'>Work With Me</span></Link>
                </div>
            </div>
        </>
    )
}

export default Navbar