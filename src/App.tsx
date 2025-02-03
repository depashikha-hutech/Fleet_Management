import { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home";
import VehicleOnboarding from "./components/onboarding/VehicleOnboarding";
import DriverOnboarding from "./components/onboarding/DriverOnboarding";
import OrganizationOnboarding from "./components/onboarding/OrganizationOnboarding";
import VehicleList from "./components/vehicles/VehicleList";
import DriverList from "./components/drivers/DriverList";
import OrganizationList from "./components/organization/OrganizationList";
import LoginForm from "./components/auth/LoginForm";
import SignupForm from "./components/auth/SignupForm";
import ForgotPasswordForm from "./components/auth/ForgotPasswordForm";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/forgot-password" element={<ForgotPasswordForm />} />

        {/* Protected Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/vehicles" element={<VehicleList />} />
        <Route path="/vehicles/onboarding" element={<VehicleOnboarding />} />
        <Route path="/drivers" element={<DriverList />} />
        <Route path="/drivers/onboarding" element={<DriverOnboarding />} />
        <Route path="/organization" element={<OrganizationList />} />
        <Route
          path="/organization/onboarding"
          element={<OrganizationOnboarding />}
        />

        {/* Catch all */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Suspense>
  );
}

export default App;
