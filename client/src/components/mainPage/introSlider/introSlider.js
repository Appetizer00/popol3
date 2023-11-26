import React, { useState, useEffect } from "react";
import "./introSlider.css"; // 스타일 파일 임포트
import introslider1 from "./../../image/introslider1.jpg";
import introslider2 from "./../../image/introslider2.jpg";
import introslider3 from "./../../image/introslider3.jpg";
import { Link } from "react-router-dom";

const IntroSlider = () => {
  const images = [introslider1, introslider2, introslider3]; // 이미지 경로 배열
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // 다음 이미지로 이동
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 4000); // 5초마다 이미지 변경

    // 컴포넌트가 언마운트되면 interval 해제
    return () => clearInterval(intervalId);
  }, [currentImage, images.length]);

  return (
    <div className="slider-container">
      <div className="introTitleBox">
        <div className="introTitle">
          <span>왔다가</span>
          에서
          <br />
          편하게 예약하세요!
        </div>
        <a href="/recommend" id='introTitleBtn_link'>
          <div className='introTitleBtn'>지금 예약하기 &gt;&gt;</div>
        </a>
      </div>
      {images.map((image, index) => (
        <div
          key={index}
          className={`slider-item parent-filter ${
            index === currentImage ? "visible" : ""
          }`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
    </div>
  );
};

export default IntroSlider;
