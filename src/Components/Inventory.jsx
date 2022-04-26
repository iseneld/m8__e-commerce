import { useState } from "react";

const Inventory = () => {


    function importAll(r) {
        let imagesTemp = {};
        r.keys().map((item, index) => { imagesTemp[item.replace('./', '')] = r(item); });
        return imagesTemp;
    }

    const images = importAll(require.context('../posters', false, /\.(png|jpe?g|svg)$/));
    console.log(images)
    
    
    return (
        <div className="inventory-container">
        </div>
    )
  }
  
  export default Inventory;