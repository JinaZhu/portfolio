import React from "react";
import { AlignFooter, Credit } from "./styled";

const Footer = () => {
  return (
    <AlignFooter>
      <Credit
        href="https://github.com/JinaZhu/portfolio"
        target="_blank"
        rel="noopener noreferrer"
      >
        Design and built by Jina Zhu
      </Credit>
    </AlignFooter>
  );
};

export default Footer;
