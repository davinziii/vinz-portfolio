import './HomePage.css'
import HeroSection from "../layout/HeroSection";
import Navbar from "../components/Navbar";
import WebProject from '../layout/WebProject'
import DesignProject from "../layout/DesignProject";
import Footer from "../components/Footer";
import { useEffect, useRef } from "react";

function HomePage() {


    useEffect(() => {
        const observer = new IntersectionObserver((entries) =>{
            
            entries.forEach((entry) => {

                if(entry.isIntersecting && entry.target.classList.contains('hidden-left')) {
                    entry.target.classList.add('show-left')

                    setTimeout(() => {
                        entry.target.classList.remove('hidden-left');
                    }, 2000);
                } else if(entry.isIntersecting && entry.target.classList.contains('hidden-up')) {
                    entry.target.classList.add('show-up')

                    setTimeout(() => {
                        entry.target.classList.remove('hidden-up');
                    }, 2000);
                }
            })
        })

        const hiddenElements = document.querySelectorAll('.hidden')
        hiddenElements.forEach((el) => observer.observe(el))
    })

    return(
        <>
            <Navbar  />
            <HeroSection />
            <WebProject />
            <DesignProject/>
            <Footer />
        </>
    )
}

export default HomePage