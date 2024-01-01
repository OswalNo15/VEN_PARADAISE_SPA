import React from "react";
import Styles from "../../styles/Loading.module.css";
import ImageOptimize from "../tools/ImageOptimize";

function Loading() {
  return (
    <div className={Styles.bodyLoader}>
      <ImageOptimize
        Values={{
          src: "/img/Logo_VenParadaiseSpa256x256.webp",
          alt: "VenParadise-SPA",
          classValue: Styles.img,
          width: 256,
          height: 256,
        }}
      />
      <div className={Styles.loader}>
        <span className={Styles.span}></span>
        <span className={Styles.span}></span>
        <span className={Styles.span}></span>
        <span className={Styles.span}>aa</span>
      </div>
    </div>
  );
}

export default Loading;
