const FooterContent = () => {
  return (
    <>
      <section id="icons" className="d-flex justify-content-start">
        <i className="bi bi-facebook m-2 fs-3"></i>
        <i className="bi bi-instagram m-2 fs-3"></i>
        <i className="bi bi-twitter m-2 fs-3"></i>
        <i className="bi bi-youtube m-2 fs-3"></i>
      </section>
      <section id="info" className="mt-3 mb-3 d-flex justify-content-start">
        <div className="container">
          <div className="row">
            <div className="col">
              <h6>Audio and Subtitles</h6>
            </div>
            <div className="col">
              <h6>Audio Description</h6>
            </div>
            <div className="col">
              <h6>Help Center</h6>
            </div>
            <div className="col">
              <h6>Gift Cards</h6>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h6>Media Center</h6>
            </div>
            <div className="col">
              <h6>Investor Relations</h6>
            </div>
            <div className="col">
              <h6>Jobs</h6>
            </div>
            <div className="col">
              <h6>Terms of Use</h6>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h6>Privacy</h6>
            </div>
            <div className="col">
              <h6>Legal Notices</h6>
            </div>
            <div className="col">
              <h6>Cookie Preferences</h6>
            </div>
            <div className="col">
              <h6>Corporate Information</h6>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h6>Contact Us</h6>
            </div>
          </div>
        </div>
      </section>
      <section className="d-flex justify-content-start">
        <a
          href="#"
          className="border border-1 border-secondary text-secondary p-1 m-2 link-edit1"
        >
          Service Code
        </a>
      </section>
      <p className="mt-2">© 1997-2019 Netflix,Inc. i-0d00fcda2fdf9c0de</p>
    </>
  );
};

export default FooterContent;
