import Login from "../auth/login/Login";
import useStoreLogin from "../../store/useStoreLogin";
import Register from "../auth/register/Register";
import Logout from "../auth/logout/Logout";

const Nav = () => {
  const { login } = useStoreLogin();
  const user = JSON.parse(localStorage.getItem("info"));

  return (
    <nav
      className="max-w-[1440px] h-[10%] w-full bg-white
    flex items-center justify-between px-9
    font-roboto mx-auto
    "
    >
      <img src="./header/iconServiYAwhite.svg" alt="" />
      {user ?  <Logout/>:
        <div className="flex items-center gap-8 justify-center">
          <Login />
           <Register/>
        </div>
       }
    </nav>
  );
};

export default Nav;
