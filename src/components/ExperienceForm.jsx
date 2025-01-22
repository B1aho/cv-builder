import { FormBase } from "./FormBase";

export function ExperienceForm({id, onComplete, isComplete, removeForm}) {
  const controls = [
    {
      id: "company",
      label: "Company*:",
      required: true,
    },
    {
      id: "role",
      label: "Role:",
    },
    {
      id: "startJobYear",
      label: "Start year:",
    },
    {
      id: "endJobYear",
      label: "End year:",
    },
    {
      id: "jobDescription",
      label: "Job description:",
      type: "textarea"
    }
  ];

  return <FormBase onComplete={onComplete} removeForm={removeForm} isComplete={isComplete} controls={controls} requiredId="company" id={id}/>
}