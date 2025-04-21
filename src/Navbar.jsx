import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <div className='navbar'>
      <div className="logo"> EvolvraX</div>
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
      <button onClick={()=> navigate("/login")}>Login</button>
    </div>
  )
}

export default Navbar
