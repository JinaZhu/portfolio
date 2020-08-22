import React from "react";

import githubLogo from "../images/Icons/github.svg";

const ProjectLayout = () => {
  return (
    <div>
      <h2>Adventure Await</h2>
      <div>
        <p>
          Adventure Awaits is a full-stack web application that allows anyone to
          discover somewhere new by providing an insight into a country.
        </p>
        <div>
          <p>React</p>
          <p>Flask</p>
          <p>Styled Components</p>
        </div>
        <a
          href="https://github.com/JinaZhu/World-Traveler"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubLogo} alt="github logo" width="50" />
        </a>
      </div>
    </div>
  );
};

export default ProjectLayout;
