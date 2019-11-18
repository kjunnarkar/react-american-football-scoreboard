//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import Buttons from "./Buttons";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [yards, setYards] = useState(1);
  const [ball, setBall] = useState(50);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Chargers</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Rams</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow
          yards = {yards}
          ball = {ball}
        />
      </section>
        <Buttons 
          homeScore = {homeScore}
          setHomeScore = {setHomeScore}
          awayScore = {awayScore}
          setAwayScore = {setAwayScore}
          yards = {yards}
          setYards = {setYards}
          ball = {ball}
          setBall = {setBall}
        />
    </div>
  );
}

export default App;
