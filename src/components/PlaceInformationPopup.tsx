import styled from 'styled-components';

const Popup = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    bottom: 9%;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 10;
    border-radius: 8px;
    width: 500px;
    height: 250px;
    padding: .5em .5em;
    background-color: #ffffff;
`;

const CloseButton = styled.button`
  color: #AAA;
  align-self: end;
  background: transparent;
  border: none;
`;

const ImagesArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    div {
      width: 150px;
      height: 150px;
      border-radius: 3px;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const PlaceContentButton = styled.button`
  background: none;
  border: none;
  text-align: start;
  h2 {
    font-size: 1.3em;
    font-weight: bold;
    margin: .5em 0em;
  }
`;

const Information = styled.div`
    display: flex;
    span {
        font-size: 1em;
        margin-right: 1em;
    }
`;

const Divide = styled.span`
  color: #D9D9D9;
`;

export default function PlaceInformationPopup(
  { selectedPlace, goToPlaceDetailPage, closePopup },
) {
  const date = new Date();

  const dayOfWeekArray = [
    'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday',
  ];

  const dayOfWeek = dayOfWeekArray[date.getDay()];

  const { address, businessHours, imageSource } = selectedPlace;

  const handleGoToDetailPageClick = (placeId) => {
    goToPlaceDetailPage(placeId);
  };

  const handlePlaceInformationPopupCloseClick = () => {
    closePopup();
  };

  return (
    <Popup id="popUp" key={selectedPlace.placeId}>
      <CloseButton
        className="close"
        type="button"
        onClick={handlePlaceInformationPopupCloseClick}
      >
        X
      </CloseButton>
      <ImagesArea>
        <div>
          <img src={imageSource.firstImage} alt="" />
        </div>
        <div>
          <img src={imageSource.secondImage} alt="" />
        </div>
        <div>
          <img src={imageSource.thirdImage} alt="" />
        </div>
      </ImagesArea>
      <PlaceContentButton
        type="button"
        data-testid="content-button"
        onClick={() => handleGoToDetailPageClick(selectedPlace.placeId)}
      >
        <h2>
          {selectedPlace.name}
        </h2>
        <Information>
          <span>
            {address.sido}
            {' '}
            {address.sigungu}
          </span>
          <Divide>|</Divide>
          <span>
            {selectedPlace.category}
          </span>
          <Divide>|</Divide>
          <span>
            {businessHours[dayOfWeek]}
          </span>
        </Information>
      </PlaceContentButton>
    </Popup>
  );
}
