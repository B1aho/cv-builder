import { FormBase } from "./FormBase";

export function PersonalForm({id, onComplete, isComplete}) {
  const controls = [
    {
      id: "fullname",
      label: "Full Name*:",
      required: true,
    },
    {
      id: "phone",
      label: "Phone number:",
      required: true,
    },
    {
      id: "email",
      label: "Email:",
      type: "email",
    },
    {
      id: "shortDescription",
      label: "Your short description:",
      type: "textarea",
    },
  ];

  return <FormBase onComplete={onComplete} isComplete={isComplete} controls={controls} requiredId="fullname" id={id}/>
}