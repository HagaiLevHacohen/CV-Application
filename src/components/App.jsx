import { useState } from 'react'
import Form from './Form.jsx'
import CV from './CV.jsx'
import "../styles/App.css"

function App() {
  // Holds all form data
  const [cvData, setCvData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    schoolName: '',
    studyTitle: '',
    educationStartDate: '',
    educationEndDate: '',
    companyName: '',
    positionTitle: '',
    responsibilities: '',
    experienceStartDate: '',
    experienceEndDate: '',
  })

  // Controls which view is shown
  const [showForm, setShowForm] = useState(true)

  function handleSubmit(e) {
    e.preventDefault()
    setShowForm(false) // switch to CV view
  }

  function handleEdit() {
    setShowForm(true) // switch back to form view
  }

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setCvData({...cvData, [name]:value});
  }

  return (
    <div class="form-container">
      {showForm ? (
        <Form cvData={cvData} onChange={handleChange} onSubmit={handleSubmit} />
      ) : (
        <CV cvData={cvData} onEdit={handleEdit} />
      )}
    </div>
  )
}

export default App

