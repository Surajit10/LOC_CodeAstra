import { BrowserRouter } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import { UserContext } from "../context/userContext";
import Pages from "../router/route";
import data from "../data.json";
import { useContext } from "react";

function App() {
  const [user, setuser] = useContext(UserContext).user;
  setuser(data);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Pages />
      </BrowserRouter>
    </>
  );
}

export default App;
