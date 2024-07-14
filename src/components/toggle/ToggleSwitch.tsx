import useDark from "../../hooks/useDark";
import { useState } from "react"



const ToggleSwitch = () => {

  const [colorTheme, setTheme] = useDark()

  const [isDark, setIsDark] = useState(colorTheme === 'light' ? true : false)

  const toggleMode = (checked: boolean) => {
    setTheme(colorTheme)
    setIsDark(checked)
  }

  return (
    <label className='toggle'>
      <input
        type="checkbox"
        checked={isDark}
        onChange={e => toggleMode(e.target.checked)}
      />
      <span className='toggle__slider'></span>
    </label>
  );
}

export default ToggleSwitch;