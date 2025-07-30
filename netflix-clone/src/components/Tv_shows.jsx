import { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";

const Tv_shows = () => {
  const [state, setState] = useState({
    tvSeries: [],
    isLoading: true,
    isError: false,
  });

  const getSeriesTv = () => {
    fetch(`http://www.omdbapi.com/?apikey=a0ce6542&S=Disney`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel recupero dati");
        }
      })
      .then((resData) => {
        console.log(resData);
        setState({
          ...state,
          tvSeries: resData.Search,
          isLoading: false,
        });
      })
      .catch((err) => {
        console.log("Errore:", err);
        setState({
          ...state,
          isError: true,
        });
      });
  };

  useEffect(() => {
    getSeriesTv();
  }, []);

  return (
    <>
      <Container>
        <Row className=" flex-nowrap overflow-x-auto g-5 p-5" id="row">
          {/* qui verrà piazzato lo spinner per il caricamento e l'alert per l'errore */}
          {state.isLoading && (
            <div className="text-center mb-3">
              <Spinner animation="border" variant="light" />
            </div>
          )}
          {state.isError && (
            <Alert variant="danger" className="text-center">
              Errore nel caricamento della lista dei film 😥
            </Alert>
          )}

          {state.tvSeries.map((movies) => {
            return (
              <Col
                xs={12}
                md={6}
                lg="4"
                key={movies.imdbID}
                className="d-flex justify-content-center "
              >
                <Card
                  className=" d-flex flex-column align-items-center w-100 h-100"
                  id="box-film"
                >
                  <Card.Img
                    variant="top"
                    src={movies.Poster}
                    className=" d-flex justify-content-center h-75 mt-3"
                    id="img-poster"
                  />
                  <Card.Body
                    className=" mt-5 d-flex flex-column align-items-center "
                    id="description"
                  >
                    <Card.Title className="text-light text-center ">
                      {movies.Title}
                    </Card.Title>
                    <Card.Text className=" text-light">{movies.Year}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Tv_shows;
