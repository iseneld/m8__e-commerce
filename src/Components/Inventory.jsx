import { useState } from "react";
import PosterInventory from "./PosterInventory";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Inventory = () => {

    const [activeState, setActiveState] = useState(false)
   
    const inAndOut = () => {
        setActiveState(!activeState)
    }
    
    return (
        <section className={`inventory-container ${activeState ? "active" : ""}`}>
        <div className="inventory-drag-inout" onClick={inAndOut}>
           {activeState ?  <IoIosArrowForward size={40}/> : <IoIosArrowBack size={40}/>}
        </div>
                <PosterInventory />
        </section>
    )
  }
  
  export default Inventory;