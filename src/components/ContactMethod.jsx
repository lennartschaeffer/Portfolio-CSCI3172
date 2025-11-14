export default function ContactMethod({
  icon,
  iconColor = "primary",
  title,
  linkText,
  linkUrl,
  colSize = "col-md-6",
}) {
  return (
    <div className={colSize}>
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <div className="flex-shrink-0">
              <i className={`bi bi-${icon} text-${iconColor} fs-1`}></i>
            </div>
            <div className="flex-grow-1 ms-3">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">
                <a
                  href={linkUrl}
                  target={linkUrl.startsWith("http") ? "_blank" : undefined} //open link in new browser tab if its a external link
                  rel={
                    linkUrl.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  } //security measure best practice for external links
                  className="text-decoration-none"
                >
                  {linkText}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
