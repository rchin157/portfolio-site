import React from 'react';
import MechsGame from "../MechsGame/GameManager"

export default function Project() {
    // fetch list of top scores, use a callback to keep scores live?
    let topten = [];
    return (
        <div className="home">
            <div className="container">
                <div className="mt-4">
                    <MechsGame />
                </div>
                <div>
                    <h1 className="mt-5">Mech Game</h1>
                    <h3 className="text-muted">Javascript/React</h3>
                    <p>
                        This minigame was created due to my enjoyment of mmo boss fights where the players must
                        complete a series of "mechanics" while also casting abilities to succeed.
                    </p>
                    <h2>Instructions</h2>
                    <p>
                        Upon pressing either cast or shield the player (green dot) will appear in a random
                        quadrant. After your character has appeared you may move to a different quadrant by
                        clicking in said quadrant. Allowing cast or shield to complete, as shown by the bars
                        above the buttons, will contribute to your score or give a barrier respectively. A
                        barrier will mitigate a single instance of damage before breaking. Without a barrier
                        the player will die upon taking damage. Damage can only be recieved from mechanics, 
                        which are indicated both by a large cast bar at the top of the play area as well as 
                        highlighted areas where damage will occur.
                    </p>
                    <h2>Top Scores</h2>
                        {topten.map((scoreinfo) => (
                            <div key={scoreinfo.time} className="row mt-2">
                                <h3 className="col">{scoreinfo.nick}</h3>
                                <h3 className="col">{scoreinfo.score}</h3>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}