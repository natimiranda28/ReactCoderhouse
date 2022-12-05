import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <>
      <footer>
        <h2 className="elem-foot">
          Contactate con nosotros y mantenete al tanto de las novedades de
          nuestra tienda en:
        </h2>
        <a
          className="elem-foot"
          href="https://www.facebook.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src="Media/facebook.webp" width="50" height="50" alt="Facebook" />
        </a>
        <a
          className="elem-foot"
          href="https://www.instagram.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src="Media/instagram.webp" width="50" height="50" alt="Instagram" />
        </a>
      </footer>
    </>
  );
};

export default Footer;
