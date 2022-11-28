/* eslint-disable @next/next/no-img-element */
import React from "react";

const Character = ({ name, image, likes }) => {
    return (
        <div className=" w-96 bg-red-800 rounded p-1">
            <img src={image} alt={name} className="w-full h-72 object-cover object-top "/>
            <div className="flex items-center justify-between">
                <p className="text-white text-xl">{name}</p>
                <span className="text-white">{likes} 👍</span>
            </div>
        </div>
    );
}

export default Character;