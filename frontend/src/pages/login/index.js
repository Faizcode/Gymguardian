import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Card, CardContent, Typography } from "@mui/material";
import * as firebaseui from "firebaseui";
import firebase from "firebase/compat/app";
import "firebaseui/dist/firebaseui.css";
import { auth } from "../../firebase";
import LoginService from "../../services/login";
import { DASHBOARD_PAGE_ROUTE, HOME_PAGE_ROUTE } from "../../routes";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const jwt = localStorage.getItem(
      process.env.REACT_APP_USER_DASHBOARD_TOKEN
    );

    if (!jwt) {
      const ui =
        firebaseui.auth.AuthUI.getInstance() ||
        new firebaseui.auth.AuthUI(auth);
      ui.start("#firebaseui-auth-container", {
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ],
        signInFlow: "popup",
        credentialHelper: firebaseui.auth.CredentialHelper.NONE,
        callbacks: {
          signInSuccessWithAuthResult: async (currentUser) => {
            setIsLoading(true);
            if (currentUser) {
              const token = await currentUser.user.getIdToken();

              const callAPI = async () => {
                await LoginService.login(
                  navigate,
                  currentUser.user.displayName,
                  currentUser.user.email,
                  token
                );
              };
              callAPI();

              return false;
            }
            setIsLoading(false);
          },
        },
      });
    } else {
      navigate(DASHBOARD_PAGE_ROUTE);
    }
  }, [navigate]);

  return (
    <>
      <Box sx={{ backgroundColor: "#f5f5f5", minHeight: "93vh" }}>
        <Box gutterbottom="true" sx={{ backgroundColor: "#f5f5f5" }}>
          <a href={HOME_PAGE_ROUTE}>
            <img
              style={{ width: 100, margin: "5px 30px" }}
              src={require("../../assets/logo.png")}
              alt="Logo"
            />
          </a>
        </Box>
        <Box
          sx={{
            maxWidth: "80%",
            margin: "auto",
            minHeight: "82vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: {
                md: "flex",
                xs: "none",
              },
              justifyContent: "center",
            }}
          >
            <img
              src={require("../../assets/login_page.jpg")}
              alt="content"
              style={{
                width: 400,
                height: 300,
              }}
            />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              width: "80%",
              alignItems: "center",
            }}
          >
            <Card sx={{ backgroundColor: "#f1f4fd" }}>
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{
                    margin: "15px auto",
                    textAlign: "center",
                    fontWeight: 600,
                    marginBottom: 6,
                  }}
                >
                  Ready to make your website blazing fast?
                </Typography>
                {isLoading ? (
                  <Typography
                    variant="h5"
                    sx={{
                      margin: "15px auto",
                      textAlign: "center",
                      fontWeight: 600,
                      marginBottom: 6,
                    }}
                  >
                    Loading...
                  </Typography>
                ) : (
                  <div id="firebaseui-auth-container"></div>
                )}
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Login;


// Dashboard => 
  // 1. BMI 





// React Model integrate 