import React from "react";

import {
  JobContainer,
  JobTitle,
  DescriptionContainer,
  DescriptionLi,
  Year,
  ArrowImg,
  Ul,
} from "./styled";

const JobDescription = ({ company }) => {
  return (
    <JobContainer>
      <JobTitle>{company.title}</JobTitle>
      <Year>{company.year}</Year>
      <DescriptionContainer>
        <Ul>
          {company.descriptions.map((description, index) => {
            return (
              <DescriptionLi key={index}>
                {" "}
                <ArrowImg />
                {description}
              </DescriptionLi>
            );
          })}
        </Ul>
      </DescriptionContainer>
    </JobContainer>
  );
};

export default JobDescription;
