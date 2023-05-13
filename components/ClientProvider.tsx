import type { NextPage } from 'next';
import { Toaster } from 'react-hot-toast';

const ClientProvider: NextPage = () => {
  return (
    <>
      <Toaster position='top-right' />
    </>
  );
};

export default ClientProvider;
