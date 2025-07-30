import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavbarHeader = () => {
  return (
    <>
      {/* <nav className="navbar navbar-expand-lg bg-moreDark">
        <div className="container-fluid ms-3">
          <div id="logo-box">
            <img
              src="./netflix_logo.png"
              alt="logo-agenzia"
              className="img-fluid"
            />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedScroll"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto my-2 p-1 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <a
                  className="nav-link text-light tag-page"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light tag-page" href="#">
                  TV Shows
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light " href="#">
                  Movies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light tag-page" href="#">
                  Recently Added
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light tag-page" href="#">
                  My List
                </a>
              </li>
            </ul>
            <form className="d-flex ms-5" role="search">
              <input
                className="form-control me-2 rounded-5"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-danger rounded-5"
                type="submit"
              >
                <i className="bi bi-search"></i>
              </button>
            </form>
            <button id="btn-ring">
              <i className="bi bi-bell-fill mx-2 fs-4" id="ring"></i>
            </button>
            <a href="./index-profile.html" className="text-decoration-none">
              <img
                src="./doctor-strange-icon.png"
                alt="icona-profilo"
                id="icon-profile-home"
                className="img-fluid ms-2"
              />
            </a>
          </div>
        </div>
      </nav> */}
      <Navbar expand="lg" className="bg-moreDark">
        <Container>
          <Navbar.Brand href="#home" id="logo-box">
            <img
              src="./netflix_logo.png"
              alt="logo-agenzia"
              className="img-fluid"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex">
              <Nav.Link href="#" className="nav-item text-light tag-page">
                Home
              </Nav.Link>
              <Nav.Link href="#" className="nav-item text-light tag-page">
                TV Shows
              </Nav.Link>
              <Nav.Link href="#" className="nav-item text-light tag-page">
                Movies
              </Nav.Link>
              <Nav.Link href="#" className="nav-item text-light tag-page">
                Recently Added
              </Nav.Link>
              <Nav.Link href="#" className="nav-item text-light tag-page">
                My List
              </Nav.Link>
            </Nav>
            <div className="d-flex">
              <form className="d-flex ms-5" role="search">
                <input
                  className="form-control me-2 rounded-5"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-danger rounded-5"
                  type="submit"
                >
                  <i className="bi bi-search"></i>
                </button>
              </form>
              <button id="btn-ring">
                <i className="bi bi-bell-fill mx-2 fs-4" id="ring"></i>
              </button>
              <a href="./index-profile.html" className="text-decoration-none">
                <img
                  src="./doctor-strange-icon.png"
                  alt="icona-profilo"
                  id="icon-profile-home"
                  className="img-fluid ms-2"
                />
              </a>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      ;
    </>
  );
};

export default NavbarHeader;
