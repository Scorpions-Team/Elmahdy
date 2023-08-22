import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ItemCard({ image, title, price, description }) {
  return (
    <div className="hover:-translate-y-4 cat-card transition-all duration-300 rounded-lg overflow-hidden relative">
      <div>
        <Image
          src={`https:${image.fields.file.url}`}
          width={image.fields.file.details.image.width}
          height={image.fields.file.details.image.height}
          alt="category"
          className=""
        />
      </div>
      <div className="absolute px-4 flex flex-col justify-evenly items-center -bottom-[40%] info left-0 w-full h-2/5 bg-gray-200/80 transition-all duration-300">
        <h2 className="text-xl md:text-4xl xl:text-6xl font-bold">{title}</h2>
        {description && (
          <p className="text-sm md:text-lg xl:text-2xl font-bold">
            {description}
          </p>
        )}
        <p className="text-sm md:text-lg xl:text-2xl font-bold w-fit p-2 bg-primary rounded-lg">
          السعر {price} جنيه
        </p>
      </div>
    </div>
  );
}
