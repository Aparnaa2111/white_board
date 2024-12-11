// Menu.js

import React, { useState } from "react";
import "../App.css";

const Menu = ({ setLineColor, setLineWidth,
    setLineOpacity }) => {
        const [isEraserActive, setIsEraserActive] = useState(false); // Tracks eraser state
        const [prevLineColor, setPrevLineColor] = useState("#000000"); // To restore brush color
    
        const handleEraserToggle = () => {
            if (isEraserActive) {
                // Switch back to brush mode
                setLineColor(prevLineColor); // Restore the previous brush color
            } else {
                // Switch to eraser mode
                setPrevLineColor((currentColor) => currentColor); // Save the current color
                setLineColor("#FFFFFF"); // Assuming canvas background is white (use canvas bg color)
            }
            setIsEraserActive(!isEraserActive); // Toggle the eraser state
        };
    return (
        <div className="Menu">
            <label>Brush Color</label>
            <input
                type="color"
                onChange={(e) => {
                    setLineColor(e.target.value);
                }}
            />
            <label>Brush Width</label>
            <input
                type="range"
                min="3"
                max="20"
                onChange={(e) => {
                    setLineWidth(e.target.value);
                }}
            />
            <label>Brush Opacity</label>
            <input
                type="range"
                min="1"
                max="100"
                onChange={(e) => {
                    setLineOpacity(e.target.value / 100);
                }}
            />
            <button onClick={handleEraserToggle}>
                {isEraserActive ? "Switch to Brush" : "Eraser"} {/* Toggle button text */}
            </button>
        </div>
    );
};

export default Menu;
