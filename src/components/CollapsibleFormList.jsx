import './CollapsibleForm.css';
import { useState } from "react";
import { FormBase } from "./FormBase";

export function CollapsibleFormList({onClearForm, onRemove, onAddForm, onChange, onComplete, title, type, forms, controls, isMultiple = false}) {
  const [isCollapse, setCollapse] = useState(false);

  const onFormChange = (value, control, formID) => {
    onChange(value, control, type, formID)
  }

  const toggleCollapse = () => {
    const newValue = isCollapse ? false : true;
    setCollapse(newValue);
  };

  const removeForm = (id) => {
    onRemove(type, id);
  }

  const clearForm = (id) => {
    onClearForm(type, id);
  }

  const everyOtherIsDone = () => {
    if (forms.length === 0)
      return true;
    return forms.every((form) => form.isComplete === true);
  }

  
  return (
    <div className="collapse-form">
      <header className="collapse-header" onClick={toggleCollapse} style={{ cursor: 'pointer' }}>
        <h1>{title}</h1>
        <button>▶️</button>
      </header>
      <div style={{display: isCollapse ? 'none': 'block'}}>
        {forms.length > 0 && 
        forms.map(form => {
          return (<FormBase clearForm={clearForm} key={form.id} formValues={form} onChange={onFormChange} onComplete={(id, value) => onComplete(id, type, value)} removeForm={removeForm} controls={controls} />)
        })}
        {(isMultiple && everyOtherIsDone() || forms.length === 0) && <button onClick={() => onAddForm(type)}>+ Add new item</button>}
      </div>

    </div>
  );
}