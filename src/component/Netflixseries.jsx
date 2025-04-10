// const Netflixseries = () => {
//   const name="Avengers";
//   // const rating=8.5; 
//   const age=20;
//   const sumerry="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam rerum velit repudiandae, consectetur ratione fuga!"
//   // function
//   const returnGenre=()=>{
//     const genere="Horror";
//     return genere
//   }
//   return (
//     <div>
//       <div>
//         <img src="restaurants.jpg" alt="restarants" width="40%" height="40%" />
//       </div>
//       <h2>Name:{name} </h2>
//       <h3>Rating:{18/3+3.2}</h3>
//       <p><strong>Here is summery: </strong>{sumerry}</p>
//       <p>Genere :{returnGenre()}</p>
//       {/* function call */}
//       {(age<18 ?<button style={{backgroundColor:"red", padding:"15px",filter: 'blur(2px)'}}>Watch</button>: <button style={{backgroundColor:"green", padding:"15px"}}>Watch</button> )}

//     </div>
//   )
// } 
// // defaulut export
// export default Netflixseries; 

import Netflix from "../Api/Netflix.json";
// import styled from 'styled-components' 
import "../../public/style/style.css";
import  styles from "./Netflix.module.css";
import { Cart } from "./Cart";
const Netflixseries = () => {
  return (
    <>  
      <div className={styles.main_container}>
        {Netflix.map((watch) => { 
          return <Cart key={watch.url} data={watch} />;
        })}
      </div>

      {/* <div className="card">
            <div className="img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoFRQjM-wM_nXMA03AGDXgJK3VeX7vtD3ctA&s" alt="" />
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est molestiae voluptates consequatur, provident reprehenderit sunt.</p>
            </div>
        </div>
        <div className="card">
            <div className="img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoFRQjM-wM_nXMA03AGDXgJK3VeX7vtD3ctA&s" alt="" />
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est molestiae voluptates consequatur, provident reprehenderit sunt.</p>
            </div>
        </div>
        <div className="card">
            <div className="img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoFRQjM-wM_nXMA03AGDXgJK3VeX7vtD3ctA&s" alt="" />
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est molestiae voluptates consequatur, provident reprehenderit sunt.</p>
            </div>
        </div>
        <div className="card">
            <div className="img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoFRQjM-wM_nXMA03AGDXgJK3VeX7vtD3ctA&s" alt="" />
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est molestiae voluptates consequatur, provident reprehenderit sunt.</p>
            </div>
        </div>
        <div className="card">
            <div className="img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoFRQjM-wM_nXMA03AGDXgJK3VeX7vtD3ctA&s" alt="" />
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est molestiae voluptates consequatur, provident reprehenderit sunt.</p>
            </div>
        </div> */}
    </>
  );
};

export default Netflixseries;

// named export
export const Header = () => {
  return <p>This is Header</p>;
};
export const Footer = () => {
  return <p>This is footer</p>;
};

// named export
