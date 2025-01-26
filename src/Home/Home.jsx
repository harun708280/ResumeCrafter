import { useUser } from '@clerk/clerk-react';
import React from 'react';
import { Navigate } from 'react-router-dom';

const Home = () => {
    const {user,isLoaded,isSignedIn}=useUser()

    
    return (
        <div>
            <h1>This Is Home Page</h1>
        </div>
    );
};

export default Home;