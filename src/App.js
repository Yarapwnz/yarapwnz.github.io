import React, { useState, useEffect } from 'react';
import Pages from './pages';
import LoadingSkeleton from './components/LoadingSkeleton';

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch('https://gitconnected.com/v1/portfolio/yarapwnz')
      .then(res => res.json())
      .then(user => {
        setUser(user);
      });
  }, []);

  if (!user) {
    return <LoadingSkeleton />;
  }

  return <Pages user={user} />;
}

export default App;