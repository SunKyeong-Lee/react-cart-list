import { Outlet } from "react-router-dom";
import NavbarComp from "../components/NavbarComp";

const Home = () => {
  return (
    <div>
      <NavbarComp />
      <Outlet />
    </div>
  );
}

export default Home;