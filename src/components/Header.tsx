/* eslint-disable no-nested-ternary */
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts';

import styled from 'styled-components';
import useUserStore from '../hooks/useUserStore';

const Container = styled.header`
  width: 600px;
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 100;
  background-color: #E6DDD2;
  border-bottom: 1px solid #EEE;
`;

const Wrapper = styled.div`
  padding-inline: calc((100% - 400px) / 2);
  vertical-align: middle;
`;

const Navigation = styled.nav`
  left: 0;
  right: 0;
  bottom: 0;
  height: 4em;
`;

const List = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const EachList = styled.li`
  a {
    color: ${(props) => (props.children.props.islocated === 'true' ? '#005D82' : '#A0A0A0')};
    font-weight: 700;
    border-bottom: ${(props) => (props.children.props.islocated === 'true' ? '4px solid #005D82' : 'none')};
    padding-block: 1.2em;
  }
`;

const Trial = styled.button`
  font-size: 1em;
  color: #FFF;
  background-color: #4135bb;
  border: none;
  border-radius: 4px;
  padding: .5em;
`;

const Login = styled.button`
  font-size: 1em;
  color: #ff9d13;
  background: none;
  border: none;
`;

const Logout = styled.button`
  font-size: 1em;
  color: #A0A0A0;
  background: none;
  border: none;
  font-weight: 700;
`;

export default function Header() {
  const [accessToken, setAccessToken] = useLocalStorage('accessToken', '');
  const [mode, setMode] = useLocalStorage('mode', '');

  const location = useLocation();

  const navigate = useNavigate();
  const userStore = useUserStore();

  const handleLoginClick = () => {
    setAccessToken('');
    navigate('/');
  };

  const handleLogoutClick = () => {
    setAccessToken('');
    userStore.clearUserState();
    navigate('/');
  };

  const handleStopTrialModeClick = async () => {
    await userStore.stopTrialMode();
    setAccessToken('');
    setMode('');
    navigate('/');
  };

  return (
    <Container>
      <Wrapper>
        <Navigation>
          <List>
            <EachList>
              <Link
                islocated={(location.pathname.includes('map') || location.pathname.includes('places')).toString()}
                to="/map"
              >
                장소 검색
              </Link>
            </EachList>
            <EachList>
              <Link islocated={location.pathname.includes('top3').toString()} to="/top3">Top 3</Link>
            </EachList>
            <EachList>
              <Link islocated={location.pathname.includes('mypage').toString()} to="/mypage">MyPage</Link>
            </EachList>
            {mode === 'trial' ? (
              <li>
                <Trial type="button" onClick={handleStopTrialModeClick}>⭐️체험종료⭐️</Trial>
              </li>
            ) : (
              !accessToken ? (
                <li>
                  <Login type="button" onClick={handleLoginClick}>로그인</Login>
                </li>
              ) : (
                <li>
                  <Logout type="button" onClick={handleLogoutClick}>로그아웃</Logout>
                </li>
              ))}
          </List>
        </Navigation>
      </Wrapper>
    </Container>
  );
}
