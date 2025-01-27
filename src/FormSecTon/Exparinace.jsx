import React from 'react';
import { Button } from '../components/ui/button';
const formField={
    title:'',
    companyName:'',
    city:'',
    state:'',
    startDate:'',
    endDate:'',
    workSummery:'',

}
const Exparinace = ({next,setNext}) => {

    return (
        <div>
            ex
            <Button onClick={() => setNext(next + 1)}>Next</Button>
        </div>
    );
};

export default Exparinace;