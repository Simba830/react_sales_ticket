import React, { useContext, useLayoutEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../store/AppContext";

function AdminDashboard() {
  const navigation = useNavigate();
  const { authToken } = useContext(AppContext);

  useLayoutEffect(() => {
    if (!authToken) {
      navigation(-1);
    }
  }, [authToken, navigation]);

  return (
    <div className="container-fluid display-flex text-center mb-5 mt-5">
      <h1>Admin Dashboard</h1>
    </div>
  );
}

export default AdminDashboard;
