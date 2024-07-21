import { useEffect } from "react"
import Aos from 'aos';
import "./Hero.scss"
const Hero = () => {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <section className="hero container">
            <div data-aos-delay="500" data-aos-duration="700" data-aos="fade-left" className="hero-content">
                <h2 className="title">Karyera</h2>
                <h5 className="subtitle">Karyera</h5>
            </div>
    </section>
  )
}

export default Hero
