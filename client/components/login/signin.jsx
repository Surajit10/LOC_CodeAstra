import { Button, Checkbox, Form, Input } from "antd";
import { UserContext } from "../../context/userContext";
import data from "../../data.json";
import { NavLink } from "react-router-dom";
import "./login.scss";
// const antd = window.antd;

const SignIn = () => {
  const [user, setuser] = useContext(UserContext).user;
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="illustration-wrapper">
          <img
            src="https://mixkit.imgix.net/art/preview/mixkit-left-handed-man-sitting-at-a-table-writing-in-a-notebook-27-original-large.png?q=80&auto=format%2Ccompress&h=700"
            alt="Login"
          />
        </div>
        <Form
          name="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <p className="form-title">Welcome</p>
          <p>Sign Up</p>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              onClick={() => {
                setuser(data);
              }}
            >
              SIGN UP
            </Button>
          </Form.Item>
          <div>
            Having Account? <NavLink to="/login">Login</NavLink>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
