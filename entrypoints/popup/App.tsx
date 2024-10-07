import { useState } from 'react';
import atodeyomuLogo from '@/assets/atodeyomu.svg';
import './App.css';

const ENDPOINT = 'https://atodeyomu.morishin.me/api/users/:username/pages';

function App() {
  const [loading ,setLoading] = useState(true);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const setup = async () => {
      const username = await storage.getItem<string>('local:username');
      const accessToken = await storage.getItem<string>('local:access-token');
      return { username, accessToken };
    };

    const main = async () => {
      const config = await setup();
      if (!config.username || !config.accessToken) {
        setLoading(false);
        return;
      }

      const tabs = await browser.tabs.query({ active: true, currentWindow: true });
      const tab = tabs[0];
      if (tab.url && tab.url.startsWith('http')) {
        await request(tab.url, config.username, config.accessToken);
      }
      setLoading(false);
    };

    const request = async (url: string, username: string, token: string) => {
      const response = await fetch(ENDPOINT.replace(':username', username), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ url }),
      });
      const data = await response.json();
      console.log(data);

      setSuccess(true);
    };
  
    main();
  }, []);

  return (
    <>
      <div>
        <a href="https://atodeyomu.morishin.me/" target="_blank">
          <img src={atodeyomuLogo} className={success ? "logo spin" : "logo"} alt="Atode yomu" />
        </a>
      </div>
      {loading ? <h1>...</h1> : (
        success ? <h1>Added Unread</h1> : <h1>Failed to add to unread</h1>
      )}
    </>
  );
}

export default App;
