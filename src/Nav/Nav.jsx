import React from "react";
import { Button } from "../components/ui/button";
import { useNavigate, Link } from "react-router-dom";
import { UserButton, useUser } from "@clerk/clerk-react";

const Nav = () => {
  const navigate = useNavigate();
  const { user, isSignedIn, isLoaded } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 shadow-lg">
      <div className="max-w-[1600px] mx-auto flex justify-between items-center">
        <Link to='/'>
        <div className="flex items-center">
          <img src="./logo.svg" alt="Resume Crafter Logo" />
          <h1 className="text-xl font-extrabold uppercase text-primary ml-3">
            Resume Crafter
          </h1>
        </div>
        </Link>
        <div>
          {isSignedIn ? (
            <div className="flex gap-3">
              <Button
                onClick={() => navigate("/dashboard")}
                variant="outline"
                className="outline-primary text-primary text-lg font-semibold"
                aria-label="Go to Dashboard"
              >
                DashBoard
              </Button>
              <UserButton className='h-14 w-14 rounded-full' />
            </div>
          ) : (
            <Button
              onClick={() => navigate("/sign-in")}
              variant="outline"
              className="outline-primary text-primary text-lg font-semibold"
              aria-label="Sign In"
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
