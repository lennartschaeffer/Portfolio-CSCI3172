import ContactMethod from "../components/ContactMethod";

function Contact() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h1 className="mb-4 text-center">Contact Me</h1>
          <div className="row g-4">
            <ContactMethod
              icon="envelope-fill"
              iconColor="primary"
              title="Email"
              linkText="ln546006@dal.ca"
              linkUrl="mailto:ln546006@dal.ca"
              colSize="col-md-12"
            />
            <ContactMethod
              icon="linkedin"
              iconColor="primary"
              title="LinkedIn"
              linkText="View Profile"
              linkUrl="https://www.linkedin.com/in/lennart-schaeffer-929b12247/"
            />
            <ContactMethod
              icon="github"
              iconColor="dark"
              title="GitHub"
              linkText="github.com/lennartschaeffer"
              linkUrl="https://github.com/lennartschaeffer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
