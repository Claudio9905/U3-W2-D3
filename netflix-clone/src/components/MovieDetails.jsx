import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, CardText } from "react-bootstrap";

const MovieDetails = () => {
  const params = useParams();
  console.log("PARAMS", params);

  const [movieDetails, setMovieDetails] = useState({});

  const getDetails = () => {
    fetch("http://www.omdbapi.com/?apikey=a0ce6542&i=" + params.idMovies)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel recupero dati");
        }
      })
      .then((resData) => {
        console.log(resData);
        setMovieDetails(resData);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <>
      <Container>
        <Row className=" justify-content-center p-3">
          <Col xs={12} md={6} className="d-flex justify-content-center p-2 ">
            <Card
              className=" d-flex justify-content-center w-100 h-100"
              id="box-film"
            >
              <Card.Img
                variant="top"
                src={movieDetails.Poster}
                className=" d-flex justify-content-center h-75 ms-2 mt-3"
                id="img-poster"
              />
              <Card.Body
                className=" mt-5 d-flex flex-column align-items-start "
                id="description"
              >
                <Card.Title className="text-light text-center ">
                  {movieDetails.Title}
                </Card.Title>
                <div className="d-flex flex-column align-items-start">
                  <h4 className=" text-light">Year:</h4>
                  <Card.Text className=" text-light">
                    {movieDetails.Year}
                  </Card.Text>
                  <CardText className=" text-light">
                    {movieDetails.Genre}
                  </CardText>
                  <h4 className=" text-light">Actors:</h4>
                  <CardText className=" text-light">
                    {movieDetails.Actors}
                  </CardText>
                  <h4 className=" text-light">Plot:</h4>
                  <CardText className=" text-light">
                    {movieDetails.Plot}
                  </CardText>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MovieDetails;
