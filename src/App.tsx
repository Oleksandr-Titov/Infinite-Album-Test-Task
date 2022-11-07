import React from 'react';
import './App.css';
import { AnalyticsOnInput } from './components/AnalyticsInput';
import { VolumeInput } from './components/VolumeInput';
import { useSettings } from './hooks/useSettings';
import { SettingsContext } from './hooks/useSettingsContext';

function App() {
  const settingsContext  = useSettings()
  return (
    <SettingsContext.Provider value={settingsContext}>
      <main className="App">
        <VolumeInput />
        <AnalyticsOnInput />
      </main>
    </SettingsContext.Provider>
  );
}

export default App;
