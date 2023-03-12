import { Card, Avatar } from "@mantine/core";
import { AiFillStar } from "react-icons/ai";
import Tag from "../tag/tag";
import styles from "./card.module.scss";

const UserCardImage = ({ image, avatar, tags, name }) => {
  return (
    <Card withBorder padding="xl" radius="md" className={styles.card}>
      <Card.Section
        sx={{
          backgroundImage: `url(${image})`,
          height: 140,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <Avatar
        src={avatar}
        size={100}
        radius={80}
        mx="auto"
        mt={-30}
        className={styles.avatar}
      />
      <div className={styles.details}>
        <div className={styles.name}>
          <div className={styles.creator}>{name}</div>
          <div className={styles.exp}>5 years experience</div>
        </div>
        <div>
          4 <AiFillStar style={{ color: "#F7C04A" }} />
        </div>
      </div>
      <div className={styles.tags}>
        <Tag tagname={tags} />
        {/* {tags ? (
          tags.map((val) => {
            return <Tag tagname={val} />;
          })
        ) : (
          <></>
        )} */}
      </div>
    </Card>
  );
};

export default UserCardImage;
