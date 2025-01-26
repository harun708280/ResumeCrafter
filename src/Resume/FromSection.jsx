import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Home, LayoutGrid, ThermometerIcon } from "lucide-react";
import PersonalDetails from "../FormSecTon/PersonalDetails";
import Summery from "../FormSecTon/Summery";
import Exparinace from "../FormSecTon/Exparinace";
import Education from "../FormSecTon/Education";
import Skils from "../FormSecTon/Skils";
import { Navigate } from "react-router-dom";

const FromSection = () => {
  const [next, setNext] = useState(1);
  return (
    <div>
      <div className="flex justify-between items-center">
        <Button>
          <Home className="h-10"></Home> 
          
            <span className="text-xm font-bold uppercase">Resume Crafter</span>
          
        </Button>
        <Button>
          {" "}
          <LayoutGrid></LayoutGrid> Theme
        </Button>
      </div>

      {next === 1 ? (
        <PersonalDetails next={next} setNext={setNext} />
      ) : next === 2 ? (
        <Summery next={next} setNext={setNext} />
      ) : next === 3 ? (
        <Exparinace next={next} setNext={setNext} />
      ) : next === 4 ? (
        <Education next={next} setNext={setNext} />
      ) : next === 5 ? (
        <Skils next={next} setNext={setNext} />
      ) : next === 6 ? (
        <Navigate />
      ) : (
        <p>Invalid Step</p>
      )}
    </div>
  );
};

export default FromSection;
