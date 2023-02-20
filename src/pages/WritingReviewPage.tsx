import { useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import UserReviewForm from '../components/UserReviewForm';

import useUserReviewStore from '../hooks/useUserReviewStore';

import { formatDate } from '../utils/dateOfVisitFormatter';

const Container = styled.div`
  padding: 4em 2em;
`;

const Title = styled.h2`
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 2em;
`;

export default function WritingReviewPage() {
  const [startDate, setStartDate] = useState(new Date());

  const navigate = useNavigate();
  const location = useLocation();

  const userReviewStore = useUserReviewStore();

  const {
    myDateOfVisit, myRate, myReview, errorMessage,
    isDateOfVisitEmpty, isRateEmpty, isReviewEmpty,
  } = userReviewStore;

  const placeId = location.pathname.split('/')[2];

  const writeReview = async () => {
    if (!myDateOfVisit) {
      userReviewStore.setError('dateOfVisit', '방문일을 선택해주세요');
      return;
    }

    if (!myRate) {
      userReviewStore.setError('rate', '평점을 선택해주세요');
      return;
    }

    if (!myReview) {
      userReviewStore.setError('review', '리뷰를 10자 이상 작성해주세요');
      return;
    }

    await userReviewStore.postMyReview(placeId, myDateOfVisit, myRate, myReview);
    userReviewStore.clearWritingReviewState();
    userReviewStore.clearError();
    navigate(`/places/${placeId}/user-review`);
  };

  const setDateOfVisit = (date) => {
    setStartDate(date);
    const formattedDate = formatDate(date);
    userReviewStore.setMyDateOfVisit(formattedDate);
  };

  const setRate = (rate) => {
    userReviewStore.setMyRate(rate);
  };

  const setMyReview = (body) => {
    userReviewStore.setMyReview(body);
  };

  const cancelWriting = () => {
    userReviewStore.clearWritingReviewState();
    navigate(`/places/${placeId}/user-review`);
  };

  return (
    <Container>
      <Title>이 곳, 어떠셨나요?</Title>
      <UserReviewForm
        writeReview={writeReview}
        setDateOfVisit={setDateOfVisit}
        setRate={setRate}
        setMyReview={setMyReview}
        cancelWriting={cancelWriting}
        startDate={startDate}
        myReview={myReview}
        errorMessage={errorMessage}
        isDateOfVisitEmpty={isDateOfVisitEmpty}
        isRateEmpty={isRateEmpty}
        isReviewEmpty={isReviewEmpty}
      />
    </Container>
  );
}
