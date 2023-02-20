import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4em;
  margin-top: 2em;
  padding: 1.7em;
`;

const Buttons = styled.div`
  button {
    margin-left: .5em;
  }
`;

const FilterButton = styled.button`
  color: #8F8272;
  background-color: #E6DDD2;
  border: none;
  border-radius: 4px;
  width: 100px;
  height: 36px;
  :hover {
    color: #FFF;
    background-color: #E0BA8B;
  }
  div {
    display: flex;
    justify-content: center;
    
    img {
      width: 15px;
      margin-left: .3em;
    }
  }
`;

const ResetButton = styled.button`
  color: #8F8272;
  background-color: #E6DDD2;
  border: none;
  border-radius: 4px;
  width: 100px;
  height: 36px;
  :hover {
    color: #FFF;
    background-color: #E0BA8B;
  }
`;

const Text = styled.p`
  color: #8F8272;
  font-weight: 600;
`;

export default function FilterBar({
  goFilterPage, resetFilter, sido, sigungu, category,
}) {
  const handleFilterPageOnClick = () => {
    goFilterPage();
  };

  const handleFilterResetClick = () => {
    resetFilter();
  };

  return (
    <Wrapper>
      {sido && sigungu && category ? (
        <Text>
          {sido}
          {' '}
          -
          {' '}
          {sigungu}
          {' '}
          -
          {' '}
          {category}
        </Text>
      ) : (
        <Text>필터 조건을 설정해주세요</Text>
      )}
      <Buttons>
        <FilterButton
          name="filter"
          type="button"
          onClick={handleFilterPageOnClick}
        >
          <div>
            필터
            <img src="https://res.cloudinary.com/ds7ujh0mf/image/upload/v1671092376/filter-image_hmmegp.png" alt="" />
          </div>
        </FilterButton>
        <ResetButton
          name="reset-filter"
          type="button"
          onClick={handleFilterResetClick}
        >
          리셋하기
        </ResetButton>
      </Buttons>
    </Wrapper>
  );
}
