import React, { useState } from "react";

import {
  ExperienceContainer,
  CompanyContainer,
  CompanyNameButton,
  ExperienceTitle,
} from "./styled";
import JobDescription from "./JobDescription";

const qrzn = {
  title: "Freelance Front-End Engineer",
  descriptions: [
    "Frontend developer for a multimedia web magazine",
    "Built a fully responsive web application using React and Gatsby and deployed on Netlify",
    "Focus on mobile-first, performance, and beautiful user experiences.",
  ],
};

const theRealReal = {
  company: "The RealReal",
  title: "Copywriter",
  descriptions: [
    "Created and edited titles and descriptions to accurately communicate product information.",
    "Researched brands and products to forecast seasonal trends increasing optimal search results.",
    "Mentored new hires to ensure writing standards are maintained.",
  ],
};

const bloomingdales = {
  company: "Bloomingdale",
  title: "Department Lead",
  descriptions: [
    "Analyzed and reviewed the business performance of daily, weekly, monthly, seasonal, and annual sales results.",
    "Partnered with vendors and buyers regarding inventory needs and customer preferences.",
    "Trained, coached and motivated new associates.",
  ],
};

const WorkExperience = () => {
  const [isQrzn, setIsQrzn] = useState(true);
  const [isTheRealReal, setIsTheRealReal] = useState(false);
  const [isBloomingdales, setIsBloomingdales] = useState(false);

  const displayCompany = (company, e) => {
    e.preventDefault();
    if (company === "qrzn") {
      setIsQrzn(true);
      setIsTheRealReal(false);
      setIsBloomingdales(false);
    } else if (company === "real") {
      setIsQrzn(false);
      setIsTheRealReal(true);
      setIsBloomingdales(false);
    } else if (company === "bloomingdales") {
      setIsQrzn(false);
      setIsTheRealReal(false);
      setIsBloomingdales(true);
    }
  };

  return (
    <ExperienceContainer>
      <ExperienceTitle>Where I've Worked</ExperienceTitle>
      <CompanyContainer>
        <CompanyNameButton
          isActive={isQrzn}
          onClick={(e) => {
            displayCompany("qrzn", e);
          }}
        >
          Qrzn
        </CompanyNameButton>
        <CompanyNameButton
          isActive={isTheRealReal}
          onClick={(e) => {
            displayCompany("real", e);
          }}
        >
          The RealReal
        </CompanyNameButton>
        <CompanyNameButton
          isActive={isBloomingdales}
          onClick={(e) => {
            displayCompany("bloomingdales", e);
          }}
        >
          Bloomingdales
        </CompanyNameButton>
      </CompanyContainer>
      {isQrzn && <JobDescription company={qrzn} />}
      {isTheRealReal && <JobDescription company={theRealReal} />}
      {isBloomingdales && <JobDescription company={bloomingdales} />}
    </ExperienceContainer>
  );
};

export default WorkExperience;
