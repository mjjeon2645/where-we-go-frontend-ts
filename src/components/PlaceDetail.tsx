/* eslint-disable no-nested-ternary */
import styled from 'styled-components';

const ImageBox = styled.div`
  position: relative;
  width: 600px;
  height: 360px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageController = styled.div`
  display: flex;
  position: absolute;
  z-index: 10;
  bottom: 0;
  right: 0;
  align-items: center;
  background-color: #00000090;
  width: 80px;
  div {
    font-size: 1em;
    color: #FFF;
  }
`;

const Direction = styled.button`
  font-size: 1.3em;
  color: #FFF;
  background-color: transparent;
  border: none;
`;

const PlaceNameSection = styled.div`
  display: flex;
  align-items: center;
  margin-block: 3em;
  button {
    background: none;
    border: none;
  }
  img {
    width: 25px;
    height: 30px;
    margin-right: .8em;
  }
`;

const PlaceName = styled.h2`
  font-size: 2em;
  font-weight: bold;
`;

const SectionTitle = styled.p`
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 1em;
`;

const Services = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 1em 0 2em 0;
  div {
    text-align: center;
    padding: 0 1.6em;
  }
  div p {
    margin: 1em 0;
  }
`;

const Unchecked = styled.div`
  position: relative;
  p {
    font-size: .9em;
    font-weight: 600;
    position: absolute;
    top: 15%;
    left: 20%;
  }
`;

const AddressSection = styled.div`
  display: flex;
  align-items: center;
  span:last-child {
    color: #005D82;
    font-weight: 500;
    margin-left: .5em;
  }
`;

const Address = styled.span`
  font-size: .9em;
  font-weight: 300;
  margin-right: .3em;
`;

const CopyButton = styled.button`
  background: transparent;
  border: none;
  img {
    width: 15px;
  }
`;

const AddressAndMiniMap = styled.section`
  margin: 1em 0 1em 0;
`;

const ContentSection = styled.section`
  padding: 0 2em;
`;

export default function PlaceDetail({
  imageNumber, selectedPlace, copyState, bookmarks,
  seePrevImage, seeNextImage, toggleBookmark, copyAddress,
}) {
  const unBookmarked = 'https://res.cloudinary.com/ds7ujh0mf/image/upload/v1671091152/unbookmarked-orange_rxg24k.png';
  const bookmarked = 'https://res.cloudinary.com/ds7ujh0mf/image/upload/v1671091108/bookmarked-orange_ojguje.png';

  const possibleIcon = 'https://res.cloudinary.com/ds7ujh0mf/image/upload/v1670417142/possible_ac5jxi.png';
  const impossibleIcon = 'https://res.cloudinary.com/ds7ujh0mf/image/upload/v1670417142/impossible_doab0s.png';
  const uncheckedIcon = 'https://res.cloudinary.com/ds7ujh0mf/image/upload/v1670417142/unchecked_izlb2j.png';

  const copyButton = 'https://res.cloudinary.com/ds7ujh0mf/image/upload/v1671092239/copy-image_mracpj.png';

  const { imageSource, address, placeServices } = selectedPlace;

  const handlePrevImageClick = () => {
    seePrevImage();
  };

  const handleNextImageClick = () => {
    seeNextImage();
  };

  const handleToggleBookmarkClick = (placeId) => {
    toggleBookmark(placeId);
  };

  const handleAddressCopyClick = (text) => {
    copyAddress(text);
  };

  return (
    <article>
      <section>
        <ImageBox>
          {imageNumber === 1 ? (
            <img src={imageSource.firstImage} alt="" />
          ) : imageNumber === 2 ? (
            <img src={imageSource.secondImage} alt="" />
          ) : (
            <img src={imageSource.thirdImage} alt="" />
          )}
          <ImageController>
            <Direction type="button" onClick={handlePrevImageClick}>&lt;</Direction>
            <div>
              {imageNumber}
              {' '}
              / 3
            </div>
            <Direction type="button" onClick={handleNextImageClick}>&gt;</Direction>
          </ImageController>
        </ImageBox>
      </section>
      <ContentSection>
        <PlaceNameSection>
          <button
            type="button"
            data-testid="bookmark-button"
            onClick={() => handleToggleBookmarkClick(selectedPlace.placeId)}
          >
            {bookmarks.find((bookmark) => bookmark.placeId === selectedPlace.placeId) ? (
              <img src={bookmarked} alt="" />
            ) : (
              <img src={unBookmarked} alt="" />
            )}
          </button>
          <PlaceName>{selectedPlace.name}</PlaceName>
        </PlaceNameSection>
        <SectionTitle>편의시설</SectionTitle>
        <Services>
          <div id="reservation">
            {placeServices.reservation === 'possible' ? (
              <div>
                <img src={possibleIcon} alt="" />
              </div>
            ) : placeServices.reservation === 'impossible' ? (
              <div>
                <img src={impossibleIcon} alt="" />
              </div>
            ) : (
              <Unchecked>
                <img src={uncheckedIcon} alt="" />
                <p>확인필요</p>
              </Unchecked>
            )}
            <p>예약</p>
          </div>
          <div id="parking">
            {placeServices.parking === 'possible' ? (
              <div>
                <img src={possibleIcon} alt="" />
              </div>
            ) : placeServices.parking === 'impossible' ? (
              <div>
                <img src={impossibleIcon} alt="" />
              </div>
            ) : (
              <Unchecked>
                <img src={uncheckedIcon} alt="" />
                <p>확인필요</p>
              </Unchecked>
            )}
            <p>주차</p>
          </div>
          <div id="outside-food">
            {placeServices.outsideFood === 'possible' ? (
              <div>
                <img src={possibleIcon} alt="" />
              </div>
            ) : placeServices.outsideFood === 'impossible' ? (
              <div>
                <img src={impossibleIcon} alt="" />
              </div>
            ) : (
              <Unchecked>
                <img src={uncheckedIcon} alt="" />
                <p>확인필요</p>
              </Unchecked>
            )}
            <p>외부음식</p>
          </div>
          <div id="nursing-room">
            {placeServices.nursingRoom === 'possible' ? (
              <div>
                <img src={possibleIcon} alt="" />
              </div>
            ) : placeServices.nursingRoom === 'impossible' ? (
              <div>
                <img src={impossibleIcon} alt="" />
              </div>
            ) : (
              <Unchecked>
                <img src={uncheckedIcon} alt="" />
                <p>확인필요</p>
              </Unchecked>
            )}
            <p>수유실</p>
          </div>
        </Services>
        <AddressAndMiniMap>
          <SectionTitle>주소</SectionTitle>
          <AddressSection>
            <Address>{address.fullAddress}</Address>
            <CopyButton
              type="button"
              onClick={() => handleAddressCopyClick(address.fullAddress)}
            >
              <img src={copyButton} alt="" data-testid="copy-button" />
            </CopyButton>
            {copyState && (
              <span>복사 완료!</span>
            )}
          </AddressSection>
        </AddressAndMiniMap>
      </ContentSection>
    </article>
  );
}
