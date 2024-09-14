// import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome.tsx";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";
import {ROUTES} from "./const/Routes.ts";

export default function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path={ROUTES.LOGIN} element={<Login />} />
            <Route path={ROUTES.SIGNUP} element={<Signup />} />
        </Routes>
    </Router>
  );
}
