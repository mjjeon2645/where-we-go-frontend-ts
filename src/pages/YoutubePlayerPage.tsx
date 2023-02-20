import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import YoutubePlayer from '../components/YoutubePlayer';

const Container = styled.div`
  padding-top: 3em;
`;

const BackButton = styled.button`
  color: #AAA;
  font-size: 1em;
  background-color: #FFF;
  border: none;
  margin: 0em .5em 3em .5em;
`;

export default function YoutubePlayerPage() {
  const navigate = useNavigate();
  const videoId = window.location.search.split('=')[1];
  const options = {
    height: '400',
    width: '600',
    playerVars: {
      autoplay: 0,
    },
  };

  const handleBackPageClick = () => {
    navigate(-1);
  };

  return (
    <Container>
      <BackButton type="button" onClick={handleBackPageClick}> &lt; 뒤로가기</BackButton>
      <div>
        <YoutubePlayer videoId={videoId} options={options} />
      </div>
    </Container>
  );
}
