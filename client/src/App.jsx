import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import OtpVerification from "./Pages/OtpVerification";
function App() {
  return (
    <>
   
   <BrowserRouter>
   <Routes>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/signin" element={<Signin/>}></Route>
    <Route path="/otp-page" element={<OtpVerification/>}></Route>
   </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;
