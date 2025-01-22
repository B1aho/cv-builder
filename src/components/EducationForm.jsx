import { useState } from "react";
import { FormField } from "./FormField"

export function EducationForm() {
  const [isDone, setIsDone] = useState(false);
  const [formData, setFormData] = useState({
    university: '',
    startYear: '',
    graduateYear: '',
    degree: '',
  });

  const handleFormData = (e, id) => {
    const value = e.target.value;
    const newformData = { ...formData};
    newformData[id] = value;
    setFormData(newformData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsDone(true);
  }

  if (isDone) 
    return (
      // Сокращенная форма карточки
      <div className="form-card">
        <h3>{formData.university}...</h3>
        <div className="form-card-controlls">
          <button>X</button>
          <button onClick={() => setIsDone(false)}>Edit</button>
        </div>
      </div>
    ); 

  return (
    <form action="/">
      <FormField 
        onChange={handleFormData}
        value={formData.university}
        id="university" 
        label="University:"
        required={true}
      />
      <FormField 
        value={formData.startYear}
        onChange={handleFormData}
        id="startYear" 
        label="Start year:"
      />
      <FormField 
        value={formData.graduateYear}
        onChange={handleFormData}
        id="graduateYear" 
        label="Graduate year:"
      />
      <FormField 
        value={formData.degree}
        onChange={handleFormData}
        id="degree" 
        label="Degree:"
      />
      <div className="form-controlls">
        <button type="submit" onClick={handleSubmit}>Add data!</button>
        <button type="reset">Clear form!</button>
      </div>
    </form>
  )
}