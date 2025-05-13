import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import nPlusImage from "../assets/n+.png";
import sPlusImage from "../assets/s+.png";

function AboutCard() {
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
          </p>

          {/* 👇 Static badge images here */}
          <div style={{ display: "flex", gap: "7rem", margin: "1rem 0", margin-left: "8rem" }}>
            <img
              src={nPlusImage}
              alt="CompTIA Network+ Badge"
              width="150"
              height="150"
              style={{ borderRadius: "8px" }}
            />
            <img
              src={sPlusImage}
              alt="CompTIA Security+ Badge"
              width="150"
              height="150"
              style={{ borderRadius: "8px" }}
            />
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
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Sarthak</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
