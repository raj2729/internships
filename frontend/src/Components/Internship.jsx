import {
  Box,
  Container,
  Typography,
  FormGroup,
  Card,
  CardContent,
  FormControlLabel,
  Checkbox,
  TextField,
  Switch,
  Slider,
  Paper,
  Autocomplete,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom"
// import { NavLink } from "react-router-dom";
// import MyApplicationCard from "./MyApplicationCard";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";

const Internship = () => {
  const internTypes = [
    { label: "Web development" },
    { label: "MERN Stack development" },
  ];
  return (
    <>
      <Box pt={3} textAlign="center">
        <Typography variant="h6">Internship</Typography>
      </Box>
      <Container sx={{ display: "flex", flexDirection: "row" }}>
        <Box
          className="filter"
          component={Paper}
          sx={{
            maxWidth: "20%",
            m: 3,
            height: "110vh",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h6"
            color="initial"
            textAlign="center"
            sx={{ m: 2 }}
          >
            Filter
          </Typography>
          <FormGroup sx={{ mx: 3 }} size="small">
            <FormControlLabel
              control={<Checkbox />}
              label="Show internships as per"
            />
          </FormGroup>
          {/* <NavLink>Perferences</NavLink> */}
          <Typography variant="subtitle2" color="initial" sx={{ mx: 2 }}>
            Categorie
          </Typography>
          <Autocomplete
            disablePortal
            options={internTypes}
            sx={{ width: 198 }}
            renderInput={(params) => (
              <TextField
                {...params}
                size="small"
                sx={{ mx: 2 }}
                label="e.g. Marketing"
              />
            )}
          />
          {/* <TextField
            id="outlined-basic"
            label="e.g. Marketing"
            variant="outlined"
            size="small"
            sx={{ mx: 2 }}
          /> */}
          <Typography variant="subtitle2" color="initial" sx={{ mx: 2 }}>
            Location
          </Typography>
          <TextField
            id="outlined-basic"
            label="Location"
            variant="outlined"
            size="small"
            sx={{ mx: 2 }}
          />
          <FormControlLabel
            sx={{ mx: 2 }}
            control={<Switch color="primary" size="small" />}
            label="Include work from home also"
            labelPlacement="start"
          />
          <FormControlLabel
            sx={{ mx: 2, fontsize: "25px" }}
            control={<Switch color="primary" size="small" />}
            label="Part-time"
            labelPlacement="start"
          />
          <Typography variant="subtitle2" color="initial" sx={{ mx: 2 }}>
            Desired minimum monthly stipend (₹)
          </Typography>
          <Slider
            defaultValue={10}
            aria-label="Default"
            valueLabelDisplay="auto"
            sx={{ mx: 2 }}
          />
          <Typography variant="subtitle2" color="initial" sx={{ mx: 2 }}>
            Start from (or after)
          </Typography>
          <TextField
            sx={{ mx: 2 }}
            id="outlined-basic"
            label="e.g. Marketing"
            variant="outlined"
            size="small"
          />
          <Typography variant="subtitle2" color="initial" sx={{ mx: 2 }}>
            Max. duration (months)
          </Typography>
          <TextField
            sx={{ mx: 2 }}
            id="outlined-basic"
            label=""
            variant="outlined"
            size="small"
          />
          <FormControlLabel
            sx={{ m: 2 }}
            control={<Switch color="primary" size="small" />}
            label="Internships for women"
            labelPlacement="start"
          />
          <FormControlLabel
            sx={{ fontsize: "25px", mx: 2, mb: 2 }}
            control={<Switch color="primary" size="small" />}
            label="Internships with job offer"
            labelPlacement="start"
          />
        </Box>
        <Box className="Main" sx={{ flexGrow: 1, flexDirection: "column" }}>
          <Card
            variant="outlined"
            component={Paper}
            sx={{ display: "flex", flexGrow: 1, m: 4 }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography
                  component="div"
                  variant="h6"
                  sx={{ fontWeight: "Bold" }}
                >
                  Ideadunes
                  <Typography variant="subtitle1">
                    Web Development Internship
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    sx={{ my: 2 }}
                  >
                    <LocationOnIcon
                      fontSize="small"
                      sx={{ mt: "3px", mr: 1 }}
                    />
                    Mumbai,Thane
                  </Typography>
                  <Box sx={{ display: "flex" }}>
                    <Typography
                      sx={{ display: "flex" }}
                      variant="subtitle1"
                      color="text.secondary"
                      fontSize="small"
                    >
                      <PlayCircleFilledWhiteOutlinedIcon
                        sx={{ mt: "3px", mr: 1 }}
                        fontSize="small"
                      />
                      START DATE
                      <Typography
                        sx={{ display: "flex", mx: 4 }}
                        variant="subtitle1"
                        color="text.secondary"
                        fontSize="small"
                      >
                        <CalendarTodayIcon
                          fontSize="small"
                          sx={{ mt: "3px", mr: 1 }}
                        />
                        DURATION
                      </Typography>
                      <Typography
                        sx={{ display: "flex", mx: 4 }}
                        variant="subtitle1"
                        color="text.secondary"
                        fontSize="small"
                      >
                        <LocalAtmOutlinedIcon
                          fontSize="small"
                          sx={{ mt: "3px", mr: 1 }}
                        />
                        STIPEND
                      </Typography>
                      <Typography
                        sx={{ display: "flex" }}
                        variant="subtitle1"
                        color="text.secondary"
                        fontSize="small"
                      >
                        <HourglassTopIcon
                          fontSize="small"
                          sx={{ mt: "3px", mr: 1 }}
                        />
                        APPLY BY
                      </Typography>
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", flexGrow: 1, my: 2 }}>
                    <Typography
                      variant="subtitle1"
                      color="initial"
                      fontSize="small"
                      sx={{ mx: 4 }}
                    >
                      Immediately
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="initial"
                      fontSize="small"
                      sx={{ mx: 4 }}
                    >
                      6 Months
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="initial"
                      fontSize="small"
                      sx={{ mx: 4 }}
                    >
                      3000-4000/month
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="initial"
                      fontSize="small"
                      sx={{ mx: 4 }}
                    >
                      29 JAN'22
                    </Typography>
                  </Box>
                </Typography>
                <Box sx={{ display: "flex", mt: 4 }}>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                    sx={{ flexGrow: 1 }}
                  >
                    Internship
                  </Typography>
                  <Link to="/particularInternship"><Typography
                    variant="subtitle1"
                    color="Primary"
                  // component={Link}
                  // to="/particularInternship"
                  >
                    View Offer
                  </Typography></Link>
                </Box>
              </CardContent>
            </Box>
          </Card>
          <Card
            variant="outlined"
            component={Paper}
            sx={{ display: "flex", flexGrow: 1, m: 4 }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography
                  component="div"
                  variant="h6"
                  sx={{ fontWeight: "Bold" }}
                >
                  Ideadunes
                  <Typography variant="subtitle1">
                    Web Development Internship
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    sx={{ my: 2 }}
                  >
                    <LocationOnIcon
                      fontSize="small"
                      sx={{ mt: "3px", mr: 1 }}
                    />
                    Mumbai,Thane
                  </Typography>
                  <Box sx={{ display: "flex" }}>
                    <Typography
                      sx={{ display: "flex" }}
                      variant="subtitle1"
                      color="text.secondary"
                      fontSize="small"
                    >
                      <PlayCircleFilledWhiteOutlinedIcon
                        sx={{ mt: "3px", mr: 1 }}
                        fontSize="small"
                      />
                      START DATE
                      <Typography
                        sx={{ display: "flex", mx: 4 }}
                        variant="subtitle1"
                        color="text.secondary"
                        fontSize="small"
                      >
                        <CalendarTodayIcon
                          fontSize="small"
                          sx={{ mt: "3px", mr: 1 }}
                        />
                        DURATION
                      </Typography>
                      <Typography
                        sx={{ display: "flex", mx: 4 }}
                        variant="subtitle1"
                        color="text.secondary"
                        fontSize="small"
                      >
                        <LocalAtmOutlinedIcon
                          fontSize="small"
                          sx={{ mt: "3px", mr: 1 }}
                        />
                        STIPEND
                      </Typography>
                      <Typography
                        sx={{ display: "flex" }}
                        variant="subtitle1"
                        color="text.secondary"
                        fontSize="small"
                      >
                        <HourglassTopIcon
                          fontSize="small"
                          sx={{ mt: "3px", mr: 1 }}
                        />
                        APPLY BY
                      </Typography>
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", flexGrow: 1, my: 2 }}>
                    <Typography
                      variant="subtitle1"
                      color="initial"
                      fontSize="small"
                      sx={{ mx: 4 }}
                    >
                      Immediately
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="initial"
                      fontSize="small"
                      sx={{ mx: 4 }}
                    >
                      6 Months
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="initial"
                      fontSize="small"
                      sx={{ mx: 4 }}
                    >
                      3000-4000/month
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="initial"
                      fontSize="small"
                      sx={{ mx: 4 }}
                    >
                      29 JAN'22
                    </Typography>
                  </Box>
                </Typography>
                <Box sx={{ display: "flex", mt: 4 }}>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                    sx={{ flexGrow: 1 }}
                  >
                    Internship
                  </Typography>
                  <Link to="/particularInternship"><Typography
                    variant="subtitle1"
                    color="Primary"
                  // component={Link}
                  // to="/particularInternship"
                  >
                    View Offer
                  </Typography></Link>
                </Box>
              </CardContent>
            </Box>
          </Card>
          <Card
            variant="outlined"
            component={Paper}
            sx={{ display: "flex", flexGrow: 1, m: 4 }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography
                  component="div"
                  variant="h6"
                  sx={{ fontWeight: "Bold" }}
                >
                  Ideadunes
                  <Typography variant="subtitle1">
                    Web Development Internship
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    sx={{ my: 2 }}
                  >
                    <LocationOnIcon
                      fontSize="small"
                      sx={{ mt: "3px", mr: 1 }}
                    />
                    Mumbai,Thane
                  </Typography>
                  <Box sx={{ display: "flex" }}>
                    <Typography
                      sx={{ display: "flex" }}
                      variant="subtitle1"
                      color="text.secondary"
                      fontSize="small"
                    >
                      <PlayCircleFilledWhiteOutlinedIcon
                        sx={{ mt: "3px", mr: 1 }}
                        fontSize="small"
                      />
                      START DATE
                      <Typography
                        sx={{ display: "flex", mx: 4 }}
                        variant="subtitle1"
                        color="text.secondary"
                        fontSize="small"
                      >
                        <CalendarTodayIcon
                          fontSize="small"
                          sx={{ mt: "3px", mr: 1 }}
                        />
                        DURATION
                      </Typography>
                      <Typography
                        sx={{ display: "flex", mx: 4 }}
                        variant="subtitle1"
                        color="text.secondary"
                        fontSize="small"
                      >
                        <LocalAtmOutlinedIcon
                          fontSize="small"
                          sx={{ mt: "3px", mr: 1 }}
                        />
                        STIPEND
                      </Typography>
                      <Typography
                        sx={{ display: "flex" }}
                        variant="subtitle1"
                        color="text.secondary"
                        fontSize="small"
                      >
                        <HourglassTopIcon
                          fontSize="small"
                          sx={{ mt: "3px", mr: 1 }}
                        />
                        APPLY BY
                      </Typography>
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", flexGrow: 1, my: 2 }}>
                    <Typography
                      variant="subtitle1"
                      color="initial"
                      fontSize="small"
                      sx={{ mx: 4 }}
                    >
                      Immediately
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="initial"
                      fontSize="small"
                      sx={{ mx: 4 }}
                    >
                      6 Months
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="initial"
                      fontSize="small"
                      sx={{ mx: 4 }}
                    >
                      3000-4000/month
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="initial"
                      fontSize="small"
                      sx={{ mx: 4 }}
                    >
                      29 JAN'22
                    </Typography>
                  </Box>
                </Typography>
                <Box sx={{ display: "flex", mt: 4 }}>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                    sx={{ flexGrow: 1 }}
                  >
                    Internship
                  </Typography>
                  <Link to="/particularInternship"><Typography
                    variant="subtitle1"
                    color="Primary"
                  // component={Link}
                  // to="/particularInternship"
                  >
                    View Offer
                  </Typography></Link>
                </Box>
              </CardContent>
            </Box>
          </Card>
        </Box>
      </Container>
    </>
  );
};

export default Internship;
