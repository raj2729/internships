import React from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  Link,
  Paper,
  Button,
  Divider,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";

function PostIntern() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Grid width="100%" spacing={4}>
        <Box mt={2}>
          <Typography textAlign="center">
            Need assistance? please visit{" "}
            <Link href="#" sx={{ textDecoration: "none" }}>
              Help Center
            </Link>
          </Typography>
          <Typography mt={3} variant="h4" textAlign="center">
            Post Internship{" "}
            <Link href="#" sx={{ textDecoration: "none" }}>
              (Important guidlines)
            </Link>
          </Typography>
        </Box>
        <Grid ml={10} mr={10}>
          <Paper elevation={3}>
            <Grid m={4} p={4}>
              <Typography variant="h4" textAlign="center">
                About the internship
              </Typography>
              <Typography mt={2} sx={{ fontWeight: "bold" }}>
                Select primary profiles *
              </Typography>
              <Grid sx={{ display: { lg: "flex" } }}>
                <Box>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Buisness Development(sales)"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Graphic Design"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Web Designer"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Digital Marketing"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Other"
                    />
                  </FormGroup>
                </Box>
                <Box>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Web Development"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Content Writing"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Mobile App Development"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Campus Ambassador"
                    />
                  </FormGroup>
                </Box>
              </Grid>
              <Grid mt={2}>
                <Typography mb={1}>select type of internship *</Typography>
                <FormControl sx={{ m: 1, minWidth: 80 }}>
                  <InputLabel sx={{}} id="demo-simple-select-autowidth-label">
                    select
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={age}
                    onChange={handleChange}
                    autoWidth
                    label="Age"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Regular(in-office/on-field)</MenuItem>
                    <MenuItem value={21}>Work from home</MenuItem>
                  </Select>
                </FormControl>
                <Typography mt={2}>internship city/cities *</Typography>
                <FormControl sx={{ m: 1, minWidth: 80, marginTop: "1rem" }}>
                  <InputLabel sx={{}} id="demo-simple-select-autowidth-label">
                    select
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={age}
                    onChange={handleChange}
                    autoWidth
                    label="Age"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Delhi</MenuItem>
                    <MenuItem value={21}>Gurgaon</MenuItem>
                    <MenuItem value={21}>Noida</MenuItem>
                  </Select>
                </FormControl>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Allow application ONLY from the above or the neighbouring cities"
                  />
                </FormGroup>
                <FormControl sx={{ marginTop: "1rem" }} component="fieldset">
                  <FormLabel component="legend">
                    Is part time allowed? *
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-label="gender"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="no"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
                <Typography sx={{ marginTop: "1rem" }}>
                  {" "}
                  Number of opening *
                </Typography>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "25ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="standard-basic"
                    label="Enter only Number"
                    variant="standard"
                    placeholder="Enter no. of intern "
                  />
                </Box>
                <FormControl sx={{ marginTop: "1rem" }} component="fieldset">
                  <FormLabel component="legend">
                    Internship start date *
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-label="gender"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="yes"
                      control={<Radio />}
                      label="Immediately (within 30 days)"
                    />
                    <FormControlLabel
                      value="no"
                      control={<Radio />}
                      label="Later"
                    />
                  </RadioGroup>
                </FormControl>
                <Typography mt={2}>Internship duration *</Typography>
                <Box>
                  <TextField
                    label="Choose duration"
                    variant="outlined"
                    type="number"
                  />
                  <TextField
                    sx={{ marginLeft: "1rem" }}
                    label="Months"
                    variant="outlined"
                    type="number"
                  />
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid ml={10} mr={10} mt={3}>
          <Paper elevation={3}>
            <Grid m={4} p={4}>
              <Typography textAlign="center" variant="h4">
                Intern's Responsibilities
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  marginTop: "1rem",
                  marginBottom: ".5rem",
                }}
              >
                Write a concise. Yet detailed description of the inter's
                resposibilities. Consistent
                <br /> well written JDs typically invite more applications than
                incomplete ones.
              </Typography>
              <Link sx={{ textDecoration: "none" }} href="#">
                Click here to learn how your JD can get you more application
              </Link>
              <Paper elevation={6}>
                <Grid p="2rem" mt={1}>
                  <Typography textAlign="center" variant="h5">
                    Selected intern's day-to-day responsibilities
                  </Typography>
                  <Box>
                  <TextField type="text" fullWidth placeholder="1."></TextField>
                  <TextField  type="text" fullWidth placeholder="2."></TextField>
                  <TextField  type="text" fullWidth placeholder="3."></TextField>
                  </Box>
                </Grid>
              </Paper>
            </Grid>
          </Paper>
        </Grid>
        <Grid ml={10} mr={10} mt={3}>
          <Paper elevation={3}>
            <Grid m={4} p={4}>
              <Typography textAlign="center" variant="h5">
                Stipend & Perks
              </Typography>
              <FormControl sx={{ marginTop: "1rem" }} component="fieldset">
                <FormLabel sx={{ fontWeight: "bold" }} component="legend">
                  Stipend
                </FormLabel>
                <RadioGroup
                  row
                  aria-label="gender"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Fixed"
                  />
                  <FormControlLabel
                    value="negitiable"
                    control={<Radio />}
                    label="Negotiable"
                  />
                  <FormControlLabel
                    value="performance"
                    control={<Radio />}
                    label="Performance Based"
                  />
                  <FormControlLabel
                    value="unpaid"
                    control={<Radio />}
                    label="Unpaid"
                  />
                </RadioGroup>
              </FormControl>
              <Typography mt={2} sx={{ fontWeight: "bold" }}>
                Perks
              </Typography>
              <Grid sx={{ display: { lg: "flex" } }}>
                <Box>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Certificate"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Flexible work hours"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="5 days a week"
                    />
                  </FormGroup>
                </Box>
                <Box>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Letter of recommendation"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Informal dress code"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Free snacks & beverages"
                    />
                  </FormGroup>
                </Box>
              </Grid>
              <FormControl sx={{ marginTop: "1rem" }} component="fieldset">
                <FormLabel sx={{ fontWeight: "bold" }} component="legend">
                  Does this internship came with a Pre-Placement Offer (PPO) *
                </FormLabel>
                <RadioGroup
                  row
                  aria-label="gender"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Paper>
        </Grid>
        <Grid ml={10} mr={10} mt={3}>
          <Paper elevation={3}>
            <Grid m={4} p={4}>
              <Typography textAlign="center" variant="h5">
                Who can apply
              </Typography>
              <Typography mt={1} sx={{ fontWeight: "bold" }}>
                Skills that you are looking for :
              </Typography>
              <Typography>(Type one or more skills Recommended)</Typography>
              <TextField
                fullWidth
                sx={{ marginTop: "1rem" }}
                type="text"
                placeholder="MERN,Adobe,MS-Office etc.."
              ></TextField>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Allow application from women also who are willing to start/restart their career"
                />
                <Link
                  href="#"
                  sx={{
                    textDecoration: "none",
                    paddingLeft: "2rem",
                    paddingBottom: "1rem",
                  }}
                >
                  know more.
                </Link>
              </FormGroup>
              <Typography sx={{ fontWeight: "bold" }}>Assessment</Typography>
              <Typography mt={1}>
                Question 1&2 will be asked to every applicants by default. if
                you wish, you may ask two or more customized questions.
              </Typography>
              <Typography mt={1}>
                <span style={{ fontWeight: "bold" }}>Question 1:</span>
                Why should you be hired for this internship?
              </Typography>
              <Typography mb={1} mt={1}>
                <span style={{ fontWeight: "bold" }}>Question 2:</span>
                Are you available for 6 months?
              </Typography>
              <Link href="#" sx={{ textDecoration: "none" }}>
                Ask customized questions
              </Link>
            </Grid>
          </Paper>
        </Grid>
        <Grid ml={10} mr={10} mt={3} display="flex" justifyContent="flex-end">
          <Button sx={{ marginRight: "1.5rem" }} variant="outlined">
            Save Draft
          </Button>
          <Button variant="contained">Post Internship</Button>
        </Grid>
      </Grid>
    </>
  );
}

export default PostIntern;
