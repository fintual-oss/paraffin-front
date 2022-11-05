'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <p>¡Ocurrió un error!</p>
      <button onClick={() => reset()}>Inténtalo otra vez</button>
    </div>
  );
}
