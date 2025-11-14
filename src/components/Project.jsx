export default function Project({ project }) {
  return (
    <div className="col-12 mb-4">
      <div className="card shadow-sm h-100 project-card">
        <div className="row g-0">
          <div className="col-md-5 d-flex justify-content-center align-items-center mt-sm-3 mt-md-0">
            <img
              src={project.image}
              className="img-fluid rounded-start h-100 object-fit-cover"
              alt={project.title}
            />
          </div>
          <div className="col-md-7">
            <div className="card-body p-4">
              <div className="mb-3">
                <h2 className="card-title h3 mb-2">{project.title}</h2>
                {project.subtitle && (
                  <span className="badge bg-dark mb-2">{project.subtitle}</span>
                )}
                <p className="text-muted mb-3">
                  <strong>Technologies:</strong> {project.technologies}
                </p>
              </div>
              <div className="mb-3">
                <h5 className="fw-bold">Overview</h5>
                <p className="card-text">{project.description}</p>
              </div>
              <div className="mb-3">
                <h5 className="fw-bold">Problem Solved</h5>
                <p className="card-text">{project.problemSolved}</p>
              </div>
              <div className="mb-3">
                <h5 className="fw-bold">My Role</h5>
                <p className="card-text">{project.role}</p>
              </div>
              <div>
                <h5 className="fw-bold">Key Achievements</h5>
                <ul className="m-0 p-0">
                  {project.achievements.map((achievement, i) => (
                    <li key={i} className="mb-2 p-0">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
