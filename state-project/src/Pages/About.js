import { useOutletContext } from "react-router-dom";

function About() {
  const user = useOutletContext();
  return (
    <>
      Hello, {user.age}
        <div className="about-main">
            <p className="about-body">
            "A passionate photographer with a deep love for nature and tranquil
            environments, always seeking new and peaceful places to capture and
            unwind.{" "}
            </p>
            <img
            className="about-image-body"
            src="https://expertphotography.b-cdn.net/wp-content/uploads/2018/02/DSLR-camera-DSLRSLR-1-1.jpg"
            ></img>
            <p className="about-body2">
            With an eye for detail and a love for capturing memories, every click
            of the camera is a step towards capturing the beauty of the world."
            </p>
        </div>
    </>
  );
}
export default About;
