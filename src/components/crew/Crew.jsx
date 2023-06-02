import React from "react";
import { useState, useEffect } from "react";
import "./crew.scss"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import 'swiper/swiper-bundle.css';
import CrewCard from "./CrewCard";
const Crew = () => {

    const [team, setTeam] = useState(null);


    useEffect(() => {
        fetch("https://miniback-spacearound-production.up.railway.app/crew")
            .then((response) => response.json())
            .then((data) => setTeam(data));
    }, []);

    return (
        <>
            <main className="crewMain">

               <div className="subtitle">
                <p>02</p>
                <h2>MEET YOUR CREW</h2>
               </div>
                <Swiper className="carrouselSlide"
                    modules={[Pagination, Autoplay]}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    pagination={{
                        el: ".pagination",
                        clickable: true,
                    }}
                    slidesPerView={1}
                    breakpoints={{
                        "@0.00": {
                            slidesPerView: 1,
                            spaceBetween: 28,
                        },

                    }}
                >
                    {team?.map((member) => (
                        <SwiperSlide className="carrousel" key={member.id}>
                            <CrewCard className="card" team={member} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="pagination" />


            </main>
        </>

    )
}

export default Crew;