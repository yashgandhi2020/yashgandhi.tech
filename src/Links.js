import React from "react";
import Singlelinks from "./SingleLinks";

const Links = () => {
  return (
    <div className="container" id="Contact">
      <div className="container">
        <h3>Contact</h3>
        <br />
        <div className="container-fluid row pl-1 pr-0">
          <div className="container col-sm-12 col-lg-6 col-md-6 pr-0">
            <ul>
              <Singlelinks
                Label="LinkedIn :"
                href="https://www.linkedin.com/in/yash-gandhi-0a4010167/"
                name="Yash Gandhi"
                title="To show of Technical Skill's"
              />
              <br />
              <Singlelinks
                Label="Instagram :"
                href="https://www.instagram.com/yashgandhi876/"
                name="yashgandhi876"
                title="To show of other skill's"
              />
              <br />
              <Singlelinks
                Label="FaceBook :"
                href="https://www.facebook.com/profile.php?id=100034058533973"
                name="Yash Gandhi"
                title="Pure Time Pass Active once in year."
              />
            </ul>
            <br />
          </div>
          <div className="container col-sm-12 col-lg-6 col-md-6">
            <ul>
              <Singlelinks
                Label="Email :"
                href="mailto:yashgandhi876@gmail.com"
                name="yashgandhi876"
                title="yashgandhi876@gmail.com"
              />
              <br />
              <Singlelinks
                Label="GitHub :"
                href="https://github.com/yashgandhi2020"
                name="yashgandhi2020"
                title="To show of my technical work like projects."
              />
              <br />
              <Singlelinks
                Label="Twitter :"
                href="https://twitter.com/yashgandhi876"
                name="yashgandhi876"
                title="To share Knowledge."
              />
              <br />
            </ul>
          </div>
        </div>
      </div>
      <hr className="ununs underline" />
    </div>
  );
};

export default Links;
