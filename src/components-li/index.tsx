import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Button from "./Button";

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CardImage = styled.img`
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  border-radius: 20px;
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out; /* Add transitions for both transform and box-shadow */

  &:hover {
    transform: translateY(-6px); /* Move the card 6px upward when hovered */
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }
`;


const ListImage = () => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  const getRandomImages = async () => {
    try {
      const responses = await Promise.all([
        axios.get("https://source.unsplash.com/1800x800/?japan"),
        axios.get("https://source.unsplash.com/1800x800/?nature"),
        axios.get("https://source.unsplash.com/1800x800/?travel"),
        axios.get("https://source.unsplash.com/1800x800/?japan"),
        axios.get("https://source.unsplash.com/1800x800/?nature"),
        axios.get("https://source.unsplash.com/1800x800/?travel"),
      ]);

      const urls = responses.map((response) => response.request.responseURL);
      setImageUrls(urls);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  return (
    <div className="app">
      <h1 className="title-ri">Random Images App</h1>
      <Button onClick={getRandomImages} />
      <CardGrid>
        {imageUrls.map((imageUrl, index) => (
          <CardImage key={index} src={imageUrl} alt={`Image ${index}`} />
        ))}
      </CardGrid>
    </div>
  );
};

export default ListImage;
