import { PlusSquare } from "lucide-react";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input"
import { Button } from "../components/ui/button";
import { useUser } from "@clerk/clerk-react";

const AddResume = () => {
    const [openDialog,setOpenDialog]=useState(false)
    const [resumeTitle,setResumeTitle]=useState()
    const [loading,setLoading]=useState(false);
    const {user}=useUser()
    

    const handleAddTitle=()=>{

        const data={
            data:{
                title:resumeTitle,
                userEmail:user?.primaryEmailAddress?.emailAddress,
                userName:user?.fullName
            }
        }
        console.log(data);
        
    }
    

  return (
    <div>
      <div>
        <div
          className="p-14 py-24 border 
        items-center flex 
        justify-center bg-secondary
        rounded-lg h-[280px]
        hover:scale-105 transition-all hover:shadow-md
        cursor-pointer border-dashed"
          onClick={() => setOpenDialog(true)}
        >
          <PlusSquare />
        </div>
      </div>
      <Dialog  open={openDialog} >
       
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Resume</DialogTitle>
            <DialogDescription>
            <p>Add a title for your new resume</p>
            <Input className='my-2' onChange={(e)=>setResumeTitle(e.target.value)} />

            </DialogDescription>
            <div className='flex justify-end gap-5'>
                <Button onClick={()=>setOpenDialog(false)} variant="ghost">Cancel</Button>
                <Button 
                    disabled={!resumeTitle||loading}
                onClick={()=>handleAddTitle()}>
                    {loading?
                    <Loader2 className='animate-spin' /> :'Create'   
                }
                    </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddResume;
