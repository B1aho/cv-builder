import { useState } from "react";
import { FormField } from "./FormField"
import { ControlBtns } from "./FormControlBtns";
import { FormCardView } from "./FormCardView";

export function EducationForm({id}) {
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

  const clearFormData = (e) => {
    e.preventDefault();
    const newformData = { ...formData};
    Object.keys(newformData).forEach(key => {
      newformData[key] = '';
    })
    setFormData(newformData);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsDone(true);
  }

  if (isDone) 
    return (
      <FormCardView title={formData.university} onEditClick={() => setIsDone(false)}/>
    ); 

  return (
    <form id={id} action="/">
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
      <ControlBtns onReset={clearFormData} onSubmit={handleSubmit}/>
    </form>
  )
}