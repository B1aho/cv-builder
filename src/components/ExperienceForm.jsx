import { FormBase } from "./FormBase";

export function ExperienceForm() {
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
      id: "start-year",
      label: "Start year:",
    },
    {
      id: "end-year",
      label: "End year:",
    },
    {
      id: "job-description",
      label: "Job description:",
      type: "textarea"
    }
  ];

  return <FormBase controls={controls} requiredId="company" id={crypto.randomUUID()}/>
}