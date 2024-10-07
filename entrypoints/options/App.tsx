import { useState } from 'react';
import atodeyomuLogo from '@/assets/atodeyomu.svg';
import './App.css';

function App() {
  const [usename, setUsename] = useState<string>('');
  const [accessToken, setAccessToken] = useState<string>('');

  useEffect(() => {
    const setup = async () => {
      const username = await storage.getItem<string>('local:username');
      const accessToken = await storage.getItem<string>('local:access-token');
      setUsename(username || '');
      setAccessToken(accessToken || '');
    };
    setup();
  }, []);

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    storage.setItem<string>('local:username', e.target.value);
  };

  const handleAccessToken = (e: React.ChangeEvent<HTMLInputElement>) => {
    storage.setItem<string>('local:access-token', e.target.value);
  };

  return (
    <>
      <div className='header'>
        <a href="https://atodeyomu.morishin.me/" target="_blank">
          <img src={atodeyomuLogo} className={"logo"} alt="Atode yomu" />
          <h1>Atode yomu</h1>
        </a>
      </div>
      <div className="form">
        <div>
          Username: <input type="text" name="username" onChange={handleUsername} defaultValue={usename} />
        </div>
        <div>
          Your Access Token: <input type="text" name="access-token" onChange={handleAccessToken} defaultValue={accessToken} className='token'/>
        </div>
      </div>
    </>
  );
}

export default App;
