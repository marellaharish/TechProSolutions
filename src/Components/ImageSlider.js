import React, { useRef } from 'react';
import project1 from '../Assets/Images/Snap1.png';
import project2 from '../Assets/Images/snap2.png';
import project3 from '../Assets/Images/SNAP3.png';
import project4 from '../Assets/Images/SNAP4.png';

const ImageSlider = () => {
    const trackRef = useRef(null);

    const handleOnDown = (e) => {
        trackRef.current.dataset.mouseDownAt = e.clientX;
    };

    const handleOnUp = () => {
        trackRef.current.dataset.mouseDownAt = '0';
        trackRef.current.dataset.prevPercentage = trackRef.current.dataset.percentage;
    };

    const handleOnMove = (e) => {
        if (trackRef.current.dataset.mouseDownAt === '0') return;

        const mouseDelta = parseFloat(trackRef.current.dataset.mouseDownAt) - e.clientX;
        const maxDelta = window.innerWidth / 2;

        const percentage = (mouseDelta / maxDelta) * -100;
        const nextPercentageUnconstrained =
            parseFloat(trackRef.current.dataset.prevPercentage) + percentage;
        const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

        trackRef.current.dataset.percentage = nextPercentage;

        trackRef.current.animate(
            { transform: `translate(${nextPercentage}%, -50%)` },
            { duration: 1200, fill: 'forwards' }
        );

        const images = trackRef.current.getElementsByClassName('image');
        for (const image of images) {
            image.animate(
                { objectPosition: `${100 + nextPercentage}% center` },
                { duration: 1200, fill: 'forwards' }
            );
        }
    };

    return (
        <div
            id="image-track"
            ref={trackRef}
            data-mouse-down-at="0"
            data-prev-percentage="0"
            onMouseDown={handleOnDown}
            onTouchStart={(e) => handleOnDown(e.touches[0])}
            onMouseUp={handleOnUp}
            onTouchEnd={(e) => handleOnUp(e.touches[0])}
            onMouseMove={handleOnMove}
            onTouchMove={(e) => handleOnMove(e.touches[0])}
        >
            <img
                className="image"
                src={project1}
                draggable="false"
            />
            <img
                className="image"
                src={project2}
                draggable="false"
            />
            <img
                className="image"
                src={project3}
                draggable="false"
            />
            <img
                className="image"
                src={project4}
            />
            <img
                className="image"
                src="https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                draggable="false"
            />
            {/* Add other images here */}
        </div>
    );
};

export default ImageSlider;
