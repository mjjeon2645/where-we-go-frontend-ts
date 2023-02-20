import styled from 'styled-components';
import PlaceStarIcons from './PlaceStarIcons';

const Container = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 5em;
  line-height: 1.8em;
  p:first-child {
    font-size: 1.4em;
    font-weight: 700;
  }
  p:last-child {
    font-size: .9em;
    font-weight: 400;
    color: #0E0E0E;
  }
`;

const StarSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 375px;
  height: 90px;
  margin: 0 auto;
  background-color: #F3F3F3;
  border-radius: 4px;
`;

const RateSection = styled.div`
  margin-top: 1em;
`;

export default function PlaceAverageRate({ averageRate, userReviews }) {
  return (
    <Container>
      <StarSection>
        <PlaceStarIcons rate={averageRate} />
      </StarSection>
      <RateSection>
        <p>
          {averageRate}
          {' '}
          / 5.0
        </p>
        <p>
          &#40;
          {userReviews.length}
          명 참여&#41;
        </p>
      </RateSection>
    </Container>
  );
}
