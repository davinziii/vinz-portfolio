import './HeroSection.css'
import technicalSkills from '../utils/TechSkillsLogo.js'
import designTools from '../utils/DesignToolsLogo.js'
import { Link } from 'react-scroll'

function HeroSection() {
    return(
        <>
            <div className='hero' id='home' >
                <div className='hero-section'>
                    <h1 className='hidden hidden-left'>Animator &<br/> Creative Developer</h1>
                    <div className='text hidden hidden-up'>
                        <p>Aspiring semi full-stack developer and freelance animator with hands-on experience building responsive web interfaces and interactive frontend projects. Produced viral Web3 animations content reaching 30+ million views on Instagram and TikTok. </p>
                    </div>
                </div>
                <div className='hero-buttons hidden hidden-left'>
                    <Link to='work-with-me' smooth={true} duration={500} ><span className='work-with-me'>WORK WITH ME</span></Link>
                    <Link to='projects' smooth={true} duration={300} offset={-250} ><span className='see-works'>SEE WORKS</span></Link>
                </div>
                <div className='skills'>
                    <div className='technical-skills hidden hidden-up'>
                        <h1 className='centered-title'>TECHNICAL SKILLS</h1>
                        <div className='skill-lists'>
                        {technicalSkills.map((skill) => (
                            <div className='logo-format' key={skill.name}>
                                <img src={skill.icon} alt={skill.name} />
                            </div>
                        ))}
                        </div>
                    </div>
                    <div className='design-tools hidden hidden-up'>
                        <h1 className='centered-title'>DESIGN TOOLS</h1>
                        <div className='skill-lists'>
                        {designTools.map((skill) => (
                            <div className='logo-format' key={skill.name}>
                                <div className='icons'>
                                    <img src={skill.icon} alt={skill.name} />
                                    <p>{skill.name}</p>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection