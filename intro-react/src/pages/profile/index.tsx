import { useEffect } from 'react';

export default function ProfilePage() {
  // Request Network ke API
  useEffect(() => {
    console.log('useEffect triggerrr');
  }, []);

  /*
  useEffect(() => {

  }, [//dependencies]); 
  */
  return (
    <>
      {console.log('Renderrr')}
      <h1>Profile Page</h1>
    </>
  );
}
