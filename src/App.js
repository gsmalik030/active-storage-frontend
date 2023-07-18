import { createContext, useState } from 'react';
import './App.css';
import File from './components/File';
import LatestImage from './components/LatestImage';
export const AppContext = createContext(null);

function App() {
  const [latestPost, setLatestPost] = useState(AppContext);
  return (
    <AppContext.Provider value={{ latestPost, setLatestPost }}>
    <div className="App">
      <File/>
      <LatestImage/>
    </div>
    </AppContext.Provider>
  );
}

export default App;
