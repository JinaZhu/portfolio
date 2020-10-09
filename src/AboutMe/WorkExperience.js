import React, { useState } from "react";

import {
  ExperienceContainer,
  CompanyContainer,
  CompanyNameButton,
  ExperienceTitle,
} from "./styled";
import JobDescription from "./JobDescription";

const qrzn = {
  company: "Qrzn",
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

const jobs = [qrzn, theRealReal, bloomingdales];

const WorkExperience = () => {
  const [currentJob, setCurrentJob] = useState(qrzn);

  console.log("currentJob", currentJob);
  return (
    <ExperienceContainer>
      <ExperienceTitle>Where I've Worked</ExperienceTitle>
      <CompanyContainer>
        {jobs.map((job) => {
          return (
            <CompanyNameButton
              key={job.company}
              onClick={() => setCurrentJob(job)}
            >
              {job.company}
            </CompanyNameButton>
          );
        })}
      </CompanyContainer>
      <JobDescription company={currentJob} />
    </ExperienceContainer>
  );
};

export default WorkExperience;
