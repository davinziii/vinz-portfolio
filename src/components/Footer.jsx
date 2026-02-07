import './Footer.css'
import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import gmail from '../assets/gmail.png'

function Footer() {
    return(
        <>
            <div className='footer' id='work-with-me'>
                <div className='availability hidden hidden-up'>
                    <div className='green'></div>
                    <p>Available for Work</p>
                </div>
                <h1 className='centered-title hidden hidden-up'>LET'S WORK TOGETHER</h1>
                <button  onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=vinzdeleon.work@gmail.com&subject=Work", "_blank")} className='send-email hidden hidden-up'>SEND ME AN EMAIL</button>
                <div className='social-media hidden hidden-up'>
                    <button onClick={() => window.open("https://www.linkedin.com/in/vinz-de-leon-a43312270/", "_blank")}><FaLinkedin /> LINKEDIN</button>
                </div>
            </div>
        </>
    )
}

export default Footer