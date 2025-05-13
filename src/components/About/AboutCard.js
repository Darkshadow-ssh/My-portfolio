import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sarthak Chauhan </span>
            from <span className="purple"> Roorkee, India.</span>
            <br />
            I am currently employed as a Technology Trainee at Physics Wallah IOI, Bangalore.
            <br />
            I have completed BCA hons. in Cybersecurity at Lovely Professional University, Phagwara.
            <br />
            I have successfully completed CompTIA Network+ and CompTIA Security+ Certification.
            <br />
          </p>

          {/* 👇 Add Credly badges here */}
          <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
            <div
              data-iframe-width="150"
              data-iframe-height="270"
              data-share-badge-id="bc7afd4f-0c10-4a2d-8866-4e049ee3db22"
              data-share-badge-host="https://www.credly.com"
            ></div>
            <div
              data-iframe-width="150"
              data-iframe-height="270"
              data-share-badge-id="5082d455-c9d8-442f-8a27-47f517511c35"
              data-share-badge-host="https://www.credly.com"
            ></div>
          </div>

          <p style={{ textAlign: "justify" }}>
            Apart from coding, some other activities that I love to do!
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing CTF Challenges
            </li>
            <li className="about-activity">
              <ImPointRight /> Solving Complex Data Structure Problems
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sarthak</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
