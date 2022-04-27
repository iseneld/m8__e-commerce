import {BiArrowFromTop, BiArrowToTop} from "react-icons/bi";
import {useState, useContext} from 'react';
import {PosterContext} from "../Pages/Apartment"

function PosterInventory () {

    const {setSelectedPoster, selectedPoster} = useContext(PosterContext);
    

    function importAll(r) {
        let imagesTemp = {};
        r.keys().map((item, index) => { imagesTemp[item.replace('./', '')] = r(item); });
        return imagesTemp;
    }

    function selectThePoster (imageUrl) {
        setSelectedPoster(imageUrl);
        console.log(imageUrl.id)
        
    }

    const images = importAll(require.context('../Styles/css-content/posters', false, /\.(png|jpe?g|svg)$/));
    const imagesArray = Object.keys(images);

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
            {imagesArray.map((image) => <div className={`poster-item`} onClick={() => {selectThePoster(image)}} key={image}><img className={`${selectedPoster === image ? "active" : ""}`}src={require(`../Styles/css-content/posters/${image}`)} alt={{image}}/></div>)}
        </div>
            
    </section>
    )
}

export default PosterInventory;