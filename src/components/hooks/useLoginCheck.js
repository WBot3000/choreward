import { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';

//Checks to see if the user is logged in, and if they aren't, redirects them to a different page
//Returns the username if authentication is successful and they should be logged in for this page, which functions as a unique identifier for that user
//You can also redirect if the user is logged in by setting "checkForLoggedOut" to be true
export default function useLoginCheck({redirect=null, shouldBeLoggedOut=false}) {

    const [userName, setUserName] = useState(null);
    const [userEmail, setUserEmail] = useState(null);
    const [statusChecked, setStatusChecked] = useState(null);
    const navigate = useNavigate();


    useEffect(() => {
        
        if(shouldBeLoggedOut) {
            Auth.currentAuthenticatedUser().then(() => {
                if(redirect) {
                    navigate(redirect)
                }
            })
        }
        else {
            Auth.currentAuthenticatedUser().catch(() => {navigate(redirect)}).then((user) => {
                // Access user attributes like username and email
                const { username, attributes } = user;
                const email = attributes.email; // Assuming email is stored in attributes
        
                // Use username and email here
                // console.log('Username:', username);
                // console.log('Email:', email);
                setUserName(username);
                setUserEmail(email);
                setStatusChecked(true);
            })
        }
    }, []);

    return {statusChecked, userName, userEmail};
}