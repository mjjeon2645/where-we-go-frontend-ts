import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MyBookmarks from '../components/MyBookmarks';
import MyChildren from '../components/MyChildren';
import MyInformation from '../components/MyInformation';
import useUserStore from '../hooks/useUserStore';

const Container = styled.div`
  padding-block: 3em;
`;

const DivisionLine = styled.div`
  border-top: 1px solid #00000005;
  border-bottom: 1px solid #00000005;
`;

export default function MyPage() {
  const navigate = useNavigate();

  const userStore = useUserStore();

  const { userInformation, bookmarks, children: userChildren } = userStore;

  useEffect(() => {
    userStore.fetchUserInformation();
    userStore.fetchChildren();
    userStore.fetchBookmarks();
  }, [userInformation.nickname]);

  const goToModifyNickname = () => {
    userStore.clearError();
    navigate('/mypage/nicknameform');
  };

  const goToAddChildForm = () => {
    navigate('/mypage/childform');
  };

  const deleteChild = async (childId) => {
    await userStore.deleteChild(childId);
  };

  const goPlaceDetailPage = (placeId) => {
    navigate(`/places/${placeId}`);
  };

  const removeBookmark = (placeId) => {
    userStore.toggleBookmark(placeId);
  };

  return (
    <Container>
      {userInformation.length !== 0 ? (
        <div>
          <MyInformation
            userInformation={userInformation}
            goToModifyNickname={goToModifyNickname}
          />
          <DivisionLine>
            <MyChildren
              userChildren={userChildren}
              goToAddChildForm={goToAddChildForm}
              deleteChild={deleteChild}
            />
          </DivisionLine>
          <MyBookmarks
            goPlaceDetailPage={goPlaceDetailPage}
            removeBookmark={removeBookmark}
            bookmarks={bookmarks}
          />
        </div>
      ) : (
        <p>now loading...</p>
      )}
    </Container>
  );
}
