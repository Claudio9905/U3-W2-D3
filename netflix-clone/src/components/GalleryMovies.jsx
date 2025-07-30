import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";

class GalleryMovies extends Component {
  state = {
    films: [],
    isLoading: true,
    isError: false,
  };

  getMovies = () => {
    fetch(this.props.endpoint)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel caricamento dei film");
        }
      })
      .then((movies) => {
        console.log(movies);
        this.setState({
          films: movies.Search,
          isLoading: false,
        });
      })
      .catch((err) => {
        console.log("ERRORE: ", err);
        this.setState({
          isLoading: false,
          isError: true,
        });
      });
  };

  componentDidMount() {
    console.log("IO SONO COMPONENTDIDMOUNT");
    this.getMovies();
  }

  render() {
    console.log("INVOCATO RENDER");
    return (
      <>
        <Container fluid>
          <Row className=" flex-nowrap overflow-x-auto g-3 p-3" id="row">
            {/* spinner per indicare il caricamento delle pagine */}
            {this.state.isLoading && (
              <div className="text-center mb-3">
                <Spinner animation="border" variant="light" />
              </div>
            )}
            {this.state.isError && (
              <Alert variant="danger" className="text-center">
                Errore nel caricamento della lista dei film 😥
              </Alert>
            )}

            {this.state.films.length === 0 &&
              !this.state.isLoading &&
              !this.state.isError && (
                <Alert variant="info" className="text-center">
                  Al momento non sono presenti film, coming soon...
                </Alert>
              )}

            {this.state.films.map((movies) => {
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
                      />
                    </div>
                    <div
                      className=" mt-5 d-flex flex-column align-items-center "
                      id="description"
                    >
                      <h4 className="text-light text-center ">
                        {movies.Title}
                      </h4>
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
  }
}

export default GalleryMovies;
