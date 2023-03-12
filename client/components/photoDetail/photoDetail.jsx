import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProfileHeader from "../detail/detail";
import PhotoGrid from "../photoGrid/photoGrid";

const PhotoDetails = (props) => {
  const [images, setImages] = useState([]);

  const params = useParams();
  const [photographer, setPhotographer] = useState({
    name: "",
    email_id: "",
    phone_no: "",
    password: "",
    website_url: "",
    style: "",
    "Awards & recognition": "",
    "Other Information": "",
    "Profile Review": "",
    Star_Rating: 0,
    profile_image_id: "",
    banner_image_id: "",
    featured_images: [],
  });

  useEffect(async () => {
    const res = await fetch("http://localhost:3000/images");
    const data = await res.json();
    setImages(data);
    console.log(data);
  }, []);

  return (
    <div>
      <ProfileHeader user={photographer} />
      <div>
        <div
          style={{
            fontSize: "30px",
            fontWeight: "800",
            margin: "15px",
            marginBottom: "-100px",
            textAlign: "center",
          }}
        >
          PHOTOS
        </div>
        <PhotoGrid photos={images} />
      </div>
    </div>
  );
};

export default PhotoDetails;
