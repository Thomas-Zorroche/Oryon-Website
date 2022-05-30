import './App.css';

import json from "./cards.json"

import Graph from "./img/graph.jpg"

import React, { useState } from 'react';

import { Card } from './component/Card';

function App() {

  const [cards, setCards] = useState(json.cards)  

  return (
    <div className="App">

      <header className="App-header"> <p>Oryon - GLRenderer </p> </header>

      <div className="CardContainer">
        {cards.map(card => 
            <Card 
              key={card.id}
              id={card.id} 
              image={card.image}
              title={card.title}
              desc={card.desc}
              link={card.link}
            />
          )}
      </div>

      <div className="GraphContainer">
        <p>Forward and Deferred Rendering</p>
        <img src={Graph} alt="graph"/>
      </div>

      <div className="Footer">Thomas Zorroché - 2022</div>

    </div>
  );
}

export default App;
