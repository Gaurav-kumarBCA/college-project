import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import Enrollment from "./components/Enrollment";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { AuthProvider } from "./context/AuthProvider";
import Counselling from "./components/Counselling";
import Admission from "./pages/Admission";
import CourseAbout from "./pages/CourseAbout";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppLayout />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

export const AppLayout = () => {
  const location = useLocation();
  const noLayoutRoutes = ["/login", "/signup"].includes(location.pathname);

  return (
    <>
      <div className={`${noLayoutRoutes ? "hidden" : "block "}`}>
        <Navbar />
      </div>

      <div className="flex  ">
        {/* <div className={`${noLayoutRoutes ? "hidden" : "block fixed z-33"}`}> <Sidebar /></div> */}

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course" element={<Courses />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/counseling" element={<Counselling/>}/> */}
            <Route
              path="/counselling"
              element={
                <ProtectedRoutes>
                  <Counselling />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/admission"
              element={
                <ProtectedRoutes>
                  <Admission />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/coursedetail/:id"
              element={
                <ProtectedRoutes>
                  <CourseAbout />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoutes>
                  <Profile />
                </ProtectedRoutes>
              }
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

// skyblue 1  #007AFF

//blueish #0C4A6E

// deep navy blue = #1E293B
