import React from "react";
import Event from './Event';
import '../App.css';

const Cards = () => {
  return (
    <div className="Cards">
      <div className="VillageSection">
        <h2 className="VillageTitle">Villages</h2>
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
      <div className="NinjaSection">
        <h2 className="NinjaTitle">Ninjas</h2>
      <Event
        title="Killer B"
        description="From the Village Hidden in the Clouds. The jinchuriki of the Eight-Tails, famed for his rap skills and mastery of the Lightning Release."
        src="src\assets\killerB.jpg" 
        link="https://naruto.fandom.com/wiki/Killer_B"
      />
      <Event
        title="Naruto Uzumaki"
        description="From the Village Hidden in the Leaves. The unpredictable knucklehead ninja who seeks acknowledgment and dreams of becoming the Hokage."
        src="src\assets\naruto.jpg" 
        link="https://naruto.fandom.com/wiki/Naruto_Uzumaki"
      />
      <Event
      title="Zabuza Momochi"
      description="From the Village Hidden in the Mist. The ruthless rogue ninja known as the Demon of the Hidden Mist, infamous for his mastery of the Silent Killing technique and fierce loyalty to his ideals."
      src="src\assets\zabuza.jpg" 
      link="https://naruto.fandom.com/wiki/Zabuza_Momochi"
      />
      <Event
      title="Onoki: Third Tsuchikage"
      description="From the Village Hidden in the Rocks. The third Tsuchikage known for her unwavering strength and determination in leading the Hidden Stone Village."
      src="src\assets\onoki.jpg" 
      link="https://naruto.fandom.com/wiki/Ōnoki"
      />
      <Event
      title="Gaara"
      description="From the Village Hidden in the Sand. The former jinchuriki of the One-Tail, renowned for his sand manipulation abilities and journey towards redemption."
      src="src\assets\gaara.jpg" 
      link="https://naruto.fandom.com/wiki/Gaara"
      />
      </div>
    </div>
  );
};

export default Cards;