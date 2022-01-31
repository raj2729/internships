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
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* <Route path="/register/Student" element={<Student />} /> */}
            {/* <Route path="/register/Company" element={<Employ />} /> */}
            {/* <Route path="/login/StudentLog" element={<StudentLog />} /> */}
            {/* <Route path="/login/CompanyLog" element={<CompanyLog />} /> */}
            <Route path="/login/MyApplication" element={<MyApplication />} />
            <Route path="/allInternships" element={<AllInternships />} />
            <Route exact path="/internship/:id" element={<ParticularInternship />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/createInternship" element={<CreateInternship />} />
            <Route
              path="/login/MyApplicationCard"
              element={<MyApplicationCard />}
            />
            <Route path="/Employee/Dashboard" element={<Employee_dash />} />
            <Route
              path="/Employee/Internship"
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
