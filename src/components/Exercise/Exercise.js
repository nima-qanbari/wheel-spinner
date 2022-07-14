import React, { useEffect, useState } from "react";
import clsx from "clsx";

import styled from "./Exercise.module.css";

const Exercise = ({ onReady, onStart }) => {
  const [rotate, setRotate] = useState(styled.box);

  const startRotation = () => {
    setRotate(`${styled.box} ${styled.startRotate}`);
  };
  const stopRotation = () => {
    // alert("should stop")
    setRotate(styled.box);
  };

  useEffect(() => {
    onReady({stop: stopRotation})
  }, [])
  return (
    <div id="mainbox" className={styled.mainbox}>
      <div id="box" className={rotate}>
        <div className={styled.box1}>
          <span className={styled.span1}>
            <b>Iron Man</b>
          </span>
          <span className={styled.span2}>
            <b>7500</b>
          </span>
          <span className={styled.span3}>
            <b>Bat Man</b>
          </span>
          <span className={styled.span4}>
            <b>Joker</b>
          </span>
        </div>
        <div className={styled.box2}>
          <span className={styled.span1}>
            <b>Shoplifters</b>
          </span>
          <span className={styled.span2}>
            <b>Inception</b>
          </span>
          <span className={styled.span3}>
            <b>Dead pool</b>
          </span>
          <span className={styled.span4}>
            <b>Terminator</b>
          </span>
        </div>
      </div>

      <button
        className={styled.spin}
        onClick={() => {
          startRotation();
          onStart();
        }}
      >
        SPIN
      </button>
    </div>
  );
};

export default Exercise;
