import React from 'react';
import { Button } from '../components/ui/button';
import { Home, LayoutGrid, ThermometerIcon } from 'lucide-react';

const FromSection = () => {
    return (
        <div>
            <div className="flex justify-between items-center">
                <Button><Home className='h-10'></Home></Button>
                <Button> <LayoutGrid></LayoutGrid> Theme</Button>
            </div>

            

        </div>
    );
};

export default FromSection;