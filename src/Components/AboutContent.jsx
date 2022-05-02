import AboutPar1 from "./AboutParagraphs/AboutPar1";
import AboutPar2 from "./AboutParagraphs/AboutPar2";
import AboutPar3 from "./AboutParagraphs/AboutPar3";
import AboutPar4 from "./AboutParagraphs/AboutPar4";
import AboutTitle from "./AboutParagraphs/AboutTitle";

const AboutContent = () => {
    return (
        <section className="about-content">
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

    )
}
export default AboutContent;