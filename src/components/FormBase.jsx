import { useState } from "react";
import { FormField } from "./FormField"
import { ControlBtns } from "./FormControlBtns";
import { FormCardView } from "./FormCardView";

export function FormBase({id, isComplete, removeForm, onComplete, controls, requiredId}) {
  const [formData, setFormData] = useState(controls.reduce((acc, curr) => {
    acc[curr.id] = '';
    return acc;
  }, {}));

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
    const form = e.target.form
    if (form.checkValidity())
      onComplete(id, true);
    else
      form.reportValidity();
  }

  if (isComplete) 
    return (
      <FormCardView 
        title={formData[requiredId]} 
        onRemoveClick={removeForm ? () => removeForm(id) : false}  
        onEditClick={() => onComplete(id, false)}/>
    ); 

  return (
    <form id={id} action="/">
      {controls.map(controlInfo => {
        return <FormField 
          key={controlInfo.id}
          onChange={handleFormData}
          value={formData[controlInfo.id]}
          id={controlInfo.id} 
          label={controlInfo.label}
          required = {controlInfo.required ? true : false}
          type={controlInfo.type}
        />
      })}
      <ControlBtns formId={id} onReset={clearFormData} onSubmit={handleSubmit}/>
    </form>
  )
}