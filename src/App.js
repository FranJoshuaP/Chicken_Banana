import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Grid from './grid';
const imageUrls = [
  'https://thumbs.dreamstime.com/b/bunch-bananas-6175887.jpg?w=768',
  'https://thumbs.dreamstime.com/z/full-body-brown-chicken-hen-standing-isolated-white-backgroun-background-use-farm-animals-livestock-theme-49741285.jpg?ct=jpeg',
  'https://thumbs.dreamstime.com/b/bunch-bananas-6175887.jpg?w=768',
  'https://thumbs.dreamstime.com/z/full-body-brown-chicken-hen-standing-isolated-white-backgroun-background-use-farm-animals-livestock-theme-49741285.jpg?ct=jpeg',
  'https://thumbs.dreamstime.com/b/bunch-bananas-6175887.jpg?w=768',
  'https://thumbs.dreamstime.com/z/full-body-brown-chicken-hen-standing-isolated-white-backgroun-background-use-farm-animals-livestock-theme-49741285.jpg?ct=jpeg',

];

function getRandomImage() {
  const index = Math.floor(Math.random() * imageUrls.length);
  return imageUrls[index];
}


function Welcome (props){
  return <h2>Welcome, {props.name}</h2>;
}


function Counter(){
  const[count, setCount]= useState(0);

  function handleClick(){
  setCount(count +1 );
  
  }


  return(
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}


function Tables(){
  <div class = "container">
  <div>1</div>
  <div>2</div>
  <div>3</div>  
  <div>4</div>
  <div>5</div>
  <div>6</div>  
  <div>7</div>
  <div>8</div>
  </div>

}

export default function App() {
  const gridBase = {
    cells: 6,
    rows: 6
  };

  const [grid, setGrid] = useState(gridBase);
 

  

  return (
    <div className="app">
      <Grid
        grid={grid}
        
        
      />
    </div>
  );
}


