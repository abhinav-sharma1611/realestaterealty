import React, { useState } from 'react';
import styled from 'styled-components';
import './contact.css'

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  background-color: #fff;
  width: 400px;
  padding: 20px;
  border-radius: 4px;
  position: relative;
`;

const ModalContent = styled.div`
  max-height: 200px;
  overflow-y: auto;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const ScrollableModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='container'>
      <h1>Schools </h1>
              <span className="und">Great Schools Summary Rating</span>
              <br />
<div className='tent2'>
      <span className='tent' type="button" onClick={handleOpenModal}>Martin King Junior Elementary School </span><br />
        <p >Public, K-5 *Serves this home *0.3mi</p>
        <hr />
        </div>
      {isModalOpen && (
        <ModalOverlay >
          <ModalContainer className='cnt5'>
            <CloseButton onClick={handleCloseModal}>X</CloseButton>
            <ModalContent >
              
              <h2 className='fix'>Martin King Junior Elementary School</h2>
              <p className='fix'>
                This is the content of the modal. It can have as much text as needed, and it will scroll
                if it exceeds the available space. In today's fast-paced world, it's easy to get caught up in 
                our own lives, often neglecting the power of human connection. However, amidst the technological 
                advancements and increasing isolation, the significance of genuine connections cannot be undermined. 
                Human connection plays a vital role in our emotional well-being, personal growth, and societal harmony. 
                This essay will explore the importance of human connection and how it influences various aspects of
                 our lives.
              </p>
            </ModalContent>
            <button onClick={handleCloseModal}>Close Modal</button>
          </ModalContainer>
        </ModalOverlay>
      )}
    </div>
  );
};

export default ScrollableModal;
