import headshot from "../assets/headshot.jpg";

export default function Home() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <h1 className="display-4 fw-bold mb-3">Hi, I'm Lennart Schaeffer.</h1>
          <p className="lead">
            I'm a third year CS student at Dalhousie University with a passion
            for Software Engineering and AI/ML. I love learning new things and
            building apps to solve problems, or anything related to my
            interests.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img
            src={headshot}
            alt="Lennart Schaeffer headshot"
            className="img-fluid rounded-sm shadow-lg"
            style={{ maxWidth: "400px", width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}
