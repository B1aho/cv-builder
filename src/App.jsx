import { useState } from 'react';
import './App.css';
import { CollapsibleFormList } from './components/CollapsibleForm/CollapsibleFormList';
import { Preview } from './components/Preview/Preview';
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

  const onClearForm = (type, formId) => {
    const newData = {...data};
    newData[type].forEach(form => {
      if (form.id === formId) {
        Object.keys(form).forEach(key => {
          if (key !== 'id' && key !== 'isComplete' && key !== 'shortView')
            form[key] = '';
        })
      }
    });
    setData(newData);
  }

  return (
    <>
      <section id="forms-section">
        <CollapsibleFormList onClearForm={onClearForm} onRemove={onRemove} onComplete={onComplete} onAddForm={onAddForm} onChange={onChange} controls={personalForm} type='personal' forms={data.personal} title="Personal Details" />
        <CollapsibleFormList onClearForm={onClearForm} onRemove={onRemove} onComplete={onComplete} onAddForm={onAddForm} onChange={onChange} controls={educationForm} type='education' forms={data.education} title="Educations" isMultiple={true} />
        <CollapsibleFormList onClearForm={onClearForm} onRemove={onRemove} onComplete={onComplete} onAddForm={onAddForm} onChange={onChange} controls={experienceForm} type='experience' forms={data.experience} title="Job experience" isMultiple={true} />
      </section>
      <section id="preview">
        <Preview formData={data}/>
      </section>
    </>
  )
}

export default App;
