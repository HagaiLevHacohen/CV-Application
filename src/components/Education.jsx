function Education({cvData, onChange}) {



  return (
    <section className="education-info">
        <h2>Education Information</h2>

        <label htmlFor="input-school-name">School Name:</label>
        <input id="input-school-name" name="schoolName" type="text" value={cvData.schoolName} onChange={onChange}/>

        <label htmlFor="input-study-title">Title of Study:</label>
        <input id="input-study-title" name="studyTitle" type="text" value={cvData.studyTitle} onChange={onChange}/>

        <label htmlFor="input-education-start-date">Start Date:</label>
        <input id="input-education-start-date" name="educationStartDate" type="date" value={cvData.educationStartDate} onChange={onChange}/>

        <label htmlFor="input-education-end-date">End Date:</label>
        <input id="input-education-end-date" name="educationEndDate" type="date" value={cvData.educationEndDate} onChange={onChange}/>
    </section>
  )
}

export default Education