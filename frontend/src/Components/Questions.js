import React, { useState, useEffect } from "react";
import {
    Box,
    Typography,
    Grid,
    Button,
    Divider,
} from "@mui/material";
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { Link, useParams, useNavigate } from "react-router-dom"
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { useDispatch, useSelector } from "react-redux";
import {
    oneInternshipDetails,
} from "../actions/internshipActions";
import { createApplication } from "../actions/applicationActions";
function Question() {

    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [application, setApplication] = useState("");

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    let navigate = useNavigate();
    const { id } = useParams()

    const theInternship = useSelector((state) => state.oneInternshipDetails);
    const { loading, error, internshipDetails } = theInternship;
    const [internship, setInternship] = useState([]);
    const { data } = internshipDetails
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const applicationDetails = useSelector((state) => state.createApplication);
    const { applicationCreateInfo } = applicationDetails;
    // const [input, setInput] = useState({
    //     userId: userInfo.data._id,
    //     internshipId: internship._id,
    //     location: userInfo.data.location,
    //     ans1: "",
    //     ans2: ""
    // });
    useEffect(() => {

        console.log("userInfo : ", userInfo)
        dispatch(oneInternshipDetails(id));
        // console.log("application details: ", applicationDetails)
        // console.log("application Create Info: ", applicationCreateInfo)
        console.log("InternshipDetails :", internshipDetails)
        setInternship(internshipDetails.data)
        console.log("internship: ", internship)
    }, []);

    const [input, setInput] = useState({
        userId: userInfo.data._id,
        internshipId: internship._id || id,
        isComplete: false,
        location: userInfo.data.location,
        education: userInfo.data.education,
        resumeDriveLink: userInfo.data.resume,
        projects: "E-Learning Website",
        skills: "ReactJS, NodeJS, MongoDB",
        ans1: "",
        ans2: "",
        applicationStatus: "applied"
    });
    let name, value;
    const handleChange = (e) => {
        console.log(input);
        name = e.target.name;
        value = e.target.value;
        setInput({ ...input, [name]: value });
    };
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Submit button was rendered");
        dispatch(createApplication(
            input.userId,
            input.internshipId,
            input.isComplete,
            input.location,
            input.education,
            input.resumeDriveLink,
            input.projects,
            input.skills,
            input.ans1,
            input.ans2,
            input.applicationStatus
        )).then((res) => {
            setApplication(applicationCreateInfo)
            console.log("application :", application);
            console.log(res)
            console.log("application submitted")
            setOpen(true);
            console.log("application details: ", applicationDetails)
            console.log("application Create Info: ", applicationCreateInfo)
            setTimeout(() => {
                navigate("/allInternships");
            }, 5000);
            // navigate("/allInternships")
        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <>
            <Stack spacing={2} sx={{ width: '100%' }}>
                {/* <Button variant="outlined" onClick={handleClick}>
                    Open success snackbar
                </Button> */}
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        Your application has been submitted!
                    </Alert>
                </Snackbar>
                {/* <Alert severity="error">This is an error message!</Alert>
                <Alert severity="warning">This is a warning message!</Alert>
                <Alert severity="info">This is an information message!</Alert>
                <Alert severity="success">This is a success message!</Alert> */}
            </Stack>
            <Grid width="100%" display="flex" justifyContent="center" sx={{ display: "flex" }}>
                <Grid width="20% " display="flex" justifyContent="center"></Grid>
                <form noValidate onSubmit={handleSubmit} style={{ width: "100%" }}>
                    <Grid width="60%">

                        <Typography sx={{ fontSize: { lg: "2rem", md: "2rem", sm: "1.4rem", xs: "1rem" } }} textAlign="center" variant="h4" pb={2} mt={3}>
                            {internship.title} internship at <br /> {internship.companyName}
                        </Typography>
                        <Divider />
                        <Grid>
                            <Typography
                                variant="h5"
                                sx={{ fontWeight: "bold", marginTop: "2rem" }}
                            >
                                Cover letter
                            </Typography>
                            <Typography mt={2}>
                                Why should you be hired for this role ?
                            </Typography>
                            {/* <Box display="flex" alignItems="center" mt={2}>
                            <ContentCopyIcon />
                            <Link to="#" sx={{ textDecoration: "none" }}>
                                {" "}
                                Copy from your last application & edit
                            </Link>
                        </Box> */}
                            <TextareaAutosize
                                name="ans1"
                                aria-label="minimum height"
                                minRows={6}
                                placeholder="Enter here"
                                style={{ width: "100%", marginTop: "2rem" }}
                                // value="input"
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid mt={4}>
                            <Typography
                                variant="h5"
                                sx={{ fontWeight: "bold", marginTop: "2rem" }}
                            >
                                Availability
                            </Typography>
                            <Typography mt={2}>
                                Are you available for {internship.duration} months, starting immediately, for a
                                {internship.isPartTime == true ? "part-time" : "full-time"}internship? If not, <br /> what is the
                                time period you are available for and the earliest date you can
                                start this internship on?
                            </Typography>
                            <TextareaAutosize
                                name="ans2"
                                aria-label="minimum height"
                                minRows={6}
                                placeholder="Enter here"
                                style={{ width: "100%", marginTop: "2rem" }}
                                // value="input"
                                onChange={handleChange}
                            />
                        </Grid>
                        {application.message == "Already Applied" ? (
                            <Typography mt={3} textAlign="center">
                                <Button disabled variant="contained">
                                    Already Applied
                                </Button>
                                <br /><br />
                                <Button component={Link} to="/allInternships" variant="contained" color="primary">
                                    View other Internships
                                </Button>
                            </Typography>
                        ) : (
                            <Typography mt={3} textAlign="center">
                                <Button type="submit" variant="contained">
                                    Submit Application
                                </Button>
                            </Typography>
                        )}
                        {/* <Typography mt={3} textAlign="center">
                            <Button type="submit" variant="contained">
                                Submit Application
                            </Button>
                        </Typography> */}
                    </Grid>
                </form>
                <Grid width="20%"></Grid>
            </Grid>
        </>
    );
}

export default Question;