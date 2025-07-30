import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

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
        <Row className=" justify-content-center">
          <Col xs={12} md={6} lg="4" className="d-flex justify-content-center ">
            <Card
              className=" d-flex flex-column align-items-center w-100 h-100"
              id="box-film"
            >
              <Card.Img
                variant="top"
                src={movieDetails.Poster}
                className=" d-flex justify-content-center h-75 mt-3"
                id="img-poster"
              />
              <Card.Body
                className=" mt-5 d-flex flex-column align-items-center "
                id="description"
              >
                <Card.Title className="text-light text-center ">
                  {movieDetails.Title}
                </Card.Title>
                <Card.Text className=" text-light">
                  {movieDetails.Year}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MovieDetails;
