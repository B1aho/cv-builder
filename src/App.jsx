import './App.css';
import { CollapsibleItem } from './components/CollapsibleItem';
import { EducationForm } from './components/EducationForm';

function App() {

  return (
    <>
      <CollapsibleItem title="Education">
        <EducationForm />
      </CollapsibleItem>
    </>
  )
}

export default App
