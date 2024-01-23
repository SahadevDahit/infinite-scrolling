import React from "react";
import Image from "next/image";
import { data } from "@/types/index";

const Card: React.FC<data> = ({ id, name, tagline, image_url }) => {
  return (
    <div className="container max-w-sm rounded overflow-hidden shadow-lg bg-white mx-auto">
      <Image
        src={image_url}
        alt={name}
        width={150}
        height={250}
        objectFit="cover"
        className="h-64 mx-auto pt-2 "
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{tagline}</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          ID: {id}
        </span>
      </div>
    </div>
  );
};

export default Card;
