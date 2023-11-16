import { useState, useMemo, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';

//Checks to see if the user is logged in, and if they aren't, redirects them to a different page
//Returns the username if authentication is successful and they should be logged in for this page, which functions as a unique identifier for that user
//You can also redirect if the user is logged in by setting "checkForLoggedOut" to be true
export default function useLoginCheck({redirect, shouldBeLoggedOut=false}) {

    const [username, setUsername] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if(shouldBeLoggedOut) {
            Auth.currentAuthenticatedUser().then(() => {navigate(redirect)})
        }
        else {
            Auth.currentAuthenticatedUser().catch(() => {navigate(redirect)}).then((userInfo) => {setUsername(userInfo.username)});
        }
    }, []);

    return username;
}