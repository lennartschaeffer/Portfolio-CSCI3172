function Footer() {
  return (
    <footer className="bg-dark text-white mt-5">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="text-light">
              &copy; {new Date().getFullYear()} Lennart Schaeffer. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
