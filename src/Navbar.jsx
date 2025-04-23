import { NavLink, useNavigate } from 'react-router-dom'
import { useTheme } from './ThemeContext'

const Navbar = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  return (
    <div className='whole'>

      <div className={`navbar ${theme}`}>
        <div className="logo"> EvolvraX</div>
        <div>
          <ul>
            <NavLink to="/">
              <li>Home</li>
            </NavLink>
            <NavLink to="/userprofile">
              <li>UserDetails</li>
            </NavLink>
            <NavLink to="/about">
              <li>About</li>
            </NavLink>
          </ul>
        </div>
        <div className='btns'>
          <button onClick={() => navigate("/login")} className="btn">Login</button>
          <button onClick={toggleTheme} className='btntheme'>{theme === "light" ? "🌙" : "☀️"}</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
