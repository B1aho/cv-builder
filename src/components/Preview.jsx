import './Preview.css';

export function Preview({formData}) {
  const {personal, education, experience } = formData;
  const pers = personal[0] ? personal[0] : {};
  return (
    <>
      <header className="header">
        <div className="contact-info">
          <h1 className='fullname'>{pers.fullname || 'Your name here'}</h1>
          <div className="contact-info-details">
            <p className='text-light-italic'>{pers.phone}</p>
            <p className='text-light-italic'>{pers.email}</p>
          </div>
        </div>
        <div className="short-description">
          <p className="short-description">{pers.shortDescription}</p>
        </div>
      </header>
      <main>
        <section className="main-content educations">
          <h3 className="main-content__title">Educations:</h3>
          {education.map(formVal => {
            return (
              <div className='preview-container' key={formVal.id}>
                <div className="preview-entry education">
                  <p className="text-bold">{formVal.university}</p>
                  <p className="text-light-italic">{formVal.degree}, GPA: {formVal.grade}</p>
                </div>
                <div className="preview-years">
                  <p>{formVal.startYear}-{formVal.graduateYear}</p>
                </div>
              </div>
            )
          })}
        </section>
        <section className="main-content experiences">
          <h3 className="main-content__title">Experiences:</h3>
          <div className="preview-entry experience">
            {experience.map(formVal => {
              return (
                <div className='preview-container' key={formVal.id}>
                  <div className="company-content">
                    <p className="text-bold">{formVal.company}</p>
                    <p className="text-light-italic">{formVal.role}</p>
                    <p>{formVal.jobDescription}</p>
                  </div>
                  <div className="preview-years">
                    <p>{formVal.startJobYear}-{formVal.endJobYear}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </main>
    </>
  );
}