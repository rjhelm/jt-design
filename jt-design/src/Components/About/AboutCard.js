import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mbh-0">
          <p style={{ textAlign: "justify" }}>
           Lorem Ipsum <span className="purple">Jordan Helm </span>
            from <span className="purple"> Salt Lake City.</span>
            <br />I am an Artist
            That practices all styles of art.
            <br />
            <br />
            I have a passion for creativity and express alot through artwork.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> SkateBoarding
            </li>
            <li className="about-activity">
              <ImPointRight /> Etc.
            </li>
          </ul>
          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            ""{" "}
          </p>
          <footer className="blockquote-footer">JT Design</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}
