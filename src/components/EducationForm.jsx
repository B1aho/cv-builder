import { FormBase } from "./FormBase";

export function EducationForm({id, onComplete, isComplete, removeForm}) {
  const controls = [
    {
      id: "university",
      label: "University*:",
      required: true,
    },
    {
      id: "startYear",
      label: "Start year:",
    },
    {
      id: "graduateYear",
      label: "Graduate year:",
    },
    {
      id: "degree",
      label: "Degree:",
    },
  ];

  return <FormBase onComplete={onComplete} removeForm={removeForm} isComplete={isComplete} controls={controls} requiredId="university" id={id}/>
}