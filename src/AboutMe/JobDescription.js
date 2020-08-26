import React from "react";

const JobDescription = ({ company }) => {
  return (
    <div>
      <h3>{company.title}</h3>
      <div>
        <ul>
          {company.descriptions.map((description, index) => {
            return <li key={index}>{description}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default JobDescription;
