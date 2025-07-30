import { Component, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import { useNavigate } from "react-router-dom";

const GalleryMovies = (props) => {
  const [state, setState] = useState({
    films: [],
    isLoading: true,
    isError: false,
  });

  const navigate = useNavigate();

  const getMovies = () => {
    fetch(props.endpoint)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel caricamento dei film");
        }
      })
      .then((movies) => {
        console.log(movies);
        setState({
          ...state,
          films: movies.Search,
          isLoading: false,
        });
      })
      .catch((err) => {
        console.log("ERRORE: ", err);
        setState({
          ...state,
          isLoading: false,
          isError: true,
        });
      });
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <Container>
        <Row className=" flex-nowrap overflow-x-auto g-3 p-3" id="row">
          {/* spinner per indicare il caricamento delle pagine */}
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

          {state.films.length === 0 && !state.isLoading && !state.isError && (
            <Alert variant="info" className="text-center">
              Al momento non sono presenti film, coming soon...
            </Alert>
          )}

          {state.films.map((movies) => {
            return (
              <Col
                className="d-flex justify-content-center "
                xs="12"
                md="6"
                lg="4"
                key={movies.imdbID}
              >
                <div
                  className=" d-flex flex-column align-items-center w-100 p-2"
                  id="box-film"
                >
                  <div className=" d-flex justify-content-center h-75 mt-3">
                    <img
                      src={movies.Poster}
                      alt="Poster del film"
                      className="img-fluid h-100 rounded-5"
                      id="img-poster"
                      onClick={() => {
                        navigate(`/moviedetails/` + movies.imdbID);
                      }}
                    />
                  </div>
                  <div
                    className=" mt-5 d-flex flex-column align-items-center "
                    id="description"
                  >
                    <h4 className="text-light text-center ">{movies.Title}</h4>
                    <h4 className=" text-light">{movies.Year}</h4>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default GalleryMovies;
