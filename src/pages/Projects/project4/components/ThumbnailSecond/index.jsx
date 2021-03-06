import { useRef, useState, useEffect  } from "react";
import { productsSecond } from "../../data/productsItems";

import styles from "./styles.module.css";

const ThumbnailSecond = ({ zoom, setZoom }) => {
  const zoomRef = useRef(false)


  return (
    <div className={`${styles.secondProduct} ${zoom ? styles.normal : ''}`} >
      {productsSecond.map((products) => (
        <div key={products.id}>
          <img
            src={products.productSecond}
            alt={products.id}
            tabIndex={products.id}
            onClick={setZoom}
            className={zoom ? styles.overshadow : ""}
           ref={zoomRef}
          />
        </div>
      ))}
    </div>
  );
};

export default ThumbnailSecond;
