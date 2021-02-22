import React, { useState } from "react";

import {
  ExperienceContainer,
  CompanyContainer,
  CompanyNameButton,
  ExperienceTitle,
  ExperienceTitleContainer,
  ExperienceDetailContainer,
  ExperienceBorder,
} from "./styled";
import JobDescription from "./JobDescription";

const qrzn = {
  company: "Qrzn",
  title: "Freelance Front-End Engineer",
  year: "Mar 2020 - Oct 2020",
  descriptions: [
    "Frontend developer for a multimedia web magazine",
    "Built a fully responsive web application using React and Gatsby and deployed on Netlify",
    "Focus on mobile-first, performance, and beautiful user experiences.",
  ],
};

const theRealReal = {
  company: "The RealReal",
  title: "Copywriter",
  year: "Dec 2017 - Dec 2019",
  descriptions: [
    "Created and edited titles and descriptions to accurately communicate product information.",
    "Researched brands and products to forecast seasonal trends increasing optimal search results.",
    "Mentored new hires to ensure writing standards are maintained.",
  ],
};

const bloomingdales = {
  company: "Bloomingdale",
  title: "Department Lead",
  year: "Feb 2017 - Dec 2017",
  descriptions: [
    "Analyzed and reviewed the business performance of daily, weekly, monthly, seasonal, and annual sales results.",
    "Partnered with vendors and buyers regarding inventory needs and customer preferences.",
    "Trained, coached and motivated new associates.",
  ],
};

const jobs = [qrzn, theRealReal, bloomingdales];

const WorkExperience = ({ season }) => {
  const [currentJob, setCurrentJob] = useState(qrzn);

  function checkActive(job) {
    if (job === currentJob) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <ExperienceContainer>
      <ExperienceBorder>
        <CompanyContainer>
          {jobs.map((job) => {
            return (
              <CompanyNameButton
                key={job.company}
                isActive={checkActive(job)}
                onClick={() => setCurrentJob(job)}
                color={season.color}
              >
                {job.company}
              </CompanyNameButton>
            );
          })}
        </CompanyContainer>
        <JobDescription company={currentJob} />
      </ExperienceBorder>
    </ExperienceContainer>
  );
};

export default WorkExperience;
