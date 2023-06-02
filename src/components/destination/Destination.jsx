
import imagenFondo from '../../assets/destination/background-destination-desktop.jpg';
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import "./destination.scss"

    const destinationUrl= "https://miniback-spacearound-production.up.railway.app/destination";
    const Destination = () => {
    const{destinationId} = useParams();
    const[destination, setDestination] = useState(null);
    

    useEffect(() =>{
        if(destinationId) {
            axios.get(`${destinationUrl}?name_like=${destinationId}`).then((response) => {
                setDestination(response.data[0]);
            });
        }
    }, [destinationId]);
    console.log(destination);
    return (
        < >
      {destination && (
        <main className="tech-main">
          <section className="image-section">
                {/* <p className="image-section__title">
                    <span className="image-section__span">01</span>PICK YOUR DESTINATION
                </p> */}
                <figure className="image-section__figure">
                    <img className="image-section__figure"
                    src={destination.image}
                    alt="Vehicle image" />
                </figure>
            </section>
            <aside className="aside">
            {/* <p className="aside__title">
                    <span className="aside__title-span">01</span>PICK YOUR DESTINATION 
                </p> */}
              <ul>
                <li>
                  <button>
                    MOON
                  </button>
                </li>
                <li>
                  <button>
                    MARS
                  </button>
                </li>
                <li>
                  <button>
                    EUROPA
                  </button>
                </li>
                <li>
                  <button>
                    TITAN
                  </button>
                </li>
              </ul>
                 <div className="container-numbers-text">
                    <div className="aside__container-numbers">
                        {/* <NavLink */}
                        {/* className={({isActive}) =>
                        isActive ? "activeButton" : "aside__container-numbers-item"}
                        to="/Technology/Launch%20vehicle" */}
                        {/* >1 */}
                        {/* </NavLink> */}

                        {/* <NavLink */}
                        {/* className={({isActive}) =>
                        isActive ? "activeButton" : "aside__container-numbers-item"}
                        to="/Technology/Spaceport" */}
                        {/* >2 */}
                        {/* </NavLink> */}

                        {/* <NavLink */}
                        {/* className={({isActive}) =>
                        isActive ? "activeButton" : "aside__container-numbers-item"}
                        to="/Technology/Space%20capsule" */}
                        {/* >3 */}
                        {/* </NavLink> */}
                    </div> 
                    
                    <article className="aside__container-text">
                        {/* <p className="aside__container-text-firstText">
                            THE TERMINOLOGY…
                        </p> */}
                        <p className="aside__container-text-title">
                            {destination.name.toUpperCase()}
                        </p>
                        <p className="aside__container-text-description">
                            {destination.description}
                        </p>
                    </article>
                </div>
            </aside>
            {/* <section className="image-section">
                <p className="image-section__title">
                    <span className="image-section__span">01</span>PICK YOUR DESTINATION
                </p>
                <figure className="image-section__figure">
                    <img className="image-section__figure"
                    src={destination.image}
                    alt="Vehicle image" />
                </figure>
            </section> */}
        </main>
      )}
     <div className="divUno">
        <tag>
            
        <img src={imagenFondo}/>
        </tag>
              
        <div> 
        </div>
     </div>
     </>
    )
}


export default Destination;