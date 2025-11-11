import "../styles/Experience.css";

function Experience({cvData, onChange}) {

  return (
    <section className="experience-info">
        <h2>Work Experience Information</h2>

        <label htmlFor="input-company-name">Company Name:</label>
        <input id="input-company-name" name="companyName" type="text" value={cvData.companyName} onChange={onChange}/>

        <label htmlFor="input-position-title">Position Title:</label>
        <input id="input-position-title" name="positionTitle" type="text" value={cvData.positionTitle} onChange={onChange}/>

        <label htmlFor="input-responsibilities">Main Responsibilities of your Work:</label>
        <textarea id="input-responsibilities" name="responsibilities" value={cvData.responsibilities} onChange={onChange}/>

        <div className="experience-start-date">
            <label htmlFor="input-experience-start-date">Start Date:</label>
            <input id="input-experience-start-date" name="experienceStartDate" type="date" value={cvData.experienceStartDate} onChange={onChange}/>
        </div>

        <div className="experience-end-date">
            <label htmlFor="input-experience-end-date">End Date:</label>
            <input id="input-experience-end-date" name="experienceEndDate" type="date" value={cvData.experienceEndDate} onChange={onChange}/>
        </div>
    </section>
  )
}

export default Experience