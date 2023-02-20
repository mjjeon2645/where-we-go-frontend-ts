import styled from 'styled-components';

const Container = styled.article`
  margin: 3em 2em;
`;
const Title = styled.p`
  font-size: 1.2em;
  font-weight: bold;
  margin-block: 2em;
`;

const NoBookmarkMessage = styled.p`
  font-weight: 300;
  text-align: center;
  color: #0e0e0e50;
`;

const PlaceList = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-block: 2em;
`;

const Place = styled.button`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  border: none;
`;

const PlaceName = styled.p`
  font-size: 1.3em;
  font-weight: bold;
  margin-bottom: .3em;
`;

const Pin = styled.img`
  width: 12px;
  margin-right: .5em;
`;

const Address = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #0E0E0E;
    margin-left: .1em;
  }
`;

const DeleteButton = styled.button`
  float: right;
  border: none;
  width: 8em;
  height: 3em;
  border-radius: 4px;
  color: #8F8272;
  background-color: #E6DDD2;
`;

export default function MyBookmarks({ goPlaceDetailPage, removeBookmark, bookmarks }) {
  const pinIcon = 'https://res.cloudinary.com/ds7ujh0mf/image/upload/v1671092044/pin-image_ilfekw.png';

  const handlePlaceDetailClick = (placeId) => {
    goPlaceDetailPage(placeId);
  };

  const handleBookmarkDeleteClick = (placeId) => {
    removeBookmark(placeId);
  };

  return (
    <Container>
      <Title>즐겨찾기</Title>
      {bookmarks.length === 0 ? (
        <NoBookmarkMessage>즐겨찾기 한 장소가 없습니다</NoBookmarkMessage>
      ) : (
        <ul>
          {bookmarks.map((bookmark) => (
            <PlaceList key={bookmark.placeId}>
              <Place
                type="button"
                onClick={() => handlePlaceDetailClick(bookmark.placeId)}
              >
                <PlaceName>{bookmark.name}</PlaceName>
                <Address>
                  <Pin src={pinIcon} alt="" />
                  <span>{bookmark.address}</span>
                </Address>
              </Place>
              <DeleteButton
                type="button"
                id={bookmark.placeId}
                data-testid={bookmark.placeId}
                onClick={() => handleBookmarkDeleteClick(bookmark.placeId)}
              >
                삭제
              </DeleteButton>
            </PlaceList>
          ))}
        </ul>
      )}
    </Container>

  );
}
