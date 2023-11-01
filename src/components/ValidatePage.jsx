import { useState } from 'react';
import { useNavigate,} from 'react-router-dom';
import logo from "../assets/Choreward-logos_black.png"
import { Auth } from 'aws-amplify';


function ValidatePage() {
    const navigate = useNavigate()
    
    const [username, setUserName] = useState('');
    const [authenticationCode, setAuthenticationCode] = useState('');

    const handleRegisterConfirmation = async () => {
        try {
            console.log('handleRegisterConfirmation')
            console.log(username);
            console.log(authenticationCode);

            await Auth.confirmSignUp(username, authenticationCode)
            navigate('/login')
        } catch (err) { console.log(err) }
    }
    const handleSubmit = (event) => {
        // Prevents the default form submission behavior
        event.preventDefault();
    
        // Handle your form submission logic here (e.g., send data to server)
        console.log('Form submitted with:');
      }

    return (
        <>
          <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <img
              style={{ width: '200px', height: '200px' }} // inline style
                 className="mx-auto h-12 w-12 "
                src={logo}
                alt="Your Company"
              />
              <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Please input your authentication code
              </h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
              <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                      Username
                    </label>
                    <div className="mt-2">
                      <input
                        id="username"
                        name="username"
                        value={username}
                        type="username"
                        autoComplete="username"
                        required
                        onChange={e => setUserName(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                      Authentication Code
                    </label>
                    <div className="mt-2">
                      <input
                        id="username"
                        name="username"
                        value={authenticationCode}
                        type="username"
                        autoComplete="username"
                        required
                        onChange={e => setAuthenticationCode(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </form>
                <div className='mt-10'>
                  <button
                    type="submit"
                    onClick={handleRegisterConfirmation}
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Validate Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )
}

export default ValidatePage;