import { useEffect } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import PlaceAverageRate from '../components/PlaceAverageRate';
import MyReview from '../components/MyReview';
import UsersReviews from '../components/UsersReviews';
import PlaceDetailTap from '../components/PlaceDetailTap';

import useUserReviewStore from '../hooks/useUserReviewStore';
import useBlogReviewStore from '../hooks/useBlogReviewStore';

const Container = styled.div`
  padding-bottom: 3em;
`;
const Wrapper = styled.div`
  padding-inline: 2em;
`;

export default function PlaceUserReviewPage() {
  const blogReviewStore = useBlogReviewStore();
  const userReviewStore = useUserReviewStore();

  const navigate = useNavigate();
  const location = useLocation();

  const placeId = location.pathname.split('/')[2];

  const { blogReviews } = blogReviewStore;
  const { averageRate, userReviews, myReviewAtThePlace } = userReviewStore;

  useEffect(() => {
    blogReviewStore.fetchBlogReviews(placeId);
    userReviewStore.fetchUsersReviews(placeId);
  }, []);

  const goToPrevPage = () => {
    navigate(-1);
  };

  const goToPlaceDetail = () => {
    navigate(`/places/${placeId}`);
  };

  const goToBlogReview = () => {
    navigate(`/places/${placeId}/blog-review`);
  };

  const goToUserReview = () => {
    navigate(`/places/${placeId}/user-review`);
  };

  const goToReviewForm = () => {
    navigate(`/places/${placeId}/write`);
  };

  const deleteReview = async (reviewId) => {
    await userReviewStore.deleteReview(placeId, reviewId);
  };

  return (
    <Container>
      <PlaceDetailTap
        goToPrevPage={goToPrevPage}
        goToPlaceDetail={goToPlaceDetail}
        goToBlogReview={goToBlogReview}
        goToUserReview={goToUserReview}
        size={blogReviews?.length || 0}
      />
      {userReviews ? (
        <Wrapper>
          <PlaceAverageRate
            averageRate={averageRate}
            userReviews={userReviews}
          />
          <MyReview
            myReviewAtThePlace={myReviewAtThePlace}
            goToReviewForm={goToReviewForm}
            deleteReview={deleteReview}
          />
          <UsersReviews userReviews={userReviews} />
        </Wrapper>
      ) : (
        <p>now loading...</p>
      )}
    </Container>
  );
}
