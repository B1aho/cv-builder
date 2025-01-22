import { useState } from 'react';
import './App.css';
import { CollapsibleItem } from './components/CollapsibleItem';
import { EducationForm } from './components/EducationForm';
import { ExperienceForm } from './components/ExperienceForm';
import { PersonalForm } from './components/PersonalForm';
import { Preview } from './components/Preview';

function App() {
  const [data, setData] = useState({
    fullname: "Your fullname will be here",
    phone: "+1(234)5607",
    email: "mail@gmail.com",
    shortDescription: "Short self presentation...",
    university: "university",
    startYear: "2016",
    graduateYear: "2020",
    degree: "Phd",
    company: "Company",
    role: "Role",
    startJobYear: "2022",
    endJobYear: "2024",
    jobDescription: "Some job desc..."
  })
  const onFormDataSubmit = (formData) => {
    console.log(formData);
    const newData = {...data, ...formData}
    setData(newData);
  }
  return (
    <>
      <section id="forms-section">
        <CollapsibleItem onFormDataSubmit={onFormDataSubmit} title="Personal Details:" Form={PersonalForm} />
        <CollapsibleItem onFormDataSubmit={onFormDataSubmit} title="Education:" isMultiple={true} Form={EducationForm} />
        <CollapsibleItem onFormDataSubmit={onFormDataSubmit} title="Experience:" isMultiple={true} Form={ExperienceForm} />
      </section>
      <section id="preview">
        <Preview formData={data}/>
      </section>
    </>
  )
}

export default App
