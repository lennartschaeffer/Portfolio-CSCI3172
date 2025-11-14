export default function JobExperience({ title, company, startDate, endDate }) {
  return (
    <div className="col-12">
      <div className="card shadow-sm">
        <div className="card-body">
          <h3 className="h5 fw-bold">{title}</h3>
          <p className="text-primary mb-2">{company}</p>
          <p className="text-muted mb-0">
            {startDate} - {endDate}
          </p>
        </div>
      </div>
    </div>
  );
}
