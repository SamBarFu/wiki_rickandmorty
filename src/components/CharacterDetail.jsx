import React from 'react'
import { FaHeart } from "react-icons/fa";
import { CgGenderFemale, CgGenderMale } from "react-icons/cg";

export const CharacterDetail = ({ character }) => {
    return (
        <div className='detail-wrap'>
            <img className='detail-image' src={character.image} />
            <div className='detail-inner-container'>
                <div className='detail-name'>
                    {character.gender === 'Male' && <CgGenderMale />}
                    {character.gender === 'Female' && <CgGenderFemale />}
                    <h4>{character.name}</h4>
                </div>
                <p className='detail-species'><i>{character.species}</i></p>
                <button className='btn-add'>
                    <FaHeart />
                    Añadir a favoritos
                </button>
            </div>
        </div>
    )
}
