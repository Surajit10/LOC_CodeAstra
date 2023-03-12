import { Tag } from "antd";

const colors = [
  "magenta",
  "red",
  "volcano",
  "orange",
  "gold",
  "lime",
  "green",
  "cyan",
  "blue",
  "geekblue",
  "purple",
];

const TagCom = ({ tagname }) => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  return <Tag color={randomColor}>{tagname}</Tag>;
};
export default TagCom;
