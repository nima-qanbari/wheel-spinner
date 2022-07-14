import React from 'react'

import styled from "./WeelLuck.module.css"

const WheelLuck = () => {
  return (
    <div className={styled.wrapper}>
        <button id='spin'>spin</button>
        <span className={styled.arrow}></span>
      <div className={styled.container}>
        <div className={styled.one}>1</div>
        <div className={styled.two}>2</div>
        <div className={styled.three}>3</div>
        <div className={styled.four}>4</div>
        <div className={styled.five}>5</div>
        <div className={styled.six}>6</div>
        <div className={styled.seven}>7</div>
        <div className={styled.eight}>8</div>
      </div>
    </div>
  );
}

export default WheelLuck