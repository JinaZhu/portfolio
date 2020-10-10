import React from "react";
import {
  JobContainer,
  JobTitle,
  DescriptionContainer,
  DescriptionLi,
} from "./styled";

const JobDescription = ({ company }) => {
  return (
    <JobContainer>
      <JobTitle>{company.title}</JobTitle>
      <DescriptionContainer>
        <ul>
          {company.descriptions.map((description, index) => {
            return <DescriptionLi key={index}>{description}</DescriptionLi>;
          })}
        </ul>
      </DescriptionContainer>
    </JobContainer>
  );
};

export default JobDescription;
