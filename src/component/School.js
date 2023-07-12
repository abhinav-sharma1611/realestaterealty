import React, { useState } from 'react';
import styled from 'styled-components';
import './contact.css'
import Dropdown from './dpdwn';
// import School2 from './SchoolClone';

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
  width: 800px;
  height: 600px;
  padding-left: 20px;
  border-radius: 4px;
  position: relative;
`;

const ModalContent = styled.div`
  max-height: 550px;
  overflow-y: auto;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const School = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='container' id="school">
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
            
            <ModalContent >
              <div className='headd'>
              <h4 className='fix'>Martin King Junior Elementary School</h4>
              <CloseButton onClick={handleCloseModal}>x</CloseButton>
              </div>
            <div className='tex'>
<div className='side1'>
              <div >
              <div className='container'>
        <div className='rate'>
        <div className='rating'>
            <p><b>2</b>/10</p>
            <p>Summary Rating</p>
        </div>
        <div className='rate-2'>
        <div className='rating2'>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
       
        </div>
        <p>3 reviews</p>
        </div>
       
        </div>
     
    </div>
              </div>

              <div className='container'>
        <div className='big'>
            <div className='icon-1'>
                <div className='icon-11'>
                <i class="bi bi-headset u"></i>
                 
                </div>
                <div className='icon-content'>
                  <p>Serves this home</p>
                </div>
            </div>

            <div className='icon-1'>
                <div className='icon-11'>
                <i class="bi bi-mortarboard-fill u"></i>
                </div>
                <div className='icon-content'>
                    <p>Public, PreK-8</p>
                </div>
            </div>
            <div className='icon-1'>
                <div className='icon-11'>
                <i class="bi bi-person-fill u"></i>
                </div>
                <div className='icon-content'>
                    <p>760 students (15 per teacher)</p>
                </div>
            </div>
            <div className='icon-1'>
                <div className='icon-11'>
                <i class="bi bi-car-front-fill u"></i>
                </div>
                <div className='icon-content'>
                <p>0.4mi away</p>
                </div>
            </div>
            <div className='icon-1'>
                <div className='icon-11'>
                <i class="bi bi-geo-alt-fill u"></i>
                </div>
                <div className='icon-content'>
                    <p>1234 N Monticello Ave, Chicago, IL 60651</p>
                </div>
            </div>
            <div className='icon-1'>
                <div className='icon-11'>
                <i class="bi bi-link u"></i>
                </div>
                <div className='icon-content'>
                  <p><a className='dash'>Cameron Elementary School | City of Chicago School District 299</a></p>
                </div>
            </div>
        </div>
     
    </div>
              </div>
              <div className='side2'>
              <span className='tt'>GreatSchools Subrating</span>
             <Dropdown />
             <p>Potential and Energy: Youth possess immense potential and energy, making them a valuable resource for social, economic, and technological progress. Their enthusiasm and fresh perspectives bring innovation and creativity to various fields.

Agents of Change: Young people are at the forefront of social and political movements, advocating for important causes such as climate change, gender equality, and human rights. Their activism and engagement challenge the status quo and drive positive transformation.

Education and Skill Development: Investing in quality education and skill development for youth is crucial. Equipping them with knowledge, critical thinking abilities, and vocational skills enhances their employability and prepares them for leadership roles.

Entrepreneurship: Many young individuals are embracing entrepreneurship, creating startups, and driving economic growth. Their entrepreneurial ventures not only contribute to job creation but also foster innovation and competitiveness.

Technology and Digital Natives: Youth are the digital natives, growing up with advanced technology. They have a deep understanding of digital platforms and their potential, which can be harnessed to address societal issues and bridge the digital divide.

Challenges and Opportunities: While youth face challenges such as unemployment, limited access to resources, and social inequalities, these challenges also present opportunities for them to drive change, find innovative solutions, and contribute to sustainable development.

Diversity and Inclusion: Recognizing and promoting diversity and inclusion among youth is essential. Embracing different perspectives, cultures, and backgrounds leads to more inclusive societies and fosters social cohesion.

Mental Health and Well-being: Paying attention to the mental health and well-being of young people is crucial. Providing support systems, promoting mental health awareness, and addressing stigma can help them lead fulfilling lives and reach their potential.

In conclusion, empowering and involving youth is vital for creating a prosperous and sustainable future. Their energy, ideas, and passion have the power to shape societies positively, and investing in their education, skills, and well-being is a wise choice for any nation or community.</p>
              </div>

              </div>

            </ModalContent>
            {/* <button onClick={handleCloseModal}>Close Modal</button> */}
          </ModalContainer>
        </ModalOverlay>
        
      )}
      {/* <School2 className="sc2"/>
      <School2 className="sc2"/> */}
    </div>
  );
};

export default School;
