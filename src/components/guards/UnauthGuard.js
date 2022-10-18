import { useEffect } from 'react';

import useSignOut from '@hooks/useSignOut';
import useSignIn from '@hooks/useSignIn';
import useCurrentUser from '@hooks/useCurrentUser';
import { endpoints } from '@utils/endpoints';

function UnauthGuard({ children }) {
  const signOut = useSignOut();
  const signIn = useSignIn();
  const currentUser = useCurrentUser();

  useEffect(() => {
    if (!currentUser) {
      fetch(endpoints('currentUser'))
        .then((response) => {
          if (response.ok) return response.json();
          signOut();
        })
        .then((data) => signIn(data));
    }
  });

  return children;
}

export default UnauthGuard;
