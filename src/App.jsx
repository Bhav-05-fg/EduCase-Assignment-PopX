import { Route, Routes } from "react-router";
import LandingPage from "./pages/LandingPage";
import LoginScreen from "./pages/LoginScreen";
import SignupScreen from "./pages/SignupScreen";
import Profile from "./pages/Profile";
import { useSignupForm } from "./FormLogic/formLogic"
import { useEffect, useState } from "react";

function App() {

  const { formData, setFormData, isFormValid, handleChange } = useSignupForm();
  
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginScreen formData={formData} />} />
      <Route path="/signup" element={<SignupScreen setFormData={setFormData} formData={formData} isFormValid={isFormValid} handleChange={handleChange} />} />
      <Route path="/profile" element={<Profile formData={formData} />} />
    </Routes>
  )
}


export default App;
