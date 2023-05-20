import React from "react";
// import { shouldProcessLinkClick } from "react-router-dom/dist/dom";

export default function About(props) {
  let myStyle = {
    color: props.mode === "dark" ? "white" : "rgb(51 89 118)",
    backgroundColor: props.mode === "dark" ? "rgb(51 89 118)" : "white",
  };

  return (
    <div className="container" style={myStyle}>
      <h3
        className="my-3"
        style={{ color: props.mode === "dark" ? "white" : "#rgb(51 89 118)" }}
      >
        About Us
      </h3>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              About App
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>TextUtils</strong> 
               is a versatile text and word counter built with React. It
              provides a range of useful features to enhance your text editing
              experience. With our app, you can effortlessly count the number of
              words in your text, convert the text to uppercase or lowercase
              with a single click, and eliminate any extra spaces for clean
              formatting. Additionally, you can easily copy the text to your
              clipboard for quick sharing or clearing it with just one button.
              Simplify your text manipulation tasks and boost your productivity
              with our intuitive and user-friendly word and text counter app
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              About Me
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the second item's accordion body.</strong> It is
              Hello! I'm Sanwal, a software engineer based in Pakistan.

              I'm a Computer Science professional with a bachelor's degree. I specialize in React development and database systems. With expertise in React.js, Redux, SQL, and various database technologies, I have a strong foundation in building responsive interfaces, optimizing web performance, and collaborating with cross-functional teams.I have worked in engineering, development Various Companies.
              
              Passionate about staying up-to-date with the latest technologies, I continuously seek growth opportunities to enhance my skills and deliver top-notch solutions. I strive to create elegant and user-friendly applications that provide exceptional user experiences.
              
              If you're looking for a dedicated and skilled React developer with a focus on database systems, let's connect and discuss how we can work together to bring your ideas to life.
              
              Let's build something amazing together!
              Please visit my Website 
              <a href="https://mypersonal-six.vercel.app/"><strong>Website</strong></a>
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              About
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              This app is completely free of use and it is browser compatible
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
