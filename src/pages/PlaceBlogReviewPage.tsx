import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import PlaceBlogReviews from '../components/PlaceBlogReviews';
import PlaceDetailTap from '../components/PlaceDetailTap';

import useBlogReviewStore from '../hooks/useBlogReviewStore';

const Container = styled.div`
  padding-bottom: 3em;
`;

const Wrapper = styled.article`
  padding-top: 1em;
`;

export default function PlaceBlogReviewPage() {
  const blogReviewStore = useBlogReviewStore();

  const navigate = useNavigate();
  const location = useLocation();

  const placeId = location.pathname.split('/')[2];

  const { blogReviews } = blogReviewStore;

  useEffect(() => {
    blogReviewStore.fetchBlogReviews(placeId);
  }, []);

  const goToBlogWebPage = (blogReviewUrl) => {
    window.open(blogReviewUrl, '_blank');
  };

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

  return (
    <Container>
      <PlaceDetailTap
        goToPrevPage={goToPrevPage}
        goToPlaceDetail={goToPlaceDetail}
        goToBlogReview={goToBlogReview}
        goToUserReview={goToUserReview}
        size={blogReviews?.length || 0}
      />
      {blogReviews ? (
        <Wrapper>
          <PlaceBlogReviews
            blogReviews={blogReviews}
            goToBlogWebPage={goToBlogWebPage}
          />
        </Wrapper>
      ) : (
        <p>now loading...</p>
      )}
    </Container>
  );
}
