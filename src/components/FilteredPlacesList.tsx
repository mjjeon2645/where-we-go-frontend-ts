import styled from 'styled-components';

const Container = styled.div`
  padding-top: 40px;
`;

const BackButton = styled.button`
  color: #AAA;
  font-size: 1em;
  background-color: #FFF;
  border: none;
  margin: 0 3em;
`;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2em;
  padding: 0 3em 5em 3em;
  width: 100%;
`;

const Title = styled.h2`
  font-weight: bold;
  margin-bottom: 2em;
`;

const Place = styled.button`
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 100%;
  height: 105px;
  margin: 3em 0;
  border: none;
  border-radius: 8px;
  background: none;
`;

const ImageArea = styled.div`
  width: 160px;
  overflow: hidden;
  margin-top: 4px;
  img {
      width: 160px;
      height: 100px;
      object-fit: cover;
  }
`;

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: 1em;
  height: 100%;
  
  .place_name {
      font-size: 1.5em;
      font-weight: 500;
      padding-top: .2em;
      text-align: left;
  }
  .address {
    margin: .5em 0;
    text-align: left;
  }
  .category {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #8F8272;
    border-radius: 2px;
    background-color: #E6DDD2;
    width: 100px;
    height: 25px;
  }
`;

export default function FilteredPlacesList({
  places, goBackFromPlaceListPage, goToPlaceDetailPage,
}) {
  const handleBackFromListPageClick = () => {
    goBackFromPlaceListPage();
  };

  const handleOnePlaceClick = (placeId) => {
    goToPlaceDetailPage(placeId);
  };

  return (
    <Container>
      <BackButton
        type="button"
        onClick={handleBackFromListPageClick}
      >
        {' '}
        &lt; 뒤로가기
      </BackButton>
      <Article>
        <Title>
          {places.length}
          개 장소를 찾았어요! 어디로 가볼까요?
        </Title>
        <ul>
          {places.map((value) => (
            <li key={value.placeId}>
              <Place type="button" onClick={() => handleOnePlaceClick(value.placeId)}>
                <ImageArea>
                  <img src={value.imageSource.firstImage} alt="" />
                </ImageArea>
                <ContentArea>
                  <div>
                    <p className="place_name">{value.name}</p>
                    <p className="address">{value.address.fullAddress}</p>
                  </div>
                  <div className="category">
                    <p>{value.category}</p>
                  </div>
                </ContentArea>
              </Place>
            </li>
          ))}
        </ul>
      </Article>
    </Container>
  );
}
