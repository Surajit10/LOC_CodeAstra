import PhotoGrid from "../photoGrid/photoGrid";
import Search from "../search/search";
import React, { useState, useEffect, useContext } from "react";
import styles from "./home.module.scss";
import { UserContext } from "../../context/userContext";

const Home = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [user, setuser] = useContext(UserContext).user;
  const [images, setImages] = useState([]);

  // useEffect(() => {
  //   console.log("user: ");
  //   console.log(user);
  //   function handleScroll() {
  //     if (window.scrollY > 100) {
  //       setIsFixed(true);
  //     } else {
  //       setIsFixed(false);
  //     }
  //   }
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  useEffect(async () => {
    const res = await fetch("http://localhost:3000/images");
    const data = await res.json();
    setImages(data);
    // console.log(data);
  }, []);

  const onSearch = (val) => {
    console.log(val);
  };
  return (
    <div>
      {/* <div className={`${styles.search} ${isFixed ? styles.fixed : null}`}>
        <Search onSearch={onSearch} />
      </div> */}
      <PhotoGrid photos={images} />
    </div>
  );
};

export default Home;
