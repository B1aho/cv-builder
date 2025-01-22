export function Preview({formData}) {
  return (
    <>
      <header className="header">
        <div className="contact-info">
          <h1>{formData.fullname}</h1>
          <div className="contact-info-details">
            <p>{formData.phone}</p>
            <p>{formData.email}</p>
          </div>
        </div>
        <div className="short-description">
          <p>{formData.shortDescription}</p>
        </div>
      </header>
      <main>
        <section className="main-content educations">
          <h3 className="main-content__title">Educations</h3>
          <div className="preview-entry education">
            <p className="text-bold">{formData.university}</p>
            <p className="text-light-italic">{formData.degree}, GPA: {formData.grade}</p>
          </div><p>{formData.startYear}-{formData.graduateYear}</p>
          {/* <div className="preview-entry education">
            <p className="text-bold">University2</p>
            <p className="text-light-italic">Degree, GPA: Grade</p>
            <p>Start Year-Graduate Year</p>
          </div> */}
        </section>
        <section className="main-content experiences">
          <h3 className="main-content__title">Experiences</h3>
          <div className="preview-entry experience">
            <p className="text-bold">{formData.company}</p>
            <p className="text-light-italic">{formData.role}</p>
            <p>{formData.jobDescription}</p>
            <p>{formData.startJobYear}-{formData.endJobYear}</p>
          </div>
        </section>
      </main>
    </>
  );
}