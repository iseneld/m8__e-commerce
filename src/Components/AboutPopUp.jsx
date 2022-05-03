import AboutTitle from './AboutParagraphs/AboutTitle';
import AboutPar2 from './AboutParagraphs/AboutPar2';
import AboutPar3 from './AboutParagraphs/AboutPar3';
import AboutPar1 from './AboutParagraphs/AboutPar1';
import AboutPar4 from './AboutParagraphs/AboutPar4';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const AboutPopUp = () => {

    const [popUpHidden, setPopUpHidden] = useState("false");

    const togglePopUp = () => {
        setPopUpHidden(!popUpHidden)
    }



    return (
        <div className={popUpHidden ? "faded-background-container" : "hide-pop-up"} >
            <div className="pop-up-display">
                <section className="about-content">

                    <Link to="/"><span class="close-button" /* onClick={togglePopUp}  */ >&times;</span></Link>

                    <section className="about-title-desc">
                        <AboutTitle />
                    </section>

                    <section className="about-section">
                        <div className="about-1">
                            <AboutPar1 />
                        </div>
                        <div className="about-1">
                            <AboutPar2 />
                        </div>
                        <div className="about-1">
                            <AboutPar3 />
                        </div>
                        <div className="about-1">
                            <AboutPar4 />
                        </div>
                    </section>
                </section>
            </div>
        </div>
    )
}
export default AboutPopUp;