import {BiArrowFromTop, BiArrowToTop} from "react-icons/bi";
import {useState} from 'react';

function PosterInventory () {
    function importAll(r) {
        let imagesTemp = {};
        r.keys().map((item, index) => { imagesTemp[item.replace('./', '')] = r(item); });
        return imagesTemp;
    }

    const images = importAll(require.context('../Styles/css-content/posters', false, /\.(png|jpe?g|svg)$/));
    console.log(images)
    const imagesArray = Object.keys(images);
    console.log(`../Styles/css-content/posters/${imagesArray[0]}`)

    const [activeState, setActiveState] = useState(false)
    
    const showPosters = () => {
        setActiveState(!activeState)
    }


    return (
    <section className="inventory-item-container">
        <summary className="inventory-item-title" onClick={showPosters}>
                <h1>Posters</h1>
                {activeState ?  <BiArrowFromTop size={40}/> : <BiArrowToTop size={40}/>}
        </summary>
        <div className="poster-container" style={{display: activeState ? "none" : "flex"}}>
            {imagesArray.map((image) => <div className="poster-item"><img src={require(`../Styles/css-content/posters/${image}`)} alt={{image}}/></div>)}
        </div>
            
    </section>
    )
}

export default PosterInventory;