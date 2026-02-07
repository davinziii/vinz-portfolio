import './DesignProject.css'
import profile from '../assets/profile.jpg'
import okdprofile from '../assets/okd.png'
import marms from '../assets/marms.png'
import { useState } from 'react'
import profileGallery from '../utils/ProfileGallery'
import okdGallery from '../utils/OKDGallery'
import marmsGallery from '../utils/MarmsGallery'

function DesignProject() {

    const [activeGallery, setActiveGallery] = useState('profile')
    const [isVisible, setIsVisible] = useState(true)

    const handleGallery = (galleryName) => {

        if (galleryName === activeGallery) return

        setIsVisible(false) 

        setTimeout(() => {
            setActiveGallery(galleryName)
            setIsVisible(true) 
        }, 300) 
    }

    const galleryData = {
        profile: (
            <div className='gallery-content grid1'>
                <div className='box profile1'><img src={profileGallery[0].icon} alt=""/></div>
                <div className='box profile2'><img src={profileGallery[5].icon} alt=""/></div>
                <div className='box profile3'><img src={profileGallery[3].icon} alt=""/></div>
                <div className='box profile4'><img src={profileGallery[6].icon} alt=""/></div>
                <div className='box profile5'><img src={profileGallery[4].icon} alt=""/></div>
                <div className='box profile6'><img src={profileGallery[1].icon} alt=""/></div>
                <div className='box profile7'><img src={profileGallery[2].icon} alt=""/></div>
                <div className='box profile8'><img src={profileGallery[7].icon} alt=""/></div>
                <div className='box profile9'><img src={profileGallery[8].icon} alt=""/></div>
            </div>
        ),
        okd: (
            <div className='gallery-content grid2'>
                <div className='box okd1'><img src={okdGallery[0].icon} alt=""/></div>
                <div className='box okd2'><img src={okdGallery[7].icon} alt=""/></div>
                <div className='box okd3'><img src={okdGallery[2].icon} alt=""/></div>
                <div className='box okd4'><img src={okdGallery[3].icon} alt=""/></div>
                <div className='box okd5'><img src={okdGallery[4].icon} alt=""/></div>
                <div className='box okd6'><img src={okdGallery[5].icon} alt=""/></div>
                <div className='box okd7'><img src={okdGallery[6].icon} alt=""/></div>
                <div className='box okd8'><img src={okdGallery[1].icon} alt=""/></div>
                <div className='box okd9'><img src={okdGallery[8].icon} alt=""/></div>
            </div>
        ),
        marms: (
            <div className='gallery-content grid3'>
                <div className='box marms1'><img src={marmsGallery[0].icon} alt=""/></div>
                <div className='box marms2'><img src={marmsGallery[5].icon} alt=""/></div>
                <div className='box marms3'><img src={marmsGallery[2].icon} alt=""/></div>
                <div className='box marms4'><img src={marmsGallery[3].icon} alt=""/></div>
                <div className='box marms5'><img src={marmsGallery[4].icon} alt=""/></div>
                <div className='box marms6'><img src={marmsGallery[1].icon} alt=""/></div>
            </div>
        )
    }

    return(
        <>
            <div className='design-project'>
                <h1 className='centered-title hidden hidden-up'>Drawing and Animation Projects</h1>
                <div className='card hidden hidden-up'>
                    <img id='profile' src={profile} onClick={() => handleGallery("profile")} className={activeGallery === "profile" ? "active" : "inactive"} alt="" draggable={false} />
                    <img id='okd' src={okdprofile} onClick={() => handleGallery("okd")} className={activeGallery === "okd" ? "active" : "inactive"} alt="" draggable={false} />
                    <img id='marms' src={marms} onClick={() => handleGallery("marms")} className={activeGallery === "marms" ? "active" : "inactive"} alt="" draggable={false} />
                </div>
                <div className='gallery-container hidden hidden-up'>
                    <div className={`gallery ${isVisible ? "show" : "hide"}`}>
                        {galleryData[activeGallery]}
                    </div>
                </div>
            </div>
        </>
    )
}

export default DesignProject