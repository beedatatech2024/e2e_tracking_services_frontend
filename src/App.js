import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import AboutPage from "./pages/Aboutpage";
import ContactPage from "./pages/Contactpage";
import NewRegister from "./forms/NewRegister";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Homepage */}
        <Route
          path="/"
          element={<Homepage />}
        />

        {/* Dashboard Routes */}
        <Route
          path="/dashboard/*"
          element={<Dashboard />}
        />

        {/* About */}
        <Route
          path="/about"
          element={<AboutPage />}
        />

        {/* Contact */}
        <Route
          path="/contact"
          element={<ContactPage />}
        />

        {/* Register */}
        <Route
          path="/register"
          element={<NewRegister />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;