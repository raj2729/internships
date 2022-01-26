import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";
import React from "react";
import "./Student.css";
import GoogleIcon from "@mui/icons-material/Google";
import { useState } from "react";

function Student() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [fname, setFname] = useState("");
  // const [lname, setLname] = useState("");

  // const [allEntry, setAllEntry] = useState([]);

  // const submitForm = (e) => {
  //   e.preventDefault();
  //   const newEntry = {
  //     email: email,
  //     password: password,
  //     fname: fname,
  //     lname: lname,
  //   };

  // setAllEntry([...allEntry, newEntry]);
  // console.log(allEntry);
  // };
  const [user, setUser] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
  });

  let name, value;
  const handleChange = (e) => {
    console.log(user);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const paperStyle = {
    padding: 20,
    height: "72vh",
    width: 450,
    margin: "20px auto",
  };
  const btstyle = { margin: "10px 0" };
  const Textstyle = { margin: "0 4px" };
  const font = { fontSize: 17 };
  return (
    <Grid>
      <Paper className="paper" elevation={10} style={paperStyle}>
        <Grid>
          <div className="container">
            <a className="g-login" href="www.google.com">
              <div id="g-login">
                <div className="g-img">
                  <GoogleIcon />
                </div>
                <div className="g-content">Sign Up with Google</div>
              </div>
            </a>
            <div className="seprate">
              <div className="text">
                <p>OR</p>
              </div>
              <div className="border"></div>
            </div>
            <Grid>
              <TextField
                value={user.email}
                onChange={handleChange}
                label="Email"
                name="email"
                placeholder="@example.com"
                fullWidth
                required
              ></TextField>
              <TextField
                value={user.password}
                onChange={handleChange}
                label="Password"
                sx={{ mt: 2 }}
                placeholder="Enter Password"
                type="password"
                name="password"
                fullWidth
                required
              ></TextField>
              <Typography sx={{ display: "flex", mt: 3 }}>
                <TextField
                  value={user.first_name}
                  onChange={handleChange}
                  style={Textstyle}
                  label="First Name"
                  placeholder="Joe"
                  name="first_name"
                ></TextField>
                <TextField
                  value={user.last_name}
                  onChange={handleChange}
                  label="Last Name"
                  name="last_name"
                  placeholder="Doe"
                ></TextField>
              </Typography>
              <Typography style={btstyle}>
                By signing up, you agree to our
                <Link sx={{ ml: 1 }} href="#">
                  Term and condition
                </Link>
              </Typography>
            </Grid>
            <Button
              type="submit"
              // onSubmit={submitForm}
              color="primary"
              variant="contained"
              style={btstyle}
              fullWidth
            >
              Sign Up
            </Button>
            <Grid sx={{ justifyContent: "center" }}>
              <Typography ml={5} style={font}>
                Already registered?
                <Link href="#">Login</Link>
              </Typography>
            </Grid>
          </div>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default Student;
