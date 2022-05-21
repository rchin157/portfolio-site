import React, { useState, useEffect, useRef, useCallback } from "react";
import { ReactComponent as HandleIcon } from "./res/handle.svg";
import "./util.css"

export default function ComparisonSlider({topImg, botImg,}) {
    const [isSliding, setIsSliding] = useState(false);
    const topImgRef = useRef();
    const handleRef = useRef();

    const setPositioning = useCallback((x) => {
        const {left, width } = topImgRef.current.getBoundingClientRect();
        const handleWidth = handleRef.current.offsetWidth;

        if ((x >= left) && (x <= width + left - handleWidth)) {
            handleRef.current.style.left = `${(x - left) / width * 100}%`;
            topImgRef.current.style.clipPath =
                `inset(0 ${100 - (x - left) / width * 100}% 0 0)`;
        }
    }, []);

    const handleSlide = useCallback((e) => {
        if (e.clientX) {
            setPositioning(e.clientX);
        } else if (e.touches[0] && e.touches[0].clientX) {
            setPositioning(e.touches[0].clientX);
        }
    }, [setPositioning]);

    const handleSlideEnd = useCallback(() => {
        setIsSliding(false);
        window.removeEventListener('mousemove', handleSlide);
        window.removeEventListener('touchmove', handleSlide);
        window.removeEventListener('mouseup', handleSlideEnd);
        window.removeEventListener('touchend', handleSlideEnd);
    }, [handleSlide]);

    useEffect(() => {
        const { left, width } = topImgRef.current.getBoundingClientRect();
        const handleWidth = handleRef.current.offsetWidth;

        setPositioning((width / 2 + left) - (handleWidth / 2));
    }, [setPositioning]);

    useEffect(() => {
        if (isSliding) {
            window.addEventListener('mousemove', handleSlide);
            window.addEventListener('touchmove', handleSlide);
            window.addEventListener('mouseup', handleSlideEnd);
            window.addEventListener('touchend', handleSlideEnd);
        }

        return () => {
            window.removeEventListener('mousemove', handleSlide);
            window.removeEventListener('touchmove', handleSlide);
            window.removeEventListener('mouseup', handleSlideEnd);
            window.removeEventListener('touchend', handleSlideEnd);
        }
    }, [isSliding, handleSlide, handleSlideEnd]);

    return (
        <div className="comp-slider">
            <div
                ref={handleRef}
                className="handle"
                onMouseDown={() => setIsSliding(true)}
                onTouchStart={() => setIsSliding(true)}
            >
                <HandleIcon />
            </div>
            <div ref={topImgRef} className="comp-item top">
                <img
                    draggable="false"
                    src={topImg.src}
                    alt={topImg.alt}
                />
            </div>
            <div className="comp-item">
                <img
                    draggable="false"
                    src={botImg.src}
                    alt={botImg.alt}
                />
            </div>
        </div>
    );
}