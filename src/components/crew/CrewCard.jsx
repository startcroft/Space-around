import React from 'react'
import "./CrewCard.scss"

const CrewCard = ({ team }) => {
    return (


        <div className="memberContainer" key={team.id}>
            <div className='memberInfo'>
                <h3>{team.rol}</h3>
                <h2>{team.name}</h2>
                <p>{team.description}</p>
            </div>
            <div>
                <figure>
                    <img src={team.image} alt={team.name} />
                </figure>
            </div>

        </div>
    )
}

export default CrewCard
