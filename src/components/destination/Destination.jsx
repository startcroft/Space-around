import React from "react";
import { useState, useEffect } from "react";
import "./destination.scss"
import axios from 'axios';


const Destination = () => {

    const [destiny, setDestiny] = useState([]);
    const [position, setPosition] = useState(0);

    useEffect(() => {
        axios.get('https://miniback-spacearound-production.up.railway.app/destination')
          .then((response) => {
            const data = response.data;
            setDestiny(data);
          })
          .catch((error) => {
            console.log(destiny);
          });
      }, []);


    const handleMoon = () => {
       setPosition(0);
    }

    const handleMars = () => {
        setPosition(1);
     }

     const handleEuropa = () => {
        setPosition(2);
     }

     const handleTitan = () => {
        setPosition(3);
     }

     
    if (destiny.length === 0) {
        return <div>Loading...</div>;
    }


    return (
        <>

        <div className="destinationContent">
            <main>

                <div className="imagePlanet">
                    <figure>
                        <img src={destiny[position].image} alt={destiny[position].name} />
                    </figure>
                </div>
                <div className="planetInfo">

                    <ul className="planetMenu">
                        <li>
                            <button onClick={handleMoon}>MOON</button>
                        </li>
                        <li>
                            <button onClick={handleMars}>MARS</button>
                        </li>
                        <li>
                            <button onClick={handleEuropa}>EUROPA</button>
                        </li>
                        <li>
                            <button onClick={handleTitan}>TITAN</button>
                        </li>
                    </ul>
                    <h2 className="namePlanet">{destiny[position].name}</h2>
                    <p className="descriptionPlanet">{destiny[position].description}</p>

                    <div className="especificInformation">
                        <div>
                           <h3>AVG. DISTANCE</h3>
                           <p>{destiny[position].distance}</p>
                        </div>
                        <div>
                           <h3>Est. travel time</h3>
                           <p>{destiny[position].time}</p>
                        </div>
                    </div>
                </div>
            </main>

            </div>

        </>

    )
}

export default Destination;