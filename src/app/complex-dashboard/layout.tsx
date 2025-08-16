import React from "react";
import Login from "./@login/page";

const ParallelDashBoardLayouut = ({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) => {
  const isUserLoggedIn = false;

  return isUserLoggedIn ? (
    <>
      <div>{children}</div>
      <h1>Parallel DashBoard Layout</h1>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
      </div>
    </>
  ) : (
    // login
    <Login />
  );
};

export default ParallelDashBoardLayouut;
