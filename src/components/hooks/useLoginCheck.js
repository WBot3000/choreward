import { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';

//Checks to see if the user is logged in, and if they aren't, redirects them to a different page
//You can also redirect if the user is logged in by setting "checkForLoggedOut" to be true
export default function useLoginCheck({redirect, shouldBeLoggedOut=false}) {

    const [statusChecked, setStatusChecked] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if(shouldBeLoggedOut) {
            Auth.currentAuthenticatedUser().then(() => navigate(redirect)).catch(() => {setStatusChecked(true)});
        }
        else {
            Auth.currentAuthenticatedUser().catch(() => {navigate(redirect)}).then(() => {setStatusChecked(true)});
        }
    }, []);

    return statusChecked;
}