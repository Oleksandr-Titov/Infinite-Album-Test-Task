import { useEffect, useState } from 'react';

export interface UseSettings {
  settings: SettingsState
  handleChange: (value: Partial<SettingsState>) => void
}

interface SettingsState {
  volume: number
  analyticsOn: boolean
}

const storageKey = 'settings'

export const useSettings = ():UseSettings => {
  const [settings, setSettings] = useState<SettingsState>({ volume: 0, analyticsOn: false })
  useEffect(() => {
    const storageValue = localStorage.getItem(storageKey)
    if (storageValue) {
      setSettings(JSON.parse(storageValue) as SettingsState)
    }
  }, [])

  const handleChange = (value: Partial<SettingsState>): void => {
    setSettings((prev) => {
      const newValue = {...prev, ...value}
      localStorage.setItem(storageKey,JSON.stringify(newValue))
      return newValue
    })
  }

  return { settings, handleChange }
}