import styled from 'styled-components';

import { loadSidoOptions, loadSigunguOptions } from '../utils/filterOptions';

const Container = styled.article`
  margin: 3em 1em;
`;

const Title = styled.h2`
  font-size: 1.3em;
  font-weight: bold;
  margin-bottom: 1em;
`;

const SidoTitle = styled.p`
  padding-left: 1em;
  margin-bottom: 1em;  
`;

const SidoSection = styled.section`
  padding-block: 1em;
  margin: 1em 0;
`;

const SidoList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;

const SidoOption = styled.button`
  color: ${(props) => (props.selected ? '#FFF' : '#8F8272')};
  background-color: ${(props) => (props.selected ? '#F9C193' : '#E6DDD2')};
  border: none;
  border-radius: 4px;
  width: 153px;
  height: 50px;
  margin: .5em 1em;
  :hover {
    color: #FFF;
    background-color: #E0BA8B;
  }
`;

const SigunguSection = styled.section`
  padding: 1em;
  margin: 1em 0;
  select {
    margin-left: 2em;
    width: 10em;
    padding: .5em;
    border-radius: 4px;
  }
`;

export default function PlaceLocationFilter({
  setSido, setSigungu, sido, sigungu,
}) {
  const sidoArray = loadSidoOptions();

  const sigunguArray = loadSigunguOptions();

  const handleSidoChange = (event) => {
    setSido(event.ko);
    setSigungu('');
  };

  const handleSigunguChange = (event) => {
    setSigungu(event.target.value);
  };

  return (
    <Container>
      <Title>어디로 갈까요?</Title>
      <SidoSection>
        <SidoTitle>시/도</SidoTitle>
        <SidoList>
          {sidoArray.map((value) => (
            <li key={value.id}>
              <SidoOption
                type="button"
                value={value.ko}
                onClick={() => handleSidoChange(value)}
                isSelected={value.selected}
                selected={sido === value.ko}
              >
                {value.ko}
              </SidoOption>
            </li>
          ))}
        </SidoList>
      </SidoSection>
      <SigunguSection>
        <label htmlFor="filter" aria-label="filter">시/군/구</label>
        <select id="filter" onChange={handleSigunguChange}>
          <option selected={sigungu === ''} disabled hidden>선택</option>
          {sigunguArray.find((value) => value.sido === sido)
            ? (sigunguArray.find((value) => value.sido === sido).sigunguLists.map((value) => (
              <option
                key={value.id}
                value={value.name}
              >
                {value.name}
              </option>
            )))
            : ('')}
        </select>
      </SigunguSection>
    </Container>
  );
}
