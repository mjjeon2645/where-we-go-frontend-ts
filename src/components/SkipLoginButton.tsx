import styled from 'styled-components';

const Button = styled.button`
    color: #AAA;
    background-color: transparent;
    border: none;
    margin-block: .5em;
`;

export default function SkipLoginButton({ skipLogin }) {
  const handleSkipLoginClick = () => {
    skipLogin();
  };

  return (
    <div>
      <Button
        type="button"
        onClick={handleSkipLoginClick}
      >
        천천히 둘러볼래요!
      </Button>
    </div>
  );
}
