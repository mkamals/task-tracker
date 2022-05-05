import { Link } from "react-router-dom";
import "../css/about.css";

const About = () => {
  return (
    <div className="about">
      <h2>About</h2>
      <h4>Version 1.0.0</h4>
      <img src={require("../images/user.jpg")} alt="user" className="image" />
      <p>
        Hi, I'm Kamal Selvaraj. I'm a senior mobile application developer with
        experience in native android application and hybrid framework like React
        Native.
        <br />
        Currently, I'm learning ReactJS to enhance my skill sets and explore the
        areas around web development.
      </p>
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default About;
