import './WebProject.css'
import cosmosproject from '../assets/cosmosproject.png'
import TechSkillsLogo from '../utils/TechSkillsLogo.js'
import { FaArrowRight, FaLocationArrow } from "react-icons/fa";
import { Link } from 'react-router-dom'

function WebProject() {
    return(
        <>
            <div className='project-section' id='projects' >
                <h1 className='centered-title hidden hidden-up'>Web Project</h1> 
                <div className='cosmos'>
                <Link to="https://cosmos-updated.vercel.app/" target="_blank" rel="noopener noreferrer">   
                    <div className='cosmos-image hidden hidden-left '>
                        <img className='cosmos-mockup' src={cosmosproject} alt="" />
                        <span className="overlay-text"><FaLocationArrow /> View Website</span>
                    </div>
                </Link>     
                    <div className='information hidden hidden-left'>
                        <h2>Cosmos NFT Marketplace</h2>
                        <p className='description'>I built this NFT marketplace mockup using React to get a feel for how these platforms handle complex UI and user interactions. While it doesn't process live blockchain transactions, it simulates the trading experience—everything from browsing collections to the interaction of making a trade. It was a great way to practice managing state and building a clean, responsive interface for a Web3 environment.</p>
                        <p className='built'>Technology Used:</p>
                        <div className='tech-used'>
                            <div className='tech'>
                                <img src={TechSkillsLogo[6].icon} alt="" />
                                <p>HTML</p>
                            </div>
                            <div className='tech'>
                                <img src={TechSkillsLogo[2].icon} alt="" />
                                <p>CSS</p>
                            </div>
                            <div className='tech'>
                                <img src={TechSkillsLogo[19].icon} alt="" />
                                <p>JavaScript</p>
                            </div>
                            <div className='tech'>
                                <img src={TechSkillsLogo[13].icon} alt="" />
                                <p>React</p>
                            </div>
                        </div>
                        <button onClick={() => window.open("https://www.instagram.com/billyargeelll/", "_blank")}><FaArrowRight /> VIEW WEBSITE</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WebProject