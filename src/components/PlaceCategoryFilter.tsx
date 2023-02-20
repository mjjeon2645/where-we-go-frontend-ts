import styled from 'styled-components';
import { loadCategoryOptions } from '../utils/filterOptions';

const Container = styled.article`
  margin: 3em 1em;
`;

const Title = styled.h2`
  font-size: 1.3em;
  font-weight: bold;
`;

const CategorySection = styled.section`
  padding-block: 1em;
  margin: 1em 0;
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const CategoryOption = styled.button`
  font-size: .8em;
  color: ${(props) => (props.selected ? '#FFF' : '#8F8272')};
  background-color: ${(props) => (props.selected ? '#F9C193' : '#E6DDD2')};
  border: none;
  border-radius: 4px;
  height: 50px;
  width: 165px;
  margin: 1em .5em;
  :hover {
    color: #FFF;
    background-color: #E0BA8B;
  }
`;

export default function PlaceCagetoryFilter({ onCategoryClick, category }) {
  const categories = loadCategoryOptions();

  const handlePlaceCategoryClick = (value) => {
    onCategoryClick(value);
  };

  return (
    <Container>
      <Title>어떤 곳을 원하세요?</Title>
      <CategorySection>
        <ul>
          {categories.map((value) => (
            <li key={value.id}>
              <CategoryOption
                className="category"
                type="button"
                onClick={() => handlePlaceCategoryClick(value)}
                selected={category === value.category}
              >
                {value.category}
              </CategoryOption>
            </li>
          ))}
        </ul>
      </CategorySection>
    </Container>
  );
}
