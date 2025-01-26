import React from 'react';
import { Button } from '../components/ui/button';

const PersonalDetails = ({next,setNext}) => {
    return (
        <div>
            personal {next}

            <Button onClick={() => setNext(next + 1)}>Next</Button>
        </div>
    );
};

export default PersonalDetails;