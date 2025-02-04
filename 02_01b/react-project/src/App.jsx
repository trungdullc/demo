import React from 'react';                                    // React.Fragment
import './App.css';
import chef from "./images/chef.jpg";

const people = "🕵️‍♂️";                                                            
const items = [
  "Macaroni and Cheese",
  "Pho",
  "Banh Mi"
];

function Header(props) {
  console.log(props);

  return (
    <header>
      <h1>🍅{props.name}'s Kitchen🍗</h1>
      <h2>{props.name} was here in {props.year}</h2>
    </header>
  );
}

function Footer({name, year}) {
  return (
    <footer>
      <h5>Copyright ⏰{year}⏱️ {name} LLC</h5>
    </footer>
  );
}

const dishObjectsList = items.map((dish, index) => ({
  id: index,
  title: dish
}));

// 2 ways to create fragments, this way need import react library
function Main({dishes}) {
  return (
    <React.Fragment>
      <main>
        <img src = {chef} height = {200} alt = "A photo of a smiling chef"/>
        <ul>
          { dishes.map((dish) => <li key = {dish.id} style = {{listStyleType: "none"}}>{dish.title}</li>)}
        </ul>
      </main>
    </React.Fragment>
  );
}

// Note: preferred way to create fragment, no need import any library
function App() {                                                                
  return (
    <>
      <Header name = "Du" year = {1337} />
      <h3>Hello {people}</h3>
      <Main dishes = {dishObjectsList} />
      <Footer name = "Du" year = {2025} />                                                 
    </>
  );
}

export default App;