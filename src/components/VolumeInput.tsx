import React, { ReactElement } from "react";
import { useSettingsContext } from "../hooks/useSettingsContext";

export const VolumeInput = ():ReactElement => {
  const {settings, handleChange} = useSettingsContext()
  const onChange = (e:React.ChangeEvent<HTMLInputElement>): void => {
    handleChange({volume: +e.target.value})
  }
  return (
    <>
      <label htmlFor='volume'>Volume</label>
      <input type="number" id="volume" value={settings.volume} onChange={onChange} />
    </>
  )
}