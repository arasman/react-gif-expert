import { useState, useEffect } from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    const {images, isLoading} = useFetchGifs(category);
    return (
        <>
        <h3>{category}</h3>    
        {
            (isLoading && (<h1>Loading...</h1>))
        }
        <div className="card-grid">
            {
                images.map((image) => (
                    <GifItem 
                    key={image.id} 
                    {... image}
                    />
                ))
            }            
        </div>        
        </>
    );
};
