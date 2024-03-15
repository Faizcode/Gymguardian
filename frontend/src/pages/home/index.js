import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import {
  Box,
  Button,
  Divider,
  Grid,
  Icon,
  Paper,
  Typography,
} from "@mui/material";
import { THEME_CONTRAST_TEXT_COLOR, THEME_MAIN_COLOR } from "../../styles";
// Import icons
import TourIcon from "@mui/icons-material/Tour";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import ScreenRotationIcon from "@mui/icons-material/ScreenRotation";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SettingsAccessibilityIcon from "@mui/icons-material/SettingsAccessibility";
import KeyIcon from "@mui/icons-material/Key";
import LocalHotelIcon from "@mui/icons-material/LocalHotel";
import LoopIcon from "@mui/icons-material/Loop";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import HttpsIcon from "@mui/icons-material/Https";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import Footer from "../../components/footer";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import styled from "@emotion/styled";
import Header from "../../components/header";

const Home = () => {
  const [expanded, setExpanded] = React.useState(false);
  const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: "#1A2027",
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Box>
      <Header />
      {/* Section 1 */}
      <Box
        sx={{
          position: "relative",
          width: "98.7vw",
          height: "100vh",
        }}
      >
        {/* Background Image */}
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%), url(${require("../../assets/home_section.jpeg")})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.7,
            position: "absolute",
          }}
        />

        {/* Centered Text */}
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            color: "#FFF",
          }}
        >
          <Typography
            variant="body2"
            color={"#FFF"}
            sx={{ textTransform: "uppercase", marginBottom: "10px" }}
          >
            WE GUIDE, YOU GRIND.
          </Typography>
          <Typography
            variant="h1"
            color={"#FFF"}
            sx={{ textTransform: "uppercase", marginBottom: "20px" }}
          >
            Unleashing the power of AI with fitness.
          </Typography>
          <Typography variant="caption" sx={{ textAlign: "center" }}>
            At GymGuardian, we are dedicated to revolutionizing your fitness
            experience. <br />
            Our cutting-edge platform is designed to provide you with a seamless
            and secure fitness journey, ensuring that you reach your goals with
            confidence. <br />
          </Typography>
        </Box>
      </Box>
      {/* Section 2 */}
      <Box
        sx={{
          width: "98.7vw",
          height: "100%",
          textAlign: "center",
          padding: "50px",
        }}
      >
        <Box sx={{ margin: "20px" }}>
          <Button
            sx={{
              textTransform: "capitalize",
              color: "#fff",
              backgroundColor: THEME_MAIN_COLOR,
              borderRadius: "16px",
              padding: "0px 20px",
              "&&:hover": {
                backgroundColor: THEME_MAIN_COLOR,
              },
            }}
          >
            How we stay fit
          </Button>
        </Box>
        <Box>
          <Typography variant="h1" sx={{ color: "#fff" }}>
            A Peek Into Our Process
          </Typography>
        </Box>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent
              align="right"
              variant="body2"
              color="text.secondary"
            >
              <Box
                sx={{
                  height: "80px",
                  width: "80px",
                  marginLeft: "auto",
                  marginRight: "50px",
                  border: "2px solid",
                  borderColor: THEME_MAIN_COLOR,
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ScreenRotationIcon
                  sx={{
                    color: THEME_MAIN_COLOR,
                  }}
                />
              </Box>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: THEME_MAIN_COLOR }}>
                <CameraAltIcon
                  sx={{
                    width: "50px",
                    height: "50px",
                    color: "#fff",
                  }}
                />
              </TimelineDot>
              <TimelineConnector sx={{ height: "150px" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Camera
              </Typography>
              <Typography sx={{ color: THEME_CONTRAST_TEXT_COLOR }}>
                Keep your Device's Camera in landscape mode or Portrait mode
                according to your workout to begin. Make sure you are teh only
                one in the camera frame.
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent
              align="right"
              variant="body2"
              color="text.secondary"
            >
              <Box
                sx={{
                  height: "80px",
                  width: "80px",
                  marginLeft: "50px",
                  marginRight: "auto",
                  border: "2px solid",
                  borderColor: THEME_MAIN_COLOR,
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TourIcon
                  sx={{
                    color: THEME_MAIN_COLOR,
                  }}
                />
              </Box>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: THEME_MAIN_COLOR }}>
                <EmojiPeopleIcon
                  sx={{
                    width: "50px",
                    height: "50px",
                    color: "#fff",
                  }}
                />
              </TimelineDot>
              <TimelineConnector sx={{ height: "150px" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Alignmemt & Signal
              </Typography>
              <Typography sx={{ color: THEME_CONTRAST_TEXT_COLOR }}>
                Ensure your full body is within the frame. And then signal the
                camera by keeping either of your hand's elbow and wrist above
                your ear level.
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent
              align="right"
              variant="body2"
              color="text.secondary"
            >
              <Box
                sx={{
                  height: "80px",
                  width: "80px",
                  marginLeft: "auto",
                  marginRight: "50px",
                  border: "2px solid",
                  borderColor: THEME_MAIN_COLOR,
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FitnessCenterIcon
                  sx={{
                    color: THEME_MAIN_COLOR,
                  }}
                />
              </Box>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: THEME_MAIN_COLOR }}>
                <SettingsAccessibilityIcon
                  sx={{
                    width: "50px",
                    height: "50px",
                    color: "#fff",
                  }}
                />
              </TimelineDot>
              <TimelineConnector sx={{ height: "150px" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Ready, Set, Workout.
              </Typography>
              <Typography sx={{ color: THEME_CONTRAST_TEXT_COLOR }}>
                After the countdown, start doing the workouts ensuring that you
                are within the camera frame.
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent
              align="right"
              variant="body2"
              color="text.secondary"
            >
              <Box
                sx={{
                  height: "80px",
                  width: "80px",
                  marginLeft: "50px",
                  marginRight: "auto",
                  border: "2px solid",
                  borderColor: THEME_MAIN_COLOR,
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <HttpsIcon
                  sx={{
                    color: THEME_MAIN_COLOR,
                  }}
                />
              </Box>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: THEME_MAIN_COLOR }}>
                <KeyIcon
                  sx={{
                    width: "50px",
                    height: "50px",
                    color: "#fff",
                  }}
                />
              </TimelineDot>
              <TimelineConnector sx={{ height: "150px" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Unleash the hidden features!
              </Typography>
              <Typography sx={{ color: THEME_CONTRAST_TEXT_COLOR }}>
                The more the consistency, the more access to the hidden stores
                of{" "}
                <b>
                  <Typography
                    variant="h6"
                    component="span"
                    sx={{ color: THEME_MAIN_COLOR }}
                  >
                    {" "}
                    GymGuardian
                  </Typography>
                </b>
                .
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent
              align="right"
              variant="body2"
              color="text.secondary"
            >
              <Box
                sx={{
                  height: "80px",
                  width: "80px",
                  marginLeft: "auto",
                  marginRight: "50px",
                  border: "2px solid",
                  borderColor: THEME_MAIN_COLOR,
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <SelfImprovementIcon
                  sx={{
                    color: THEME_MAIN_COLOR,
                  }}
                />
              </Box>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: THEME_MAIN_COLOR }}>
                <LocalHotelIcon
                  sx={{
                    width: "50px",
                    height: "50px",
                    color: "#fff",
                  }}
                />
              </TimelineDot>
              <TimelineConnector sx={{ height: "150px" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Rest and Repair muscles.
              </Typography>
              <Typography sx={{ color: THEME_CONTRAST_TEXT_COLOR }}>
                Rest and give time to your muscles to get familiar with your
                muscle tears to utilize the best of daily workouts.
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent
              align="right"
              variant="body2"
              color="text.secondary"
            >
              <Box
                sx={{
                  height: "80px",
                  width: "80px",
                  marginLeft: "50px",
                  marginRight: "auto",
                  border: "2px solid",
                  borderColor: THEME_MAIN_COLOR,
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <HourglassBottomIcon
                  sx={{
                    color: THEME_MAIN_COLOR,
                  }}
                />
              </Box>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: THEME_MAIN_COLOR }}>
                <LoopIcon
                  sx={{
                    width: "50px",
                    height: "50px",
                    color: "#fff",
                  }}
                />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Repeat.
              </Typography>
              <Typography sx={{ color: THEME_CONTRAST_TEXT_COLOR }}>
                Repeat your daily workouts with
                <b>
                  <Typography
                    variant="h6"
                    component="span"
                    sx={{ color: THEME_MAIN_COLOR }}
                  >
                    {" "}
                    GymGuardian
                  </Typography>
                </b>
                . Take part actively in workouts anytime, anywhere.
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>
      {/* Section 3 */}
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100%",
          padding: "50px 100px",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "50%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "70%",
              borderRadius: "10px",
            }}
            src={require("../../assets/workout_home.avif")}
            alt="Logo"
          />
        </Box>
        <Box sx={{ marginLeft: "150px" }}>
          <Box>
            <Button
              sx={{
                textTransform: "capitalize",
                color: "#fff",
                backgroundColor: THEME_MAIN_COLOR,
                borderRadius: "16px",
                padding: "0px 20px",
                "&&:hover": {
                  backgroundColor: THEME_MAIN_COLOR,
                },
              }}
            >
              CREATIVE APPROACH
            </Button>
          </Box>
          <Box>
            <Typography
              sx={{
                color: "#fff",
                fontWeight: 400,
                fontSize: 32,
              }}
            >
              Stay fit & healthy in the comfort of your home.
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                color: "#60F2E4",
                fontWeight: 400,
                fontSize: 12,
                marginTop: "10px",
                textTransform: "uppercase",
              }}
            >
              "Revolutionizing Fitness with Cutting-Edge Technology:
              <br />
              Harness the Power of Computer Vision AI for an Unparalleled
              Exercise Experience!"
            </Typography>
          </Box>
          <Divider
            sx={{ backgroundColor: "#fff", width: "270px", margin: "20px 0px" }}
          />
          <Box>
            <Typography
              sx={{
                color: "#fff",
                fontWeight: 400,
                fontSize: 12,
                marginTop: "10px",
              }}
            >
              Transform your fitness journey with cutting-edge AI technology.
              <br />
              Elevate your fitness routine and achieve your goals with
              intelligence-driven training like never before.
            </Typography>
          </Box>
          <Box>
            <Box sx={{ margin: "30px 0", display: "flex", width: "100%" }}>
              <Box sx={{ display: "flex", width: "40%" }}>
                <Box sx={{ width: "20%" }}>
                  <Icon>
                    <FitnessCenterIcon sx={{ color: "#60F2E4" }} />
                  </Icon>
                </Box>
                <Box>Convenient</Box>
              </Box>
              <Box sx={{ display: "flex", width: "40%" }}>
                <Box sx={{ width: "20%" }}>
                  <Icon>
                    <FitnessCenterIcon sx={{ color: "#60F2E4" }} />
                  </Icon>
                </Box>
                <Box>Effective</Box>
              </Box>
            </Box>
            <Box sx={{ display: "flex", width: "100%" }}>
              <Box sx={{ display: "flex", width: "40%" }}>
                <Box sx={{ width: "20%" }}>
                  <Icon>
                    <FitnessCenterIcon sx={{ color: "#60F2E4" }} />
                  </Icon>
                </Box>
                <Box>Flexible</Box>
              </Box>
              <Box sx={{ display: "flex", width: "40%" }}>
                <Box sx={{ width: "20%" }}>
                  <Icon>
                    <FitnessCenterIcon sx={{ color: "#60F2E4" }} />
                  </Icon>
                </Box>
                <Box>Motivating</Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: "30px",
            }}
          >
            <Button variant="outlined" sx={{ textTransform: "capitalize" }}>
              Know More
            </Button>
          </Box>
        </Box>
      </Box>
      {/* New Section */}
      <Box
        sx={{
          width: "98.7vw",
          height: "100%",
          textAlign: "center",
          padding: "50px 100px",
        }}
      >
        <Box sx={{ margin: "20px" }}>
          <Button
            sx={{
              textTransform: "capitalize",
              color: "#fff",
              backgroundColor: THEME_MAIN_COLOR,
              borderRadius: "16px",
              padding: "0px 20px",
              marginBottom: "20px",
              "&&:hover": {
                backgroundColor: THEME_MAIN_COLOR,
              },
            }}
          >
            Hidden Features
          </Button>
        </Box>
        <Box sx={{ display: "flex", width: "100%" }}>
          <Box sx={{ width: "50%", margin: "auto", textAlign: "left" }}>
            <Typography
              sx={{
                color: "#fff",
                fontWeight: 500,
                fontSize: 38,
              }}
            >
              Unlock Premium Fitness Features <br />
              for Consistent Achievements.
            </Typography>
          </Box>
          <Box sx={{ width: "50%", textAlign: "left" }}>
            <Typography
              variant="body1"
              sx={{ color: THEME_CONTRAST_TEXT_COLOR }}
            >
              Embark on a journey of transformation and unlock exclusive fitness
              benefits. Achieve your goals with personalized calorie tracking,
              custom fitness plans, diet insights, and more. Your consistency
              paves the way to a healthier, fitter you.
            </Typography>
          </Box>
        </Box>
        <Box sx={{ flexGrow: 1, marginTop: "50px" }}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Item>
                <Box color={THEME_CONTRAST_TEXT_COLOR}>
                  <img
                    style={{
                      width: "40%",
                      height: "70%",
                      borderRadius: "10px",
                    }}
                    src={require("../../assets/ai_icon.png")}
                    alt="AI"
                  />
                  <Typography
                    variant="h6"
                    color={THEME_MAIN_COLOR}
                    sx={{ margin: "20px 0px" }}
                  >
                    AI Development
                  </Typography>
                  <Typography color={THEME_CONTRAST_TEXT_COLOR}>
                    We use AI, Computer Vision to track the fitness workouts
                    credibility.
                  </Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <Box color={THEME_CONTRAST_TEXT_COLOR}>
                  <img
                    style={{
                      width: "40%",
                      height: "70%",
                      borderRadius: "10px",
                    }}
                    src={require("../../assets/calories.png")}
                    alt="AI"
                  />
                  <Typography
                    variant="h6"
                    color={THEME_MAIN_COLOR}
                    sx={{ margin: "20px 0px" }}
                  >
                    Calorimetry
                  </Typography>
                  <Typography color={THEME_CONTRAST_TEXT_COLOR}>
                    Based on workouts performed we calculate the calories
                    burned.
                  </Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <Box color={THEME_CONTRAST_TEXT_COLOR}>
                  <img
                    style={{
                      width: "40%",
                      height: "70%",
                      borderRadius: "10px",
                    }}
                    src={require("../../assets/diet.png")}
                    alt="AI"
                  />
                  <Typography
                    variant="h6"
                    color={THEME_MAIN_COLOR}
                    sx={{ margin: "20px 0px" }}
                  >
                    Custom Diets
                  </Typography>
                  <Typography color={THEME_CONTRAST_TEXT_COLOR}>
                    Get access to your body specific bulk or cut diets. All from
                    GymGuardian Professionals.
                  </Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <Box color={THEME_CONTRAST_TEXT_COLOR}>
                  <img
                    style={{
                      width: "40%",
                      height: "70%",
                      borderRadius: "10px",
                    }}
                    src={require("../../assets/dumbell.png")}
                    alt="AI"
                  />
                  <Typography
                    variant="h6"
                    color={THEME_MAIN_COLOR}
                    sx={{ margin: "20px 0px" }}
                  >
                    Workout variations
                  </Typography>
                  <Typography color={THEME_CONTRAST_TEXT_COLOR}>
                    Workout from home totally weightless and free exercise
                    guidance.We guide and you grind.
                  </Typography>
                </Box>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* Section 6 */}
      <Box>
        <Box sx={{ textAlign: "center" }}>
          <Box sx={{ margin: "20px" }}>
            <Button
              sx={{
                textTransform: "capitalize",
                color: "#fff",
                backgroundColor: THEME_MAIN_COLOR,
                borderRadius: "16px",
                padding: "0px 20px",
                "&&:hover": {
                  backgroundColor: THEME_MAIN_COLOR,
                },
              }}
            >
              Ask Us
            </Button>
          </Box>
          <Box>
            <Typography variant="h1" sx={{ color: "#fff" }}>
              Frequently Asked Questions
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "98.7vw",
            height: "100%",
            padding: "50px 100px",
          }}
        >
          <Box sx={{ width: "50%", margin: "auto" }}>
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
              sx={{ width: "100%", marginBottom: "10px", borderRadius: "10px" }}
            >
              <AccordionSummary
                expandIcon={<SouthEastIcon sx={{ color: THEME_MAIN_COLOR }} />}
              >
                <Typography
                  sx={{ width: "80%", flexShrink: 0, color: THEME_MAIN_COLOR }}
                >
                  How can I sign up for GymGuardian Pro?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: THEME_CONTRAST_TEXT_COLOR }}>
                  Signing up for GymGuardian Pro is easy! Visit our website,
                  click on the "Sign Up" button, and follow the simple
                  registration process. Provide the required information, create
                  your account, and you'll be all set to explore the features of
                  GymGuardian Pro.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
              sx={{ width: "100%", marginBottom: "10px", borderRadius: "10px" }}
            >
              <AccordionSummary
                expandIcon={<SouthEastIcon sx={{ color: THEME_MAIN_COLOR }} />}
              >
                <Typography
                  sx={{ width: "80%", flexShrink: 0, color: THEME_MAIN_COLOR }}
                >
                  What features does GymGuardian Pro offer for workout tracking?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: THEME_CONTRAST_TEXT_COLOR }}>
                  GymGuardian Pro provides a comprehensive workout tracking
                  experience. You can log your exercises, set goals, track
                  progress, and receive personalized workout recommendations.
                  The platform also offers detailed analytics, making it easy
                  for you to monitor your fitness journey and stay motivated.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
              sx={{ width: "100%", marginBottom: "10px", borderRadius: "10px" }}
            >
              <AccordionSummary
                expandIcon={<SouthEastIcon sx={{ color: THEME_MAIN_COLOR }} />}
              >
                <Typography
                  sx={{ width: "80%", flexShrink: 0, color: THEME_MAIN_COLOR }}
                >
                  Is my personal information secure on GymGuardian Pro?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: THEME_CONTRAST_TEXT_COLOR }}>
                  Yes, your privacy and security are our top priorities.
                  GymGuardian Pro employs robust encryption protocols to
                  safeguard your personal information. We adhere to strict data
                  protection standards, ensuring that your data is stored
                  securely and used only for the intended purpose outlined in
                  our privacy policy.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
              sx={{ width: "100%", marginBottom: "10px", borderRadius: "10px" }}
            >
              <AccordionSummary
                expandIcon={<SouthEastIcon sx={{ color: THEME_MAIN_COLOR }} />}
              >
                <Typography
                  sx={{ width: "80%", flexShrink: 0, color: THEME_MAIN_COLOR }}
                >
                  Can I customize workout plans based on my fitness goals?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: THEME_CONTRAST_TEXT_COLOR }}>
                  Absolutely! GymGuardian Pro allows you to customize workout
                  plans tailored to your specific fitness goals. Whether you're
                  aiming to lose weight, build muscle, or improve endurance, you
                  can select exercises, set durations, and create a plan that
                  aligns with your objectives. Our platform is designed to adapt
                  to your unique fitness journey.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{ width: "100%", marginBottom: "10px", borderRadius: "10px" }}
            >
              <AccordionSummary
                expandIcon={
                  <Button
                    sx={{
                      textTransform: "capitalize",
                      color: "#fff",
                      backgroundColor: THEME_MAIN_COLOR,
                      borderRadius: "8px",
                      padding: "5px 20px",
                      "&&:hover": {
                        backgroundColor: THEME_MAIN_COLOR,
                      },
                    }}
                  >
                    Get In Touch
                  </Button>
                }
              >
                <Typography
                  sx={{ width: "80%", flexShrink: 0, color: THEME_MAIN_COLOR }}
                >
                  Still Have Questions?
                </Typography>
              </AccordionSummary>
            </Accordion>
          </Box>
          <Box
            sx={{
              position: "relative",
              width: "50%",
              height: "100%",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "right",
              }}
            >
              <img
                style={{
                  width: "70%",
                  height: "70%",
                  borderRadius: "10px",
                }}
                src={require("../../assets/faq.jpg")}
                alt="Logo"
              />
            </Box>
          </Box>
        </Box>
      </Box>
      {/* Footer */}
      <Box>
        <Footer />
      </Box>
    </Box>
  );
};
export default Home;


/* 

  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const setupCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;

        const net = await posenet.load({ architecture: 'MobileNetV1',
        outputStride: 16,
        inputResolution: { width: 640, height: 480 },
        multiplier: 0.75});

        // Track bicep curls
        let counter = 0;
        let stage = null;

        // Execute PoseNet on each video frame
        async function detectPose() {
          const pose = await net.estimateSinglePose(videoRef.current, {
            flipHorizontal: false,
          });

          // Visualize keypoints on the canvas
          drawKeypoints(pose.keypoints);

          // Extract landmarks
          const shoulder = pose.keypoints.find(point => point.part === 'leftShoulder').position;
          const elbow = pose.keypoints.find(point => point.part === 'leftElbow').position;
          const wrist = pose.keypoints.find(point => point.part === 'leftWrist').position;

          // Calculate angle
          const angle = calculateAngle(shoulder, elbow, wrist);

          // Visualize angle
          console.log('Angle:', angle);

          // Curl counter logic
          if (angle > 160) {
            stage = 'down';
          }

          if (angle < 30 && stage === 'down') {
            stage = 'up';
            counter += 1;
            console.log('Bicep Curls Count:', counter);
          }

          requestAnimationFrame(detectPose);
        }

        detectPose();
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    // Function to draw keypoints on the canvas
    const drawKeypoints = keypoints => {
      const ctx = canvasRef.current.getContext('2d');
      ctx.clearRect(0, 0, videoRef.current.width, videoRef.current.height);

      keypoints.forEach(({ position }) => {
        ctx.beginPath();
        ctx.arc(position.x, position.y, 5, 0, 2 * Math.PI);
        ctx.fillStyle = 'red';
        ctx.fill();
      });
    };

    setupCamera();

    return () => {
      // Cleanup code if needed
    };
  }, []);

  // Function to calculate angle
  const calculateAngle = (a, b, c) => {
    const radians = Math.atan2(c.y - b.y, c.x - b.x) - Math.atan2(a.y - b.y, a.x - b.x);
    let angle = Math.abs((radians * 180.0) / Math.PI);

    if (angle > 180.0) {
      angle = 360 - angle;
    }

    return angle;
  };

  return (
    <div>
      <video ref={videoRef} width="640" height="480" autoPlay />
      <canvas ref={canvasRef} width="640" height="480" style={{ position: 'absolute', top: 0, left: 0 }} />
    </div>
  );
};

 */