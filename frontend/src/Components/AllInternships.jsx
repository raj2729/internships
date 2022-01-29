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
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"
// import { NavLink } from "react-router-dom";
// import MyApplicationCard from "./MyApplicationCard";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
// import { useDispatch, useSelector } from "react-redux";
import {
  allInternshipsListAction
} from "../actions/internshipActions";
import { isUserEnrolledReset } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";

const AllInternships = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const allInternships = useSelector((state) => state.allInternshipsList);
  const { allInternshipsList } = allInternships;
  const navigate = useNavigate()
  const dispatch = useDispatch();
  // useEffect(() => {
  //   // dispatch(allInternshipsListAction());
  //   // console.log("First");
  // }, []);
  // useEffect(() => {
  //   console.log(internshipArray)
  //   console.log(internships)
  //   console.log("000 :", internships[0].title)
  //   dispatch(allInternshipsListAction());
  //   // console.log("Sencond");
  // }, []);
  const internshipArray = [
    {
      id: 0,
      companyName: "Xciteducation",
      title: "Web Development",
      location: "Mumbai",
      startsAt: "Immediately",
      duration: "3",
      stipend: "Unpaid",
      lastDateToApply: "29/1/2022"
    },
    {
      id: 1,
      companyName: "Ideadunes",
      title: "Web Development",
      location: "Mumbai",
      startsAt: "Immediately",
      duration: "6",
      stipend: "5000",
      lastDateToApply: "29/1/2022"
    },
    {
      id: 2,
      companyName: "Ideadunes",
      title: "Web Development",
      location: "Mumbai",
      startsAt: "Immediately",
      duration: "6",
      stipend: "5000",
      lastDateToApply: "29/1/2022"
    }
  ]
  useEffect(() => {
    // if (userInfo) dispatch(allUserCoursesAction(userInfo.data._id));
    // dispatch(isUserEnrolledReset());
    // if (userInfo) dispatch(allInstructorCoursesAction(userInfo.data._id));
    // dispatch(frontendCourseListAction());
    // dispatch(backendCourseListAction());
    // dispatch(designingCourseListAction());
    // dispatch(databaseCourseListAction());
    // dispatch(fullstackCourseListAction());
    console.log(internships)
    console.log(internshipArray);
    // console.log("000 :", internships[0].title)
    dispatch(allInternshipsListAction());
    // console.log("Sencond");
  }, [dispatch, navigate]);
  let internships = allInternshipsList
  // { title: "Frontend", data: [1, 2, 3] },

  // { title: "Backend Courses", data: backendCourseList },
  // { title: "Designing Courses", data: designingCourseList },
  // { title: "Database Courses", data: databaseCourseList },
  // { title: "Fullstack Courses", data: fullstackCourseList },
  // { title: "Other Courses", data: otherCourseList },

  const internTypes = [
    { label: "Web development" },
    { label: "MERN Stack development" },
  ];

  return (
    <>
      <Box pt={3} textAlign="center">
        <Typography variant="h4">All Internships</Typography>
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
          {/* sssssssssssss */}
          {internships.map((item) => (
            <Card
              key={item._id}
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
                    {item.title}
                    {item.companyLogo !== "" ? (
                      <img alt="" src={item.companyLogo} style={{ borderRadius: "100%", width: "100px", position: "relative", left: "500px", top: "20px", marginTop: "-20px" }} />

                    ) : ""}
                    <Typography variant="subtitle1">
                      {item.companyName}
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
                      {item.location}
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
                        {item.startsAt}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="initial"
                        fontSize="small"
                        sx={{ mx: 4 }}
                      >
                        {item.duration} Months
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="initial"
                        fontSize="small"
                        sx={{ mx: 4 }}
                      >
                        {item.stipend}/month
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="initial"
                        fontSize="small"
                        sx={{ mx: 4 }}
                      >
                        {item.lastDateToApply}
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

          ))}


          {/* INTERNSHIPARRAY */}
          {/* {internshipArray.map((item) => (
            <Card
              key={item.id}
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
                    {item.companyName}
                    <Typography variant="subtitle1">
                      {item.title}
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
                      {item.location}
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
                        {item.startsAt}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="initial"
                        fontSize="small"
                        sx={{ mx: 4 }}
                      >
                        {item.duration} Months
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="initial"
                        fontSize="small"
                        sx={{ mx: 4 }}
                      >
                        {item.stipend}/month
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="initial"
                        fontSize="small"
                        sx={{ mx: 4 }}
                      >
                        {item.lastDateToApply}
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

          ))} */}





          {/* <Recipe 
          key={recipe.recipe.label}
          ingredients={recipe.recipe.ingredients}
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories} 
          image={recipe.recipe.image} /> */}
          {/* <Card
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
          </Card> */}
          {/* <Card
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
          </Card> */}
          {/* <Card
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
          </Card> */}
        </Box>
      </Container>
    </>
  );
};

export default AllInternships;
