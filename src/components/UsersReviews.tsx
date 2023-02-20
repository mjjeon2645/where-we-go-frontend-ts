import styled from 'styled-components';

const Title = styled.p`
  color: #005D82;
  font-size: 1.2em;
  font-weight: 700;
  margin-top: 2em;
  margin-bottom: 1.5em;
`;

const Review = styled.li`
  margin-bottom: 1em;
  border-bottom: 1px solid #F3F3F3;
  padding-bottom: 1.5em;
  strong {
    font-weight: bold;
  }
  span {
    display: inline-block;
    margin-block: .5em;
  }
`;

const Body = styled.p`
  font-size: .9em;
  font-weight: 300;
  line-height: 1.3em;
`;

const NoReviewMessage = styled.div`
    font-weight: 300;
    line-height: 1.2em;
`;

export default function UsersReviews({ userReviews }) {
  return (
    <div>
      <Title>회원님들의 리뷰</Title>
      {userReviews.length !== 0 ? (
        <ul>
          {userReviews.map((userReview) => (
            <Review key={userReview.id}>
              <strong>
                {userReview.nickname}
                {' '}
              </strong>
              <span>
                (방문일:
                {' '}
                {userReview.dateOfVisit}
                )
              </span>
              <Body>{userReview.body}</Body>
            </Review>
          ))}
        </ul>
      ) : (
        <NoReviewMessage>
          <p>아직 리뷰가 없어요🥲</p>
          <p>회원님들의 소중한 추억을 공유해주세요</p>
        </NoReviewMessage>
      )}
    </div>
  );
}
