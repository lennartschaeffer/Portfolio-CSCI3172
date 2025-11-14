export default function TechnicalSkills({
  title,
  skills,
  badgeColor = "primary",
}) {
  return (
    <div className="col-md-6">
      <div className="card shadow-sm h-100">
        <div className="card-body">
          <h3 className="h5 fw-bold mb-3">{title}</h3>
          <div className="d-flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill} className={`badge bg-${badgeColor}`}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
