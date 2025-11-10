function CV({cvData, onEdit}) {
  return(
    <div className="cv">
        <section className="cv-general-info">
            <h1>General Information</h1>
            <div>{cvData.name}</div>
        </section>
        <section className="cv-education">
            <h1>Education</h1>
        </section>
        <section className="cv-experience">
            <h1>Work Experience</h1>
        </section>
        <button type="button" className="editBtn" onClick={onEdit}>Edit</button>
    </div>
  )
}

export default CV