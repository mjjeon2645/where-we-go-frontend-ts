import styled from 'styled-components';

const WithResult = styled.button`
  font-size: 1em;
  color: #FFF;
  width: 500px;
  height: 50px;
  position: absolute;
  bottom: 3%;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 11;
  border: none;
  border-radius: 8px;
  background-color: #005D82;
  :hover {
    color: #FFF;
    background-color: #0083B7;
  }
`;

const WithoutResult = styled.button`
  font-size: 1em;
  color: #FFF;
  width: 500px;
  height: 50px;
  position: absolute;
  bottom: 3%;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 11;
  border: none;
  border-radius: 8px;
  background-color: #A0A0A0;
`;

export default function FilterResultBar(
  { goFilteredPlaceListPage, places },
) {
  const handleFilterResultClick = () => {
    goFilteredPlaceListPage();
  };

  return (
    <div>
      {places.length === 0
        ? (
          <WithoutResult
            type="button"
            disabled
          >
            조건에 맞는 장소가 없습니다.
          </WithoutResult>
        ) : (
          <WithResult
            type="button"
            onClick={handleFilterResultClick}
          >
            {places.length}
            개 장소 보러가기
          </WithResult>
        )}
    </div>
  );
}
