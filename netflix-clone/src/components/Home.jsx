import GalleryMovies from "./GalleryMovies";

const endpoint1 =
  "http://www.omdbapi.com/?apikey=a0ce6542&S=The_Lord_Of_The_Rings";
const endpoint2 = "http://www.omdbapi.com/?apikey=a0ce6542&S=Superman";
const endpoint3 = "http://www.omdbapi.com/?apikey=a0ce6542&S=Disney";

const Home = (props) => {
  return (
    <>
      <div className=" d-flex justify-content-start mt-3" id="title-home">
        <h1 className="text-light fs-2" id="title-page">
          Movies
        </h1>
      </div>
      <div className=" d-flex flex-column align-items-center p-5">
        <div className="d-flex justify-content-center align-items-center mb-5 p-3 title-gallery">
          <h3 className=" text-light ">{props.title1}</h3>
        </div>
        <GalleryMovies endpoint={endpoint1} />
      </div>
      <div className=" d-flex flex-column align-items-center p-5">
        <div className="d-flex justify-content-center align-items-center mb-5 p-3 title-gallery">
          <h3 className=" text-light ">{props.title2}</h3>
        </div>
        <GalleryMovies endpoint={endpoint2} />
      </div>
      <div className=" d-flex flex-column align-items-center p-5">
        <div className=" d-flex justify-content-center align-items-center mb-5 p-3 title-gallery">
          <h3 className=" text-light ">{props.title3}</h3>
        </div>
        <GalleryMovies endpoint={endpoint3} />
      </div>
    </>
  );
};

export default Home;
