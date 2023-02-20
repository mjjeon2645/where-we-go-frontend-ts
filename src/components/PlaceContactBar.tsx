import styled from 'styled-components';

import Modal from 'styled-react-modal';

const Container = styled.nav`
  position: fixed;
  height: 5em;
  bottom: 0;
  width: 600px;
  background-color: #005D82;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`;

const Phone = styled.button`
  font-size: 1.1em;
  font-weight: 400;
  color: #FFF;
  margin-inline: 5em;
  background: none;
  border: none;
`;

const HomePage = styled.button`
  font-size: 1.1em;
  font-weight: 400;
  color: #FFF;
  margin-inline: 5em;
  background: none;
  border: none;
`;

const StyledModal = Modal.styled`
  position: relative;
  width: 400px;
  height: 228px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: 4.5em;
  background-color: #FFF;
  border: 1px white solid;
  border-radius: 20px;
  p:first-child {
    font-size: 2.3em;
    font-weight: 500;
    margin-bottom: .7em;
  }
  p:nth-child(2) {
    font-size: 1.5em;
    font-weight: 400;
  }
  button {
    font-size: 1.2em;
    color: #BBB;
    position: absolute;
    top: 10%;
    right: 5%;
    background: none;
    border: none;
  }
`;

export default function PlaceContactBar({
  contact, isContactModalOpen, toggleModal, getContactNumber, openHomePage,
}) {
  const handlePlaceContactClick = () => {
    getContactNumber();
  };

  const handlePlaceHompageOpenClick = (url) => {
    openHomePage(url);
  };

  const toggleContactModal = () => {
    toggleModal();
  };

  return (
    <Container>
      <div>
        <Phone type="button" onClick={handlePlaceContactClick}>연락처 안내</Phone>
        <HomePage
          type="button"
          onClick={() => handlePlaceHompageOpenClick(contact.homepage)}
        >
          홈페이지
        </HomePage>
        <StyledModal
          isOpen={isContactModalOpen}
          onBackgroundClick={toggleContactModal}
          onEscapeKeydown={toggleContactModal}
        >
          <p>연락처 안내</p>
          <p>{contact.phone}</p>
          <button type="button" onClick={toggleContactModal}>X</button>
        </StyledModal>
      </div>
    </Container>
  );
}
