import { useState } from 'react';
import './App.css';
import { CollapsibleFormList } from './components/CollapsibleFormList';
import { Preview } from './components/Preview';
import { experienceForm, educationForm, personalForm, personal, experience, education } from './formConfig';

function App() {
  // Храним данные для всех секций в состоянии
  const [data, setData] = useState({
    personal: [],
    education: [],
    experience: [],
  });

  const onChange = (value, control, type, formId) => {
    const newData = {...data};
    newData[type].forEach(form => {
      form.id === formId ? form[control] = value : null;
    });
    setData(newData);
  }

  const onAddForm = (type) => {
    const newData = {...data};
    switch (type) {
    case 'personal':{
      const newForm = {...personal};
      newForm.id = crypto.randomUUID();
      newData[type].push(newForm);}
      break;
    case 'education':{
      const newForm = {...education};
      newForm.id = crypto.randomUUID();
      newData[type].push(newForm);
    }
      break;
    case 'experience':{
      const newForm = {...experience};
      newForm.id = crypto.randomUUID();
      newData[type].push(newForm);
    }
      break;
    default:
      break;
    }
    setData(newData);
  };

  const onComplete = (id, type, value) => {
    const newData = {...data};
    newData[type].forEach(form => {
      form.id === id ? form.isComplete = value : null;
    });
    setData(newData);
  }

  const onRemove = (type, formId) => {
    const newData = {...data};
    newData[type] = newData[type].filter((form) => form.id !== formId);
    setData(newData);
  }

  return (
    <>
      <section id="forms-section">
        <CollapsibleFormList onRemove={onRemove} onComplete={onComplete} onAddForm={onAddForm} onChange={onChange} controls={personalForm} type='personal' forms={data.personal} title="Personal Details:" />
        <CollapsibleFormList onRemove={onRemove} onComplete={onComplete} onAddForm={onAddForm} onChange={onChange} controls={educationForm} type='education' forms={data.education} title="Educations:" isMultiple={true} />
        <CollapsibleFormList onRemove={onRemove} onComplete={onComplete} onAddForm={onAddForm} onChange={onChange} controls={experienceForm} type='experience' forms={data.experience} title="Job experience:" isMultiple={true} />
      </section>
      <section id="preview">
        <Preview formData={data}/>
      </section>
    </>
  )
}

export default App;
