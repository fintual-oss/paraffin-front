import { useContext } from 'react';

import { AuthContext } from 'contexts/AuthContext';

const useLoginDialog = () => {
  const context = useContext(AuthContext);

  return context?.loginDialog;
};

export default useLoginDialog;
