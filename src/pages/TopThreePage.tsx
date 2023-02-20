import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import TopThreePlaces from '../components/TopThreePlaces';
import TopThreeYoutubes from '../components/TopThreeYoutubes';

import useTopThreeStore from '../hooks/useTopThreeStore';

const Container = styled.div`
  padding-inline: 2em;
  padding-bottom: 3em;
`;

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3em;
`;

const MainImage = styled.img`
  width: 35%;
`;

const Crown = styled.div`
  position: absolute;
  top: 48%;
  background-color: #FFF;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    display: inline-block;
    width: 70%;
    height: 870%;
    object-fit: scale-down;
  }
`;

const Banner = styled.div`
  position: absolute;
  top: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #B3C2C8;
  width: 534px;
  height: 150px;
  border-radius: 20px;
`;

const Dashed = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 512px;
  height: 135px;
  border: 3px #E6DDD2 dashed;
  border-radius: 10px;
  margin: 0 auto;
`;

const Subtitle = styled.div`
  position: absolute;
  bottom: -42%;
  width: 390px;
  height: 40px;
  background-color: #005d82;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: .8em;
    font-weight: 300;
    color: #FFF;
  }
`;

const Title = styled.div`
  width: 350px;
  height: 57px;
  overflow: contain;
  
  img {
    display: inline-block;
    width: 100%;
    height: 100%;
    object-fit: scale-down;
  }
`;

const Top3Section = styled.div`
  margin-top: 8em;
`;

export default function TopThreePage() {
  const [isAccessModalOpen, setIsAccessModalOpen] = useState(false);
  const topThreeStore = useTopThreeStore();

  const { topThreePlaces, youtubes } = topThreeStore;

  const navigate = useNavigate();

  useEffect(() => {
    topThreeStore.fetchTopThreePlaces();
  }, []);

  const toggleModal = () => {
    setIsAccessModalOpen(!isAccessModalOpen);
  };

  const goPlaceDetailPage = (placeId) => {
    navigate(`/places/${placeId}`);
    toggleModal();
  };

  return (
    <Container>
      <ImageWrapper>
        <MainImage src="https://res.cloudinary.com/ds7ujh0mf/image/upload/v1670398470/top-3-image_g5mknk.png" alt="" />
        <Crown>
          <img src="https://res.cloudinary.com/ds7ujh0mf/image/upload/v1670401695/crown-2_nu6wvx.png" alt="" />
        </Crown>
        <Banner>
          <Dashed>
            <Title>
              <img src="https://res.cloudinary.com/ds7ujh0mf/image/upload/v1670399152/top-3-title-white_pvnfzu.png" alt="" />
            </Title>
          </Dashed>
        </Banner>
        <Subtitle>
          <p>오어디 회원님들이 추천하는 장소는 어디일까요?</p>
        </Subtitle>
      </ImageWrapper>
      {topThreePlaces.length !== 0 ? (
        <Top3Section>
          <TopThreePlaces
            topThreePlaces={topThreePlaces}
            goPlaceDetailPage={goPlaceDetailPage}
          />
          <TopThreeYoutubes youtubes={youtubes} />
        </Top3Section>
      ) : (
        <p>now loading...</p>
      )}
    </Container>
  );
}
