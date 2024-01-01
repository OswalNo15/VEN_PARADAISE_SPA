import React, { useState } from "react";
import Image from "next/image";

function ImageOptimize({ Values }) {
  const [onError, setonError] = useState(false);
  const urlImagneDefault = "/img/Logo_VenParadaiseSpa1024x1024.webp";
  const handleError = () => {
    setonError(true);
  };

  return (
    <>
      {Values.isimg ? (
        <img
          alt={
            Values.alt !== "" && Values.alt != undefined
              ? Values.alt
              : "default"
          }
          src={Values.src == null ? urlImagneDefault : Values.src}
          title={Values.title}
          className={Values.classValue}
          style={Values.style}
          width={Values.width}
          height={Values.height}
          loading="lazy"
        ></img>
      ) : (
        <Image
          alt={
            Values.alt !== "" && Values.alt != undefined
              ? Values.alt
              : "default"
          }
          src={
            onError
              ? urlImagneDefault
              : Values.src == null
              ? urlImagneDefault
              : Values.src
          }
          title={Values.title}
          className={Values.classValue}
          style={Values.style}
          quality={100}
          width={Values.width}
          height={Values.height}
          onError={() => handleError()}
        ></Image>
      )}

      {/*  */}
    </>
  );
}

export default ImageOptimize;
