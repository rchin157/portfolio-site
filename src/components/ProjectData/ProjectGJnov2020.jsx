import React from "react";

import headerimg from "../../data/ProjectMedia/Gamejam-nov-2020/gamejam-nov-2020.png";

// this is the project page for the gamejam-nov-2020
export default function Project() {
    return (
        <div className="home">
            <div className="container">
                <div className="mt-4">
                    <img className="img-fluid mx-auto d-block" src={headerimg} alt="Screenshot from the project" />
                </div>
                <h1 className="mt-5">Game Jam Project (Nov 2020)</h1>
                <h3 className="text-muted">Godot</h3>
                <p>
                    The game itself is a procedurally generated sidescrolling survival game with the option to play online multiplayer.
                    It was created as part of a locally hosted 48 hour game jam event. The team consisted of myself and one other in charge
                    of programming while the third member contributed art and sound. Godot, a small game engine software with its own scripting
                    language has been the preferred toolset for the majority of the game jams I've participated in due to its very quick time
                    to setup and start iterating. The time limited nature of these events usually lends itself to short games since long
                    handcrafted content is infeasible, with the alternative being procedural generation. As mentioned before, our team went with the latter
                    with the desire to provide a longer experience.
                </p>
                <p>
                    Truth be told, 48 hours is not a long time to plan, iterate, and complete a game or any project really, especially with a small
                    team where members also have other obligations such as part time work. As a result, in events like these time management
                    is particularly critical. Crucial features needed to be completed first with anything deemed optional being done
                    either later or scrapped when time did not permit. As an example this game had uprade collectables in the planning stage
                    while the final version does not.
                </p>
                <p>
                    Due to the peer to peer, serverless design of the multiplayer aspect as well as the procedural nature of the levels
                    maintaining state across clients had some challenges. Low data transfer was desirable, however level synchronicity had to be
                    maintained along with player and other entity information. Level sync was solved easily enough by aligning random seeds at the
                    start of play, but entities that moved around on their own proved more challenging. Due to time constraints the random movement
                    paths used previously had to be discarded in favour of fixed predetermined paths to ensure all clients stayed consistent.
                </p>
                <p>
                    This project, including its implementation, can be found
                    <a href="https://github.com/rchin157/gamejam-Nov-2021" target="_blank" rel="noopener noreferrer"> here</a>.
                </p>
            </div>
        </div>
    );
}