import { useContext } from 'react';

import { AuthContext } from 'contexts/AuthContext';

const useSetLoginDialog = () => {
  const context = useContext(AuthContext);

  return context?.setDisplayLoginDialog;
};

export default useSetLoginDialog;
