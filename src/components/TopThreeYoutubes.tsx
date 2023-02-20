import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.article`
`;

const Title = styled.p`
font-size: 1.2em;
font-weight: bold;
margin: 1em 0;
`;

const List = styled.li`
  width: 250px;
  display: inline;
  margin-right: .3em;
`;

const Button = styled.button`
  border: none;
  background: transparent;
  img {
    width: 250px;
    height: 140px;
  }
`;

const VideoTitle = styled.p`
  width: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
  margin-top: .5em;
`;

export default function TopThreeYoutubes({ youtubes }) {
  const navigate = useNavigate();

  const handleYoutubeVideoClick = (videoId) => {
    navigate(`/video?id=${videoId}`);
  };

  return (
    <Container>
      <Title>Youtube로 보는 TOP 3</Title>
      {youtubes.length ? (
        <ul>
          {youtubes.map((youtube) => (
            <List key={youtube.id.videoId}>
              <Button
                type="button"
                onClick={() => handleYoutubeVideoClick(youtube.id.videoId)}
              >
                <img src={youtube.snippet.thumbnails.medium.url} alt="" />
                <VideoTitle>{youtube.snippet.title}</VideoTitle>
              </Button>
            </List>
          ))}
        </ul>
      ) : (
        <p>now loading...</p>
      )}
    </Container>
  );
}
