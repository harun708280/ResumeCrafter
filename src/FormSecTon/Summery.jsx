import React from "react";
import { Button } from "../components/ui/button";
import { ArrowBigLeftDash, ArrowLeftToLine, ArrowRight, Brain } from "lucide-react";
import { Textarea } from "@/components/ui/textarea"

const Summery = ({ next, setNext }) => {
  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
      <h2 className="font-bold text-lg">Summery</h2>
      <p>Add Summery for your job title</p>
      
      <form className="mt-7" >
        <div className="flex justify-between items-end">
          <label>Add Summery</label>
          <Button
            variant="outline"
            
            type="button"
            size="sm"
            className="border-primary text-primary flex gap-2"
          >
            <Brain className="h-4 w-4" /> Generate from AI
          </Button>
        </div>
        <Textarea
          className="mt-5"
          required
          
        />
        <div className="mt-2 flex justify-end space-x-2">
        <Button onClick={() => setNext(next - 1)}> <ArrowLeftToLine></ArrowLeftToLine> Previous  </Button>
        <Button onClick={() => setNext(next + 1)}>Next <ArrowRight/> </Button>
        </div>
      </form>
    </div>
  );
};

export default Summery;
