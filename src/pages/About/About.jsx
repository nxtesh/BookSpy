import React from "react";
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
        </div>

        <div className="about-content grid">
          <div className="about-img">
            <img src={aboutImg} alt="" />
          </div>
          <div className="about-text">
            <h2 className="about-title fs-26 ls-1">About BookHub</h2>
            <p className="fs-17">
              Welcome to BookSpy, your go-to destination for discovering and
              exploring a world of books. Our mission is to make it easier for
              book lovers like you to find your next great read. <br />
              <br />
              <b>Our Mission</b>
              <br />
              At BookSpy, we are passionate about books and believe in the power
              of reading to transform lives. Our mission is to connect readers
              with the books they love and introduce them to new literary
              adventures. <br />
              <br />
              <b>Contact Us</b> <br />
              We value your feedback and suggestions. If you have any questions
              or want to get in touch, please don't hesitate to contact us at
              nitesh2003y@gmail.com. <br />
              <br />
              Thank you for choosing BookSpy as your book-finding companion.{" "}
              <br /> <br />
              Happy reading! Feel free to adapt and expand upon this content to
              match your website's specific goals and values.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
