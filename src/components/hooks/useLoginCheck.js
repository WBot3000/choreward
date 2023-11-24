import { useState, useMemo, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';

//Checks to see if the user is logged in, and if they aren't, redirects them to a different page
//You can also redirect if the user is logged in by setting "checkForLoggedOut" to be true
export default function useLoginCheck({redirect, shouldBeLoggedOut=false}) {

    const [userName, setUserName] = useState(null);
    const [userEmail, setUserEmail] = useState(null);
    const [statusChecked, setStatusChecked] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        
        if(shouldBeLoggedOut) {
            Auth.currentAuthenticatedUser().then(() => navigate(redirect)).catch(() => {setStatusChecked(true)});
        }
        else {
            Auth.currentAuthenticatedUser().catch(() => {navigate(redirect)}).then(() => {setStatusChecked(true)
            Auth.currentAuthenticatedUser()
                .then((user) => {
                    // Access user attributes like username and email
                    const { username, attributes } = user;
                    const email = attributes.email; // Assuming email is stored in attributes
            
                    // Use username and email here
                    // console.log('Username:', username);
                    // console.log('Email:', email);
                    setUserName(username);
                    setUserEmail(email)
                })
                .catch((error) => {
                    // Handle errors if the Promise is rejected
                    console.error('Error fetching user data:', error);
                });

            
            });
        }
    }, []);

    return {statusChecked, userName, userEmail};
}