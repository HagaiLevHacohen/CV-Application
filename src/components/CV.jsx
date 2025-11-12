import "../styles/CV.css";

function CV({ cvData, onEdit }) {
  return (
    <div className="cv">
      <section className="cv-general-info">
        <h1>{cvData.name != "" ? cvData.name : "Your Name"}</h1>
        <div className="cv-email">
          <p>Email:</p>
          <p>{cvData.email}</p>
        </div>
        <div className="cv-phone">
          <p>Phone:</p>
          <p>{cvData.phone}</p>
        </div>
        <div className="cv-address">
          <p>Address:</p>
          <p>{cvData.address}</p>
        </div>
      </section>
      <div className="cv-info">
        <section className="cv-education">
          <h1>Education</h1>
          <div className="cv-school-name">
            <p>School Name:</p>
            <p>{cvData.schoolName}</p>
          </div>
          <div className="cv-study-title">
            <p>Title of Study:</p>
            <p>{cvData.studyTitle}</p>
          </div>
          <div className="cv-education-start-date">
            <p>Start Date:</p>
            <p>{cvData.educationStartDate}</p>
          </div>
          <div className="cv-education-end-date">
            <p>End Date:</p>
            <p>{cvData.educationEndDate}</p>
          </div>
        </section>
        <section className="cv-experience">
          <h1>Work Experience</h1>
          <div className="cv-company-name">
            <p>Company Name:</p>
            <p>{cvData.companyName}</p>
          </div>
          <div className="cv-position-title">
            <p>Position Title:</p>
            <p>{cvData.positionTitle}</p>
          </div>
          <div className="cv-responsibilities">
            <p>Main Responsibilities of your Work:</p>
            <p>{cvData.responsibilities}</p>
          </div>
          <div className="cv-experience-start-date">
            <p>Start Date:</p>
            <p>{cvData.experienceStartDate}</p>
          </div>
          <div className="cv-experience-end-date">
            <p>End Date:</p>
            <p>{cvData.experienceEndDate}</p>
          </div>
        </section>
        <button type="button" className="editBtn" onClick={onEdit}>
          Edit
        </button>
      </div>
    </div>
  );
}

export default CV;
