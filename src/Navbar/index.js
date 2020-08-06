import React from "./node_modules/react";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="./Home">Home</a>
        </li>
        <li>
          <a href="./Project">Project</a>
        </li>
        <li>
          <a href="./AboutMe">About Me</a>
        </li>
        <button>Contact</button>
      </ul>
    </nav>
  );
};

export default Navbar;
