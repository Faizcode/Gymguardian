import axios from "axios";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { DASHBOARD_PAGE_ROUTE, LOGIN_PAGE_ROUTE } from "../../routes";

export const checkToken = (navigate) => {
  const jwt = localStorage.getItem(process.env.REACT_APP_USER_DASHBOARD_TOKEN);
  if (jwt === null) {
    navigate(LOGIN_PAGE_ROUTE);
  } else {
    return jwt;
  }
};

const LoginService = {
  login: async (navigate, name, email, id_token) => {
    await axios({
      method: "post",
      url: `${process.env.REACT_APP_BACKEND_SERVER_PORT}/users/login`,
      data: {
        name: name,
        email: email,
        _id: id_token,
      },
    }).then((response) => {
      if (response.data && response.data.jwt) {
        localStorage.setItem(
          `${process.env.REACT_APP_USER_DASHBOARD_TOKEN}`,
          response.data.jwt
        );
        toast.success("Successfully logged in!", {
          position: "bottom-left",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "light",
        });
        navigate("/dashboard");
      } else {
        toast.error(
          "Unexpected error while logging in. Please try again later.",
          {
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
          }
        );
      }
    });
  },
  logout: async (navigate) => {
    await signOut(auth).then(() => {
      localStorage.clear();
      navigate(LOGIN_PAGE_ROUTE);
    });
  },
};

export default LoginService;
