import styled from 'styled-components';

const Wrapper = styled.article`
  padding: 0 2em;    
`;

const Review = styled.button`
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 100%;
  height: 120px;
  margin: 3em 0;
  border: none;
  background-color: #FFF;
`;

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0em .5em;
    .title {
      text-align: left;
      font-size: 1.2em;
      font-weight: bold;
      margin: .5em 0;
    }
    .date {
      margin: .2em 0;
    }
    .author {
      color: #AAA;
    }
    p {
      text-align: left;
    }
`;

const ImageArea = styled.div`
    width: 120px;
    height: 120px;
    overflow: hidden;
    border-radius: 10px;
    margin-top: 4px;
    img {
        width: 120px;
        height: 120px;
        object-fit: cover;
    }
`;

const NoneMessage = styled.p`
  font-size: 1.2em;
  text-align: center;
  margin-top: 5em;
`;

export default function PlaceBlogReviews({ blogReviews, goToBlogWebPage }) {
  const handleToBlogWebPageClick = (url) => {
    goToBlogWebPage(url);
  };

  return (
    <div>
      {blogReviews.length !== 0 ? (
        <Wrapper>
          <ul>
            {blogReviews.map((blogReview) => (
              <li key={blogReview.url}>
                <Review type="button" onClick={() => handleToBlogWebPageClick(blogReview.url)}>
                  <ImageArea>
                    <img src={blogReview.imageSource} alt="" />
                  </ImageArea>
                  <ContentArea>
                    <p className="title">{blogReview.title}</p>
                    <p className="date">{blogReview.date}</p>
                    <p className="author">
                      by.
                      {' '}
                      {blogReview.author}
                    </p>
                  </ContentArea>

                </Review>
              </li>
            ))}
          </ul>
        </Wrapper>
      ) : (
        <NoneMessage>등록된 리뷰가 없습니다 😓</NoneMessage>
      )}
    </div>
  );
}
