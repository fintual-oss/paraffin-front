import { AuthContext } from '/src/contexts/AuthContext';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { endpoints } from '@utils/endpoints';

const AuthenticationProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  const [displayLoginDialog, setDisplayLoginDialog] = useState(false);
  const router = useRouter();

  const signInHandler = (data) => setCurrentUser(data);

  const signOutHandler = () => {
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    };
    fetch(endpoints('signOut'), requestOptions).then((response) => {
      if (response.ok) {
        setCurrentUser(undefined);
        if (router.pathname != '/') {
          router.push('/users/sign_in');
        }
      }
    });
  };

  const value = {
    currentUser,
    signIn: signInHandler,
    signOut: signOutHandler,
    loginDialog: {
      displayLoginDialog,
      setDisplayLoginDialog,
    },
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthenticationProvider;
