import styled from 'styled-components';
import PlaceLocationFilter from './PlaceLocationFilter';
import PlaceCategoryFilter from './PlaceCategoryFilter';

const Wrapper = styled.article`
  padding-inline: 1.1em;
  padding-bottom: 5em;
`;

const BackButton = styled.button`
  color: #AAA;
  font-size: 1em;
  background-color: #FFF;
  border: none;
  margin: 3em .5em 0 .5em;
`;

const FilterButton = styled.button`
  font-size: 1em;
  font-weight: 500;
  color: #FFF;
  border: none;
  border-radius: 8px;
  display: block;
  width: 534px;
  height: 60px;
  margin: auto;
  background-color: #005D82;
  :hover {
   background-color: #0083B7; 
  }
`;

export default function Filters({
  goBackFromFilterPage, runFiltering, setSido, setSigungu, setPlaceCategory,
  sido, sigungu, category,
}) {
  const handleBackClick = () => {
    goBackFromFilterPage();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (sigungu === '선택' || !sigungu) {
      alert('가고싶은 지역을 선택해주세요!');
      return;
    }

    if (!category) {
      alert('가고싶은 장소의 유형을 선택해주세요!');
      return;
    }

    runFiltering();
  };

  const onCategoryClick = (data) => {
    setPlaceCategory(data.category);
  };

  return (
    <Wrapper>
      <BackButton type="button" onClick={handleBackClick}> &lt; 뒤로가기</BackButton>
      <form id="filter" onSubmit={handleSubmit}>
        <PlaceLocationFilter
          setSido={setSido}
          setSigungu={setSigungu}
          sido={sido}
          sigungu={sigungu}
        />
        <div className="placetype">
          <PlaceCategoryFilter
            onCategoryClick={onCategoryClick}
            category={category}
          />
        </div>
        <FilterButton type="submit">
          필터 적용하기
        </FilterButton>
      </form>
    </Wrapper>
  );
}
