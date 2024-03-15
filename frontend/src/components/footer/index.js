import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import { THEME_CONTRAST_TEXT_COLOR, THEME_MAIN_COLOR } from "../../styles";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box component="footer" sx={{ textAlign: "center", margin: "30px 0" }}>
      <img
        src={require("../../assets/logo.png")}
        alt=""
        style={{ height: "100px" }}
      />
      <Box sx={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
        <Typography variant="body2">
          <Link
            href="#"
            variant="body2"
            style={{
              color: "#61dafb",
              marginRight: "20px",
              textDecoration: "none",
            }}
          >
            About Us
          </Link>
        </Typography>
        <Typography variant="body2">
          <Link
            href="#"
            variant="body2"
            style={{
              color: "#61dafb",
              marginRight: "20px",
              textDecoration: "none",
            }}
          >
            Contact Us
          </Link>
        </Typography>
        <Typography variant="body2">
          <Link
            href="#"
            variant="body2"
            style={{
              color: "#61dafb",
              marginRight: "20px",
              textDecoration: "none",
            }}
          >
            Privacy Policy
          </Link>
        </Typography>
        <Typography variant="body2">
          <Link
            href="#"
            variant="body2"
            style={{
              color: "#61dafb",
              marginRight: "20px",
              textDecoration: "none",
            }}
          >
            Terms of Use
          </Link>
        </Typography>
      </Box>

      <Box>
        <Typography
          sx={{ marginBottom: "10px", color: THEME_CONTRAST_TEXT_COLOR }}
        >
          {" "}
          Stay In Touch
        </Typography>
      </Box>

      <Box>
        <Typography>
          <Link>
            <FacebookIcon
              sx={{
                color: THEME_MAIN_COLOR,
                marginRight: "20px",
                textDecoration: "none",
              }}
            />
          </Link>
          <Link>
            <TwitterIcon
              sx={{
                color: THEME_MAIN_COLOR,
                marginRight: "20px",
                textDecoration: "none",
              }}
            />
          </Link>
          <Link>
            <PinterestIcon
              sx={{
                color: THEME_MAIN_COLOR,
                marginRight: "20px",
                textDecoration: "none",
              }}
            />
          </Link>
          <Link>
            <InstagramIcon
              sx={{
                color: THEME_MAIN_COLOR,
                marginRight: "20px",
                textDecoration: "none",
              }}
            />
          </Link>
        </Typography>
      </Box>
      <Typography variant="body2" sx={{ margin: "20px 200px" }}>
        GymGuardian Pro &#169; {currentYear}. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
