import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam et
          maiores reiciendis, ea omnis qui. Provident quidem, libero atque
          facere ad placeat suscipit perspiciatis aperiam ullam expedita, qui
          molestias reiciendis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam et
          maiores reiciendis, ea omnis qui. Provident quidem, libero atque
          facere ad placeat suscipit perspiciatis aperiam ullam expedita, qui
          molestias reiciendis.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
