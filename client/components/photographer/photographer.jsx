import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import UserCardImage from "../card/card";
import SearchComp from "../search/search";
import styles from "./photographer.module.scss";

const Photographer = () => {
  const [photographers, setPhotographers] = useState([]);
  useEffect(async () => {
    const res = await fetch("http://localhost:3000/photographer-details");
    const data = await res.json();
    setPhotographers(data);
  }, []);

  const onSearch = (val) => {
    console.log("search: ", val);
  };

  const handleChange = (val) => {
    console.log("handel change: ", val);
  };
  return (
    <div className={styles.photos}>
      <div className={styles.search}>
        <SearchComp
          onSearch={onSearch}
          home={true}
          handleChange={handleChange}
        />
      </div>
      <div className={styles.cards}>
        {photographers.map((items) => {
          return (
            <a href={`/photographer/${items._id}`}>
              <UserCardImage
                image="https://source.unsplash.com/random/4000x1000"
                avatar="https://source.unsplash.com/random/3000x2000"
                tags={items?.style}
                name={items.name}
              />
            </a>
          );
        })}
        {/* <NavLink to="id">
          <UserCardImage
            image="https://source.unsplash.com/random/3000x2000"
            avatar="https://source.unsplash.com/random/3000x2000"
            tags={["asd", "asd", "asd", "asd", "asd", "asd", "as"]}
          />
        </NavLink> */}
      </div>
    </div>
  );
};

export default Photographer;
