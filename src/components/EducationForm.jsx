import { FormBase } from "./FormBase";

export function EducationForm() {
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

  return <FormBase controls={controls} requiredId="university" id={crypto.randomUUID()}/>
}