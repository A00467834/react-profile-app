import './App.css';
import { useState } from 'react';
import AboutMe from './components/AboutMe';
import MyTown from './components/MyTown';

function App() {

  const [currentView, setCurrentView] = useState('aboutMe');

  return (
    <div className="app">
      <div className="app-menu">
        <button className='menu-item' style={{backgroundColor: `${currentView === 'aboutMe' ? '#ea4f54' : 'transparent'}`}} onClick={() => setCurrentView('aboutMe')} >About Me</button>
        <button className='menu-item'  style={{backgroundColor: `${currentView !== 'aboutMe' ? '#ea4f54' : 'transparent'}`}} onClick={() => setCurrentView('myTown')} >My Town</button>
      </div>
      <div className='app-navigator'>
        {currentView === 'aboutMe' ? <AboutMe /> : <MyTown />}
      </div>
    </div>
  );
}

export default App;
