import React from "react";
import NavBarPage from "../home/NavBar";
import destination from "../destination/Destination";
import imagenFondo from '../../assets/destination/background-destination-desktop.jpg';
import imagen from "../../assets/destination/image-europa.png";


const Destination = () => {
    return (
        < >
     
     <div className="divUno">
        <tag>
            
        <img src={imagenFondo}/>
        </tag>
        <h1 className="divUno__title">
          01 PICK YOUR DESTINATION  
        </h1>
        
        <div> 
        </div>
     </div>
     </>
    )
}

export default Destination;