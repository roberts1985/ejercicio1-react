import './section.css'
import databiz from '../../images/client-databiz.svg'
import audioPhile from '../../images/client-audiophile.svg'
import meet from '../../images/client-meet.svg'
import maker from '../../images/client-maker.svg'
import imageHero from '../../images/image-hero-desktop.png'

const Section = () => {
    return (
        <section id="main-section">
            <div id="div-left">
                <h1>Make <br /> remote work</h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, iure?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, debitis?
                </p>
                <button>Learn more</button>
                <div id="div__left-images">
                    <img src={databiz} alt="" />
                    <img src={audioPhile} alt="" />
                    <img src={meet} alt="" />
                    <img src={maker} alt="" />
                </div>
            </div>
            <div id="div-rigth">
                <img src={imageHero} alt="" />
            </div>
        </section>
    )
}

export default Section