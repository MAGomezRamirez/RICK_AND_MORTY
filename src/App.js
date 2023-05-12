
import style from './App.module.css'
import Cards from './components/Cards/Cards';
import NavBar from './components/NavBar/NavBar';
import { useState } from 'react';
import axios from 'axios'
import {Routes, Route} from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';



function App() {

const [characters, setCharacters]= useState([]);
// const onSearch = () =>{
//    setCharacters([...characters, example ])

// };

function onSearch(id) {
   axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
};

const onClose=(id) =>{
   setCharacters.filter((char)=>{
      return char.id !== Number(id)
   })

};
   return (

      <div className={style.App}>
      <NavBar onSearch={onSearch}/>

      <Routes>
      
         <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/detail/:id" element={<Detail/>}/>
      </Routes>
      </div>
   );
}

export default App;
