import { BiSearchAlt } from "react-icons/bi";
import { Select } from "antd";
import { Input } from "antd";

const SearchComp = ({ onSearch, home = false, handleChange }) => {
  const suffix = home ? (
    <Select
      defaultValue="Category"
      style={{
        width: 120,
      }}
      onChange={handleChange}
      allowClear
      options={[
        {
          value: "Portrait",
          label: "portrait",
        },
        {
          value: "Landscape",
          label: "landscape",
        },
        {
          value: "Wildlife",
          label: "wildlife",
        },
        {
          value: "Fashion",
          label: "fashion",
        },
        {
          value: "Sport",
          label: "sport",
        },
        {
          value: "Occasion",
          label: "occasion",
        },
      ]}
    />
  ) : (
    <></>
  );
  return (
    <Input
      size="large"
      onChange={onSearch}
      allowClear
      placeholder="Search Here"
      suffix={suffix}
      prefix={<BiSearchAlt />}
      style={{
        width: "100%",
        fontSize: "20px",
      }}
    />
  );
};

export default SearchComp;
