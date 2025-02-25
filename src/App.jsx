import React from "react";
import Header from "./Componenets/Header/Header";
import Footer from "./Componenets/Footer/Footer";
import Filtre from "./Componenets/Filtre/Filtre";
import Text from "./Componenets/Text/Text";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { productData, responsive } from "./data";
import Product from "./Product";
import Piece from "./Componenets/Piece/Piece";
import './App.css';
//import PresentationProduit from './Componenets/PresentationProduit/PresentationProduit';

function App() {
  const product = productData.map((item) => (
    <Product name={item.MeubleNom} img={item.Photo[0].photo1} prix={item.Prix} id={item.id} />
  ));
  //A FAIRE: ajouter le composant SALLE DE BAIN. A vous de le faire comme vous voulez.
  // Le composant SALLE DE BAIN dois être placé dans cette dive en ordre d'apparition sur la page principale
  return (
    <div className="m-5">
      <Header />
      <Text />
      <Filtre />
      <div className="App">
        <h1
          className="new uppercase text-4xl mb-5"
          style={{ fontFamily: "Roslindale" }}
        >
          Nouveauté
        </h1>
        <Carousel
          containerClass="carousel-container"
          itemClass="carousel-item"
          responsive={responsive}
        >
          {product}
        </Carousel>
      </div>
      <Piece categorie="salon" side="left" titre="titre" image="image" />
      <Piece categorie="chambre" side="right" titre="titre" image="image" />
      <Piece categorie="cuisine" side="left" titre="titre" image="image" />
      <Piece categorie="salle de bain" side="right" titre="titre" image="image" />
      <Footer />
    </div>
  );
}

export default App;
