import React from "react";
import supportpageimg from "../Assets/supportpageimg.png";
import "../components/css/Supportpageherocontent.css";
const supportpageherocontent = () => {
  return (
    <section className="supportpage_herocontent_wrapper">
      <div className="supportpage_herocontent">
        <div className="supportpage_herocontent_image">
          <img src={supportpageimg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default supportpageherocontent;
