import React from "react";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  // navegate関数を取得
  const navigate = useNavigate();
  // トップページに移動
  const handleClick = () => navigate("/");

  return (
    <>
      <p>Aboutページです</p>
      <button onClick={handleClick} type="button">
        トップページへ
      </button>
    </>
  );
};

export default AboutPage;
