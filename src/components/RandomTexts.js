import React from "react";

const RandomTexts = ({ randomTexts }) => {
    return (
        <div className="component2">
            <h1>Random Texts</h1>
            <ul>
                {randomTexts.map((text, index) => (
                    <li key={index}>{text}</li>
                ))}
            </ul>
        </div>
    );
};

export default RandomTexts;