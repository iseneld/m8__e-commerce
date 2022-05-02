import AboutContent from './AboutContent';
import AboutTitle from './AboutParagraphs/AboutTitle';
import AboutPar2 from './AboutParagraphs/AboutPar2';
import AboutPar3 from './AboutParagraphs/AboutPar3';

const AboutPopUp = () => {
    return (
        <div className="faded-background-container">
            <div className="pop-up-display">
                <section className="about-content">

                    <span class="close-button">&times; </span>

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