import GeneralInfo from "./GeneralInfo";
import Education from "./Education"
import Experience from "./Experience"



function Form({cvData, onChange, onSubmit}) {



  return (
    <form onSubmit={onSubmit}>
        <GeneralInfo cvData={cvData} onChange={onChange}></GeneralInfo>
        <Education cvData={cvData} onChange={onChange}></Education>
        <Experience cvData={cvData} onChange={onChange}></Experience>
        <button type="submit" className="submitBtn">Submit</button>
    </form>
  )
}

export default Form