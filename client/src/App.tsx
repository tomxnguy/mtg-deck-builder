import { useEffect, useState } from 'react';
import './App.css';

export default function App() {
  const [serverData, setServerData] = useState('');

  useEffect(() => {
    async function readServerData() {
      const resp = await fetch('/api/hello');
      const data = await resp.json();

      console.log('Data from server:', data);

      setServerData(data.message);
    }

    readServerData();
  }, []);

  return (
    <>
      <div>
        <p>Initial Commit</p>
      </div>
      <h1>{serverData}</h1>
    </>
  );
}
