import React from "react";
import Event from './Event';
import '../App.css'; // Corrected import for App.css

const Cards = () => {
  return (
    <div className="Cards">
      <Event
        title="Kumogakure"
        description="The Village Hidden in the Clouds."
        src="src\assets\cloudVillage.png" 
        link="https://naruto.fandom.com/wiki/Kumogakure"
      />
      <Event
        title="Konohagakure"
        description="The Village Hidden in the Leaves."
        src="src\assets\leafVillage.png" 
        link="https://naruto.fandom.com/wiki/Konohagakure"
      />
      <Event
      title="Kirigakure"
      description="The Village Hidden in the Mist."
      src="src\assets\mistVillage.jpg" 
      link="https://naruto.fandom.com/wiki/Kirigakure"
      />
      <Event
      title="Iwagakure"
      description="The Village Hidden in the Rocks."
      src="src\assets\rockVillage.png" 
      link="hhttps://naruto.fandom.com/wiki/Iwagakure"
      />
      <Event
      title="Sunagakure"
      description="The Village Hidden in the Sand."
      src="src\assets\sandVillage.png" 
      link="https://naruto.fandom.com/wiki/Sunagakure"
      />
    </div>
  );
};

export default Cards;
