import React, { ReactElement } from "react";
import { useSettingsContext } from "../hooks/useSettingsContext";

export const AnalyticsOnInput = ():ReactElement => {
  const {settings, handleChange} = useSettingsContext()
  const onChange = (e:React.ChangeEvent<HTMLInputElement>): void => {
    handleChange({analyticsOn: e.target.checked})
  }
  return (
    <>
      <label htmlFor='analytics'>Analytics</label>
      <input type="checkbox" id="analytics" checked={settings.analyticsOn} onChange={onChange} />
    </>
  )
}