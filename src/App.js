import React from 'react';
import './App.css';
import tas1 from './assets/bag_1.png';
import tas2 from './assets/bag_2.png';
import tas3 from './assets/bag_3.png';
import brand from './assets/brand.png';
import story from './assets/our_story.png';
import Button from "./assets/components/Button";
import Product from "./assets/components/Product";
import Tegel from "./assets/components/Tegel";


function App() {
  return (
      <>
      <h1>Handbags & Purses</h1>
          <nav>
          <Button isDisabled={false} clickHandler={() => console.log("to the collection")} > To the collection </Button>
          <Button isDisabled={false} clickHandler={() => console.log("Shop all bags")} > Shop all bags </Button>
          <Button isDisabled={true} clickHandler={() => console.log("pre-order")} > pre-order </Button>
          </nav>
<main>
          <Product productImage={tas1} price={120} redlabel="Best Seller" naamTas="Gukki" title="Gukki tas"/>
          <Product productImage={tas2} price={150} redlabel="Best Seller" naamTas="Pukki" title="Pukki tas"/>
          <Product productImage={tas3} price={212} redlabel="Best Seller" naamTas="Jukki" title="Jukki tas"/>

</main>

     <footer>
         <Tegel tekst="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consectetur cumque deserunt, est, expedita fugit hic illo iste minima perferendis quam, quis quisquam sapiente soluta tempora tenetur velit? Architecto beatae cum debitis eaque earum necessitatibus nemo quibusdam quos totam voluptate." titel="Designer"> </Tegel>
         <Tegel img={story}> </Tegel>
         <Tegel img={brand}> </Tegel>
         <Tegel tekst="Lorem Ipsem de bibsum. Lorem Ipsem de bibsum. Lorem Ipsem de bibsum. Lorem Ipsem de bibsum.  " titel="Haute Fashion "> </Tegel>
     </footer>

      </>
  );
}

export default App;



