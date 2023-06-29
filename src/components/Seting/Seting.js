import React, {useState, useEffect} from 'react'
import './setting.css'

const Seting = ({toggleTheme}) => {
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    const savedValue = localStorage.getItem('toggleValue');
    if (savedValue) {
      setIsToggled(savedValue === 'true');
    }
  }, []);

  const handleToggle = () => {
    const newValue = !isToggled;
    setIsToggled(newValue);
    localStorage.setItem('toggleValue', String(newValue));
  };
  return (
    <div className='setting-fon'>
      <h1>Настройки</h1>
      <div>
      
        <label  class="checkbox-green">
        <p>darkmode</p>
        <input checked={isToggled} onClick={toggleTheme} onChange={handleToggle} type="checkbox"/>
        <span class="checkbox-green-switch" data-label-on="вкл" data-label-off="выкл"></span>
        </label>

      </div>
      
    </div>
  )
}

export default Seting