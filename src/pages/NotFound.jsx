import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center">
          <div className="error-content">
            <h1 className="display-1 fw-bold text-primary mb-4">404</h1>
            <h2 className="mb-3">Page Not Found</h2>
            <p className="lead text-muted mb-4">
              Oops! The page you're looking for doesn't exist.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <Link to="/" className="btn btn-primary btn-lg">
                <i className="bi bi-house-door me-2"></i>
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
