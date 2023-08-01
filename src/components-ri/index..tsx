import Button from "./Button";
import { useState } from "react";
import axios from "axios";
import './ri.css'
import Card from "./Card";

const RandomImage = () => {
    const [imageUrl, setImageUrl] = useState<string>("");

    const getRandomImage = async () => {
        try {
        const response = await axios.get("https://source.unsplash.com/1800x800/?japan");
        setImageUrl(response.request.responseURL);
        } catch (error) {
        console.error("Error fetching image:", error);
        }
    };

    return (
        <div className="app">
            <h1 className="title-ri">Random Image App</h1>
            <Button onClick={getRandomImage} />
            {imageUrl && <Card imageUrl={imageUrl} />}
                {/* <h2>🤓</h2> */}
        </div>
    );
};

export default RandomImage;