import React, { useMemo, useState } from "react";
import MechsGame from "../MechsGame/GameManager"
import { initializeApp } from "firebase/app";
import { getFirestore, query, collection, onSnapshot, orderBy, limit } from "firebase/firestore";

import { fbauth } from "../../data/secrets";

// this is the project page for the mechs game, the game is rendered on this page
export default function Project() {
    // setup firebase
    const app = useMemo(() => {
        return initializeApp(fbauth);
    }, []);

    // setup firestore variables
    const [topten, setTopten] = useState([]);
    const db = useMemo(() => {return getFirestore(app)}, [app]);
    const col = useMemo(() => {return collection(db, "scores")}, [db]);
    const scoreQuery = useMemo(() => {return query(col, orderBy("score", "desc"), limit(10))}, [col]);
    
    // create a listener for the firestore collection
    useMemo(() => {
        onSnapshot(scoreQuery, (snapshot) => {
            setTopten(snapshot.docs.map((doc) => doc.data()));
        });
    }, [scoreQuery])
    
    // fetch list of top scores, use a callback to keep scores live?
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
                    <p>
                        During this project I learned a lot about React hooks and working with functional React in general.
                        This is also the only project here that interacts with a simple database to store scores. The asynchronous
                        aspect of this was a new experience.
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
                    <h2 className="text-center">Top Scores</h2>
                        {topten.map((scoreinfo) => (
                            <div key={scoreinfo.key} className="row my-2">
                                <h3 className="col text-center">{scoreinfo.nick}</h3>
                                <h3 className="col text-center">{scoreinfo.score}</h3>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}