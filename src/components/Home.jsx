import React, { useEffect, useRef } from "react";

import hero from "./data/hero.json";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "My Name is Sumit Kushwaha",
        "I'm Full Stack Developer",
        "",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home" id="home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typedRef}></h1>

          {/* <a
            href={pdf}
            download="Resume.pdf"
            className="btn btn-outline-warning my-3"
          >
            Download Resume
          </a> */}




          {/* <a href="/pdf/cv1.pdf" download="Sumit's_CV" className="btn btn-outline-warning">
            Download CV
          </a> */}


<a
  href=" https://drive.google.com/file/d/1gG_sClHQINi3yZBygxXK-5hIYqlKtIQs/view?usp=sharing "
  className="btn btn-outline-warning"
  target="_blank"
  rel="noopener noreferrer"
>
  Download CV
</a>




        </div>
        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src={`/assets/${hero.imgSrc}`} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
