import { useState, useContext } from "react";
import PosterInventory from "./PosterInventory";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { PosterContext } from "../Pages/Apartment";

const Inventory = () => {
    const {inAndOutState, setInAndOutState} = useContext(PosterContext)
    
    return (
        <section className={`inventory-container ${inAndOutState ? "active" : ""}`}>
        <div className="inventory-drag-inout" onClick={() => setInAndOutState(!inAndOutState)}>
           {inAndOutState ?  <IoIosArrowForward size={40}/> : <IoIosArrowBack size={40}/>}
        </div>
                <PosterInventory />
        </section>
    )
  }
  
  export default Inventory;