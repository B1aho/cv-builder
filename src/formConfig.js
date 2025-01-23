export const educationForm = [
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

export const education = {
  id: "",
  university: "",
  shortView: "university",
  startYear: "",
  graduateYear: "",
  degree: "",
  isComplete: false,
}

export const experienceForm = [
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
  },
];

export const experience = {
  id: "",
  company: "",
  shortView: "company",
  role: "",
  startJobYear: "",
  endJobYear: "",
  jobDescription: "",
  isComplete: false,
}

export const personalForm = [
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

export const personal = {
  id: "",
  fullname: "",
  shortView: "fullname",
  phone: "",
  email: "",
  shortDescription: "",
  isComplete: false,
}