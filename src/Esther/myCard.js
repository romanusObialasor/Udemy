<CourseCard>
<Images></Images>
  <Title>React Developmetn Tutorial React Developmetn Tutorial</Title>
  <Teacher>Adeniran Esther</Teacher>
  <Rate> <Rating onClick={handleRating} ratingValue={rating} /* Rating Props */ /></Rate>
  <Price>#12.89</Price>
</CourseCard>





const Wrappertwo = styled.div`
margin: 10px;
width: 225px;
  /* background-color: red; */
  height: 300px;
  img {
    width: 100%;
    height: 130px;
    object-fit: cover;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
`;
const NumRate = styled.div``;

const Ratetwo = styled.div`
  color: #e59819;
  font-size: 15px;
`;

const Raters = styled.div``;

const Containertwo = styled.div`
  display: flex;
  width: 100%;
flex-wrap: wrap;
align-items: center;
justify-content: center;
/* background-color: red; */


`;

const Titletwo = styled.div`
  font-family: "sf pro display", -apple-system, BlinkMacSystemFont, Roboto,
    "segoe ui", Helvetica, Arial, sans-serif, "apple color emoji",
    "segoe ui emoji", "segoe ui symbol";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #1c1d1f;
  margin-top: 5px;
`;

const Teachertwo = styled.div`
  font-size: 13px;
  color: #6a6f73;
  margin-top: 5px;
`;

const Ratings = styled.div`
  margin-top: 10px;
  display: flex;
  /* background-color: red; */
  justify-content: space-between;
  width: 190px;
  align-items: center;
`;

const Pricetwo = styled.div`
  margin-top: 10px;
  font-weight: bold;
`;
