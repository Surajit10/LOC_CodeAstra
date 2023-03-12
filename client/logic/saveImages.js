import axios from "axios";

const saveImage = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "uploads");
  const uploadRes = await axios.post(
    "https://api.cloudinary.com/v1_1/dhan6t3xc/image/upload",
    data
  );
  const { url } = uploadRes.data;
  return url;
};
export default saveImage;
