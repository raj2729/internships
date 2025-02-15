import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
// import CompanyLog from "./Components/CompanyLog";
import Questions from "./Components/Questions";
import ParticularInternship from "./Components/ParticularInternship";
// import Student from "./Components/Signup";
import Employ from "./Components/Employ";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import MyApplication from "./Components/MyApplicationTable";
import MyApplicationCard from "./Components/MyApplicationCard";
import AllInternships from "./Components/AllInternships";
import { createTheme, ThemeProvider } from "@mui/material";
import Employee_dash from "./Components/Employee_dash";
import Employee_intern_dash from "./Components/Employee_intern_dash";
import CreateInternship from "./Components/CreateInternship";


const theme = createTheme({
  margin: 0,
});

function App() {
  return (
    <>
      {/* fsRiDfVHayho8OkN */}
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            {/* <Route exact path="/register/Student" element={<Student />} /> */}
            {/* <Route exact path="/register/Company" element={<Employ />} /> */}
            {/* <Route exact path="/login/StudentLog" element={<StudentLog />} /> */}
            {/* <Route exact path="/login/CompanyLog" element={<CompanyLog />} /> */}
            <Route exact path="/login/MyApplication" element={<MyApplication />} />
            <Route exact path="/allInternships" element={<AllInternships />} />
            <Route exact path="/internship/:id" element={<ParticularInternship />} />
            <Route exact path="/questions/:id" element={<Questions />} />
            <Route exact path="/createInternship" element={<CreateInternship />} />
            <Route
              exact path="/login/MyApplicationCard"
              element={<MyApplicationCard />}
            />
            <Route exact path="/Employee/Dashboard" element={<Employee_dash />} />
            <Route
              exact path="/Employee/Internship"
              element={<Employee_intern_dash />}
            />
          </Routes>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
