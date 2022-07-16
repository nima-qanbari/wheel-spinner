import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";

import styled from "./Exercise.module.css";

const width = 410;
const height = 410;

const wheelItems = [
  { image: "../../assets/banimod.png", id: 1 },
  { image: "../../assets/banimod.png", id: 2 },
  { image: "../../assets/banimod.png", id: 3 },
  { image: "../../assets/banimod.png", id: 4 },
  { image: "../../assets/banimod.png", id: 5 },
  { image: "../../assets/banimod.png", id: 6 },
  { image: "../../assets/banimod.png", id: 7 },
  { image: "../../assets/banimod.png", id: 8 },
];

const Exercise = ({ onReady, onStart }) => {
  const lights = [...Array(16)];
  const [rotate, setRotate] = useState(styled.box);
  const boxRef = useRef();

  
  const startRotation = () => {
    // setRotate(`${styled.box} ${styled.startRotate}`);
    boxRef.current.style.animationPlayState = "running";
  };
  const stopRotation = (id) => {
    // alert("should stop")
    // setRotate(`${styled.box} ${styled.startRotate} ${styled.stop}`);
    boxRef.current.style.animationPlayState = "paused";
    const transition = window.getComputedStyle(boxRef.current).transform;
    const numberPattern = /-?\d+\.?\d+|\d+/g;
    const item = document.getElementById(`item-${id}`);
    console.log(window.getComputedStyle(item));
    const values = transition.match(numberPattern);
    const angle = Math.round(
      Math.atan2(values[1], values[0]) * (180 / Math.PI)
    );
    console.log("aaa", id, angle);
  };

  useEffect(() => {
    onReady({ stop: stopRotation });
  }, []);
  return (
    <div id="mainbox" className={styled.mainbox}>
      <div id="box" className={rotate} ref={boxRef}>
        <div className={styled.box1}>
          {wheelItems.slice(0, 4).map((item, index) => {
            return (
              <span
                key={item.id}
                id={`item-${item.id}`}
                className={styled[`spanB1${index + 1}`]}
              >
                <b>{item.id}</b>
              </span>
            );
          })}
        </div>
        <div className={styled.box2}>
          {wheelItems.slice(4).map((item, index) => {
            return (
              <span
                key={item.id}
                id={`item-${item.id}`}
                className={styled[`spanB2${index + 5}`]}
              >
                <b>{item.id}</b>
              </span>
            );
          })}

          {/* <span className={styled.spanB25}>
            <b></b>
          </span>
          <span className={styled.spanB26}>
            <b></b>
          </span>
          <span className={styled.spanB27}>
            <b></b>
          </span>
          <span className={styled.spanB28}>
            <b></b>
          </span> */}
        </div>
      </div>

      <div className={styled.lights}>
        {lights.map((_, index) => {
          const deg = index * (Math.PI / 8);
          return (
            <div
              key={index}
              className={clsx(
                styled.light,
                index % 2 === 0 ? styled.even : styled.odd
              )}
              style={{
                left: (width / 2) * Math.sin(deg) + width / 2,
                top: (height / 2) * Math.cos(deg) + height / 2,
              }}
            ></div>
          );
        })}
      </div>

      <div
        className={styled.spin}
        onClick={() => {
          startRotation();
          onStart();
        }}
      >
        بچرخون
      </div>
    </div>
  );
};

export default Exercise;
