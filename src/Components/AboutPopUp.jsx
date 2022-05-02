import AboutTitle from './AboutParagraphs/AboutTitle';
import AboutPar2 from './AboutParagraphs/AboutPar2';
import AboutPar3 from './AboutParagraphs/AboutPar3';
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

                    <span class="close-button" onClick={togglePopUp}>&times;</span>

                    <section className="about-title-desc about-title-desc--popup">
                        <AboutTitle />
                    </section>

                    <section className="about-section">
                        <div className="about-1">
                            <AboutPar2 />
                        </div>
                        <div className="about-1">
                            <AboutPar3 />
                        </div>
                    </section>

                    <h3>Close this pop-up to get started!</h3>

                </section>
            </div>

        </div>
    )
}
export default AboutPopUp;