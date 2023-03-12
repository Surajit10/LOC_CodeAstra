import { NavLink } from "react-router-dom";
import { Avatar, Space } from "antd";
import { Dropdown } from "antd";
import { Button, Modal } from "antd";
import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import { message, Upload } from "antd";
import { Input } from "antd";
import axios from "axios";
// import saveImage from "../../logic/saveImages";
// import loadImage from "../../logic/readImage";
const { TextArea } = Input;
import { CloudinaryContext, Image } from "cloudinary-react";
import saveImage from "../../logic/saveImages";
import styles from "./navbar.module.scss";

const Navbar = () => {
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");
  const [user, setuser] = useContext(UserContext).user;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreate = async () => {
    const url = await saveImage(file);
    const rawResponse = await fetch(
      "http://localhost:3000/photographer-details/featured_image",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id_featured: url,
          description: description,
          creator_id: user.photographer._id,
        }),
      }
    );
    const content = await rawResponse.json();
    console.log(content);
    message.success("Message saved successfully!!");
    setIsModalOpen(false);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = async () => {
    await handleCreate();
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const items = [
    {
      label: <a href={`/photographer/${user?.photographer?._id}`}>About me</a>,
      key: "0",
    },
    {
      label: <div onClick={showModal}>upload Image</div>,
      key: "1",
    },
    {
      label: (
        <div
          onClick={() => {
            setuser(null);
          }}
        >
          Log out
        </div>
      ),
      key: "2",
    },
    {
      type: "divider",
    },
  ];
  const [avatar, setAvatar] = useState(
    "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1580&q=80"
  );
  return (
    <>
      <>
        <Modal
          title="Basic Modal"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div className={styles.item}>
            <label className={styles.label}>Choose an image</label>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          </div>
          <br />
          <TextArea rows={4} />
        </Modal>
      </>
      <div className={styles.navbar}>
        <div className={styles.navbarLinks}>
          <div className={styles.navbarLogo}>
            <a href="/">
              <img src="../../src/assets/logo.png" height="100%" />
            </a>
          </div>
          <div className={styles.navbarLink}>
            <div>
              <a href="/">Home</a>
            </div>
            <div>
              <a href="/photographer">Photographers</a>
            </div>
            <div>
              <a href="http://127.0.0.1:5500/server/job-view.html">
                Apply Jobs
              </a>
            </div>
            <div>
              <a href="/">Photos</a>
            </div>
            <div>
              <a href="http://127.0.0.1:5500/server/blog-view.html">Blogs</a>
            </div>
          </div>
        </div>
        <div>
          {!user ? (
            <>
              <a href="/login">Login/signup</a>
            </>
          ) : (
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <Avatar src={<img src={avatar} alt="avatar" />} />
                </Space>
              </a>
            </Dropdown>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
