import styled from 'styled-components';
import TopThreeStarIcons from './TopThreeStarIcons';

const Container = styled.article`
  margin: 3em 0em;
`;

const TopThreePlacesSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const List = styled.li`
  display: flex;
  align-items: center;
  margin-block: 1.5em;
`;

const Circle = styled.div`
  position: relative;
  width: 56px;
  height: 56px;
  background-color: #E6DDD2;
  border-radius: 50%;
  img {
    width: 39px;
    height: 30px;
  }
  div {
    position: absolute;
    left: 5.3%;
    top: 5.6%;
    border: 1px solid #FFF;
    background: transparent;
    width: 51px;
    height: 51px;
    border-radius: 50%;
  }
  p {
    position: absolute;
    top: 40%;
    width: 100%;
    text-align: center;
  }
`;

const Lanking = styled.p`
  font-size: 1.1em;
  font-weight: bold;
  margin-right: 1em;
`;

const Button = styled.button`
  margin-left: 1em;
  background: none;
  border: none;
  width: 50%;
  text-align: start;
  p:first-child {
    font-size: 1.3em;
    font-weight: bold;
    margin-block: .3em;
  }
`;

const Pin = styled.img`
  width: 10px;
`;

const Address = styled.div`
  display: flex;
  align-items: center;
  span {
    font-size: .8em;
    color: #0E0E0E;
    font-weight: 300;
    margin-left: .5em;
  }
`;

const Star = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1em;
  background-color: #F3F3F3;
  width: 100px;
  height: 24px;
  border-radius: 4px;
`;

export default function TopThreePlaces({ topThreePlaces, goPlaceDetailPage }) {
  const handleTopThreeClick = (selectedPlaceId) => {
    goPlaceDetailPage(selectedPlaceId);
  };

  return (
    <Container>
      {topThreePlaces.length ? (
        <div>
          <TopThreePlacesSection>
            <ul>
              {topThreePlaces.map((place, index) => (
                <List key={place.placeId}>
                  <Circle>
                    <div />
                    <Lanking>
                      {index + 1}
                      위
                    </Lanking>
                  </Circle>
                  <Button
                    type="button"
                    onClick={() => handleTopThreeClick(place.placeId)}
                  >
                    <p>{place.name}</p>
                    <Address>
                      <Pin src="https://res.cloudinary.com/ds7ujh0mf/image/upload/v1671092044/pin-image_ilfekw.png" alt="" />
                      <span>
                        {place.address.sido}
                        {' '}
                        {place.address.sigungu}
                      </span>
                    </Address>
                  </Button>
                  <p>
                    {place.averageRate}
                  </p>
                  <Star>
                    <TopThreeStarIcons rate={place.averageRate} />
                  </Star>
                </List>
              ))}
            </ul>
          </TopThreePlacesSection>
        </div>
      ) : (
        <p>now loading...</p>
      )}
    </Container>
  );
}
