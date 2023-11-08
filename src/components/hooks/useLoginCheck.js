import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';

//Checks to see if the user is logged in, and if they aren't, redirects them to a different page
//You can also redirect if the user is logged in by setting "checkForLoggedOut" to be true
export default function useLoginCheck({redirect, shouldBeLoggedOut=false}) {
    const navigate = useNavigate();
    if(shouldBeLoggedOut) {
        Auth.currentAuthenticatedUser().then(() => navigate(redirect));
    }
    else {
        Auth.currentAuthenticatedUser().catch(() => {navigate(redirect)});
    }
}