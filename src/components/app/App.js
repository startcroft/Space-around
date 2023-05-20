import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Home  from "../home/Home";
import Layout from '../Layout';
import Destination from '../destination/Destination';
import Tecnologies from '../tecnologies/Tecnologies';
import Crew from '../crew/Crew';




const App = () => {
    return (
        <>

            <BrowserRouter>

                <Routes>

                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path='/Destination' element={<Destination />} /> 
                        <Route path='/Crew' element={<Crew/>} /> 
                        <Route path='/Tecnology' element={<Tecnologies />}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;