import { GrStar } from 'react-icons/gr';
import styled from 'styled-components';

const Container = styled.div`
    .active {
        color: #FFC501;
    }
    .inactive {
        color: #F8E193;
    }
`;

export default function PlaceStarIcons({ rate }) {
  const indexArray = [1, 2, 3, 4, 5];

  return (
    <Container>
      {indexArray.map((number) => (
        <GrStar key={number} className={number <= rate ? 'active' : 'inactive'} size="60" />
      ))}
    </Container>
  );
}
