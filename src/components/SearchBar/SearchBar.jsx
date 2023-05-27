import style from './SearchBar.module.css'
import { useState } from 'react';

const SearchBar = ({onSearch}) => {
   const [id, setId]= useState('');

   const handleChange =(event) =>{
      setId(event.target.value)
   };
   return (
      <div className={style.contenedor}>
         <input className={style.barra} type='search' onChange={handleChange} value={id}/>
         <button className={style.agregar} onClick ={()=> {onSearch(id)}}>Agregar</button> 
     
      </div>
   );
}

export default SearchBar;