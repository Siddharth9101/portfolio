import { useEffect } from "react";
import AdminProjectForm from "./AdminProjectForm";
import { useNavigate } from "react-router-dom";
const Admin = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("isAdmin") !== "true") {
      navigate("/");
    }
  });
  return (
    <div className="min-h-screen bg-gray-950 text-white py-10">
      <div className="w-full flex justify-end px-3 py-3">
        <button
          onClick={() => {
            localStorage.removeItem("isAdmin");
            navigate("/");
          }}
          className="cursor-pointer rounded w-fit px-10 py-2 text-white bg-amber-500"
        >
          Logout
        </button>
      </div>
      <AdminProjectForm />
    </div>
  );
};

export default Admin;
