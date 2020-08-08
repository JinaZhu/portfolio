import React from "react";
import { ContactPage } from "./styled";

const Contact = () => {
  return (
    <ContactPage>
      <h1>LET'S GET IN TOUCH</h1>
      <p>
        Need anything built, want to work together or just want to say hi?
        Simply shoot me a message below or connect with me and I will get back
        to you soon!
      </p>
      <ul class="nav-links">
        <li>Twitter</li>
        <li>Youtube</li>
        <li>Instagram</li>
      </ul>
      <div class="contract">
        <h2>Stay in touch.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          recusandae maxime rerum beatae nobis minus! Ab nemo pariatur delectus,
          praesentium, animi vero, enim laborum veritatis odit vitae repellat
          non sunt!
        </p>
      </div>
    </ContactPage>
  );
};

export default Contact;
