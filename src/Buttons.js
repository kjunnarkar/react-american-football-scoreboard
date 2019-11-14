import React from "react";

const Buttons = (props) => {

    console.log(props);

    return (
        <section className="buttons">
            <div className="homeButtons">
                {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
                <button className="homeButtons__touchdown" onClick = {() => props.setHomeScore(props.homeScore + 7)}>Home Touchdown</button>
                <button className="homeButtons__fieldGoal" onClick = {() => props.setHomeScore(props.homeScore + 3)}>Home Field Goal</button>
                <button className="homeButtons_touchdown" onClick = {() => props.setYards(props.yards + 1)}>Add Yards</button>
                <button className="homeButtons_fieldGoal" onClick = {() => props.setBall(props.ball - 1)}>Move Ball</button>
            </div>
            <div className="awayButtons">
                <button className="awayButtons__touchdown" onClick = {() => props.setAwayScore(props.awayScore + 7)}>Away Touchdown</button>
                <button className="awayButtons__fieldGoal" onClick = {() => props.setAwayScore(props.awayScore + 3)}>Away Field Goal</button>
                <button className="awayButtons_touchdown" onClick = {() => props.setYards(props.yards - 1)}>Subtract Yards</button>    
            </div>
        </section>
    );
};

export default Buttons;
