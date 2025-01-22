import './App.css';
import { CollapsibleItem } from './components/CollapsibleItem';
import { EducationForm } from './components/EducationForm';
import { ExperienceForm } from './components/ExperienceForm';
import { PersonalForm } from './components/PersonalForm';

function App() {

  return (
    <>
      <CollapsibleItem title="Personal Details:" Form={PersonalForm} />
      <CollapsibleItem title="Education:" isMultiple={true} Form={EducationForm} />
      <CollapsibleItem title="Experience:" isMultiple={true} Form={ExperienceForm} />
    </>
  )
}

export default App
