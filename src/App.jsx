import './App.css';
import { CollapsibleItem } from './components/CollapsibleItem';
import { EducationForm } from './components/EducationForm';
import { ExperienceForm } from './components/ExperienceForm';

function App() {

  return (
    <>
      <CollapsibleItem title="Education:">
        <EducationForm/>
      </CollapsibleItem>
      <CollapsibleItem title="Experience:">
        <ExperienceForm />
      </CollapsibleItem>
    </>
  )
}

export default App
