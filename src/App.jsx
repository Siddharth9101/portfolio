import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Admin from "./components/Admin";
import AdminLogin from "./components/AdminLogin";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/dashboard" element={<Admin />} />
      </Routes>
    </>
  );
};

export default App;
