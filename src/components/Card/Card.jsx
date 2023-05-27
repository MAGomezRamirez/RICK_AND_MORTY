import style from './Card.module.css'
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../Redux/action';
import {connect} from 'react-redux'
import { useState, useEffect } from 'react';

const Card = ({id, name, status, species, gender, origin, image, 
onClose, addFav, removeFav, myFavorites}) => {

   const [isFav, setIsFav]= useState(false);

   const handleFavorite = ()=>{
      isFav ? removeFav(id) : addFav({id, name, status, species, gender, origin, image, onClose});
      setIsFav(!isFav)
   };

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className= {style.contenedor}>
         {
            isFav ? (
                <button onClick={handleFavorite}>❤️</button>
            ) : (
                <button onClick={handleFavorite}>🤍</button>
             )
         }
           { <div className={style.buttonsContainer}>
         <button onClick={()=>{onClose(id)}}className={style.closeButton}>X</button> </div>}
         <Link to={`/detail/${id}`} >
        <div className={style.titulo}><h3 className="card-name">{name}</h3></div>   
         <div className={style.texto}> { <h2>Id: {id}</h2> }
         <img className={style.imagen} src ={image} alt="" />
         {/* <h2>Name: {name}</h2>
         <h2>Status: {status}</h2>
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
         <h2>Origin: {origin}</h2> */}
         </div>
         </Link>

      </div>
   );
}

const mapDispatchToProps = (dispatch)=> {
   return {
      addFav: (character)=> dispatch(addFav(character)), 
      removeFav: (id)=> dispatch(removeFav(id))
   }
};

const mapStateToProps =(state)=>{
   return{
      myFavorites: state.myFavorites
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(Card)