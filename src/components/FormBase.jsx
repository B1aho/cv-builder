import { FormField } from "./FormField"
import { ControlBtns } from "./FormControlBtns";
import { FormCardView } from "./FormCardView";

export function FormBase({formValues, onChange, removeForm, onComplete, controls}) {
  const handleFormData = (e, control) => {
    const value = e.target.value;
    onChange(value, control, formValues.id)
  };

  const clearFormData = (e) => {
    e.preventDefault();
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target.form
    if (form.checkValidity()) {
      onComplete(formValues.id, true);
    }
    else
      form.reportValidity();
  }

  if (formValues.isComplete) 
    return (
      <FormCardView 
        title={formValues[formValues.shortView]} 
        onRemoveClick={removeForm ? () => removeForm(formValues.id) : false}  
        onEditClick={() => onComplete(formValues.id, false)}/>
    ); 

  return (
    <form id={formValues.id} action="/">
      {controls.map(controlInfo => {
        return <FormField 
          key={controlInfo.id}
          onChange={handleFormData}
          value={formValues[controlInfo.id]}
          id={controlInfo.id} 
          label={controlInfo.label}
          required = {controlInfo.required ? true : false}
          type={controlInfo.type}
        />
      })}
      <ControlBtns formId={formValues.id} onReset={clearFormData} onSubmit={handleSubmit}/>
    </form>
  )
}