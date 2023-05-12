import style from './Card.module.css'
import { Link } from 'react-router-dom';

const Card = ({id, name, status, species, gender, origin, image, onClose}) => {

   return (
      <div className= {style.contenedor}>
         <Link to={`/detail/${id}`} >
        <div className={style.titulo}><h3 className="card-name">{name}</h3></div> 
         { <div className={style.buttonsContainer}>
         <button onClick={()=>{onClose(id)}}className={style.closeButton}>X</button> </div>}
          
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

export default Card