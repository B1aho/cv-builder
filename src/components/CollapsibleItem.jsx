import { useState } from "react";

export function CollapsibleItem({title, Form, isMultiple = false, onFormDataSubmit}) {
  const [isCollapse, setCollapse] = useState(false);
  const [forms, setForms] = useState([{id: crypto.randomUUID(), completed: false}]); 

  const toggleCollapse = () => {
    const newValue = isCollapse ? false : true;
    setCollapse(newValue);
  };

  const removeForm = (id) => {
    const newForms = forms.filter(form => form.id !== id);
    setForms(newForms);
  }

  const onAddFormClick = () => {
    const newForms = [...forms];
    newForms.push({id: crypto.randomUUID(), completed: false});
    setForms(newForms);
  };

  const everyOtherIsDone = () => {
    if (forms.length === 0)
      return true;
    return forms.every((form) => form.completed === true);
  }

  const onComplete = (id, newValue, data) => {
    const newForms = [...forms];
    newForms.forEach(form => form.id === id ? form.completed = newValue : null);
    setForms(newForms);
    onFormDataSubmit(data);
  };
  
  return (
    <div>
      <header onClick={toggleCollapse} style={{ cursor: 'pointer' }}>
        <h1>{title}</h1>
        <button>▶️</button>
      </header>
      <div style={{display: isCollapse ? 'none': 'block'}}>
        {forms.map(form => {
          return <Form removeForm={removeForm} key={form.id} id={form.id} onComplete={onComplete} isComplete={form.completed} />;
        })}
        {isMultiple && everyOtherIsDone() && <button onClick={onAddFormClick}>+ Add new item</button>}
      </div>

    </div>
  );
}