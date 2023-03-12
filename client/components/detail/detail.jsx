import classes from "./detail.module.scss";
import { AiFillPhone, AiTwotoneMail } from "react-icons/ai";

const ProfileHeader = ({ user, session }) => {
  return (
    <div className={classes.header}>
      <div
        className={classes.headerImage}
        style={{
          background:
            "url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1874&q=80)",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className={classes.subSection}>
        <div
          className={classes.profile}
          style={{
            background:
              "url(https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1580&q=80)",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className={classes.details}>
          <div className={classes.subDetails}>
            <div className={classes.title}>Surajit Mondal</div>
            <div className={classes.experience}>
              <div>5 Year Experience</div>
              <div>
                <AiFillPhone /> +91 1234567890
              </div>
              <div>
                <AiTwotoneMail /> suraji123@gmail.com
              </div>
            </div>
          </div>
          <div className={classes.rating}>4 ⭐</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
