import SearchBar from "../SearchBar/SearchBar";
import style from './NavBar.module.css'
import { Link, NavLink } from "react-router-dom";

const NavBar = ({onSearch})=> {
return(
  
 <div className={style.nav}>
    <img className={style.imagen}/>
            <SearchBar onSearch={onSearch}/>
    <div className={style.container}>
     <Link to='/home'>
        <button className={style.home}>Home</button>
     </Link>
     <NavLink to='/about'>
        <button className={style.about}>About</button>
     </NavLink>
     <NavLink to='/favorites'>
        <button className={style.favorites}>Favorites</button>
     </NavLink>
    </div>
</div>
    )
}

export default NavBar;