import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

//Checks to see if the user is logged in, and if they aren't, redirects them to a different page
//You can also redirect if the user is logged in by setting "checkForLoggedOut" to be true
export default function useLoginCheck({authContext, failureRedirect, checkForLoggedOut=false}) {
    const navigate = useNavigate();
    const loggedIn = useContext(authContext);

    useEffect(() => {
        if((!loggedIn && !checkForLoggedOut) || (loggedIn && checkForLoggedOut)) {
            navigate(failureRedirect)
        }
    }, []);
}