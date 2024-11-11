import "./Component2.css";
import { useState, useEffect } from "react";

export function Component2() {
    /**
     * Generates a random text string of a length between 8 and 64 characters.
     *
     * @returns {string} A randomly generated text string containing uppercase letters, lowercase letters, and digits.
     */
    function generateRandomText() {
        const minLength = 8;
        const maxLength = 64;
        const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;        
    }
    
    const [randomTexts, setRandomTexts] = useState([]);

    useEffect(() => {        
        const texts = Array.from({ length: 5 }, () => generateRandomText());
        setRandomTexts(texts);
    }, []);


    return (
        <div className="component2">
            <h1>Random Texts</h1>
            <div>
                {randomTexts.map((text, index) => (
                    <div key={index}>{index+1}. {text}</div>
                ))}
            </div>
        </div>
    );
}