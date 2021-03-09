import React, { useEffect } from 'react';

const Admin = () => {
  useEffect(() => {
    window.location.href = 'http://18.192.100.111:1337/admin';
  }, []);
  return <div>Loading...</div>;
};

export default Admin;
