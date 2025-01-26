import React from "react";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import { UserButton, useUser } from "@clerk/clerk-react";

const Nav = () => {
  const navigate = useNavigate();
  const { user, isSignedIn, isLoaded } = useUser();

  return (
    <div className="p-4 shadow-lg">
      <div className="max-w-[1600px] mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="./logo.svg" alt="Logo" />
          <h1 className="text-xl font-extrabold uppercase text-primary ml-3">
            Resume Crafter
          </h1>
        </div>
        <div>
          {isSignedIn ? (
            <div className="flex gap-3">
              <Button
                onClick={() => navigate("/dashboard")}
                variant="outline"
                className="outline-primary text-primary text-lg font-semibold"
              >
                DashBoard
              </Button>
              <UserButton></UserButton>
            </div>
          ) : (
            <Button
              onClick={() => navigate("/sign-in")}
              variant="outline"
              className="outline-primary text-primary text-lg font-semibold"
            >
              Start Now
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
