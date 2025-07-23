import React from "react";
import Header from "../../other/Header";
import CreateTask from "../../other/CreateTask";
import AllTask from "../../other/AllTask";

const AdminDashboard = () => {
  const adminData = {
    firstName: "Admin"
  };

  return (
    // <div className="h-screen w-full p-10">
    //   <Header />

    <div className="h-screen w-full p-7">
      <Header data={adminData} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
