import React, { useState, forwardRef } from 'react';
import { CharacterDetail } from './CharacterDetail';
import { Modal } from './Modal';

export const Character = forwardRef(({ character }, ref) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowDetail = () => {
    setShowModal(true);
  }

  const handleCloseDetail = () => {
    setShowModal(false);
  }

  return (
    <>
      <div className='character' ref={ref}>
        <div className='inner-wrap' onClick={handleShowDetail}>
          <img className='character-img' src={character.image} />
          <div className='character-inner-container'>
            <h1 className='character-name'>{character.name}</h1>
          </div>
        </div>
        <Modal
          open={showModal}
          handleClose={handleCloseDetail}
        >
          <CharacterDetail character={character} />
        </Modal>
      </div>
    </>
  )
})
