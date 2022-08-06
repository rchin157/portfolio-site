import React, { useCallback, useEffect, useRef, useMemo, useState } from "react";
import { initializeApp } from "firebase/app";

import Mechs from "./Mechs";
import './mechs.css';

export default function Manager() {
    const canvasRef = useRef(null);

    const app = useMemo(() => {
        return initializeApp({
            apiKey: "AIzaSyCW6OsrnGr_ZOJIEMC3CxWFv895fChqcL0",
            authDomain: "portfolio-web-mechs-game.firebaseapp.com",
            projectId: "portfolio-web-mechs-game",
            storageBucket: "portfolio-web-mechs-game.appspot.com",
            messagingSenderId: "204533584499",
            appId: "1:204533584499:web:b5c227e8c0fb9fa9589006",
            measurementId: "G-2205CQFVRN",
          });
    }, []);

    let [sessionScores, setScores] = useState([]);
    let mechsGame = useMemo(() => {return new Mechs(app, setScores)}, [app]);
    const fillerRequested = mechsGame.fillerRequested.bind(mechsGame);
    const shieldRequested = mechsGame.shieldRequested.bind(mechsGame);

    const handleClick = useCallback((e) => {
        const { left, top } = e.target.getBoundingClientRect();
        mechsGame.handleClick(e.clientX - left, e.clientY - top);
    }, [mechsGame]);

    useEffect(() => {
        let canvas = canvasRef.current;
        let context = canvas.getContext('2d');

        let requestId;

        let isMobile = false;
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
            || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(navigator.userAgent.substr(0,4))) { 
            isMobile = true;
        }

        const resize = () => {
            canvas = canvasRef.current;
            context = canvas.getContext('2d');

            let ratio = getPixelRatio(context);
            let width = getComputedStyle(canvas)
                .getPropertyValue('width')
                .slice(0, -2);
            let height = getComputedStyle(canvas)
                .getPropertyValue('height')
                .slice(0, -2)
            
            canvas.width = width * ratio;
            canvas.height = height * ratio;
            mechsGame.handleResize(context, canvas);
        };

        const setup = () => {
            mechsGame.setup(canvas);
        };

        const draw = (timeStamp) => {
            context.clearRect(0, 0, canvas.width, canvas.height);
            mechsGame.draw(context, canvas, timeStamp);
            requestId = requestAnimationFrame(draw);
        };

        if (!isMobile) {
            window.addEventListener("resize", resize);
        }
        setup();
        resize();
        draw();
        return () => {
            cancelAnimationFrame(requestId);
            if(!isMobile) {
                window.removeEventListener("resize", resize);
            }
        };
    });

    return (
        <div className="row">
            <div className="col col-lg-9 me-lg-2">
                <div style={{position: "relative"}}>
                    <canvas id="game-manager" ref={canvasRef} style={{position: "relative"}}
                    onClick={handleClick} />
                </div>
                <div className="row my-2 justify-content-center">
                    <div className="col-5 d-grid">
                        <div onClick={fillerRequested} role="button" className="btn btn-danger btn-lg btn-block">Cast</div>
                    </div>
                    <div className="col-5 d-grid">
                        <div onClick={shieldRequested} role="button" className="btn btn-info btn-lg btn-block">Shield</div>
                    </div>
                </div>
            </div>
            <div className="col d-flex flex-column">
                <h3 className="text-center">Scores</h3>
                <div className="flex-fill">
                    {sessionScores.map((score) => {
                        return (
                            <div key={score.key} className="rounded shadow py-2 my-1 bg-info">
                                <h3 className="text-center">{score.score}</h3>
                            </div>
                        );
                    })}
                </div>
                <div className="position-relative my-1">
                    <div onClick={() => {}} role="button" className="btn btn-primary btn-lg btn-block position-relative bottom-0 start-50 translate-middle-x">Submit Scores</div>
                </div>
            </div>
        </div>
    );
}

function getPixelRatio(ctx) {
    var dpr = window.devicePixelRatio || 1;
    var bsr = ctx.backingStorePixelRatio ||
    ctx.webkitBackingStorePixelRatio ||
    ctx.mozBackingStorePixelRatio ||
    ctx.msBackingStorePixelRatio ||
    ctx.oBackingStorePixelRatio ||
    1;

    return dpr / bsr;
}