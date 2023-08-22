import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CatCard({ image, title, type }) {
  return (
    <div className="hover:-translate-y-4 cat-card transition-all duration-300 rounded-lg overflow-hidden relative">
      <div>
        <Image
          src={`https:${image.fields.file.url}`}
          width={image.fields.file.details.image.width}
          height={image.fields.file.details.image.height}
          alt="category"
          className="object-fill"
        />
      </div>
      <div className="absolute flex flex-col justify-evenly items-center -bottom-[40%] info left-0 w-full h-2/5 bg-gray-200/80 transition-all duration-300">
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold">{title}</h2>
        <Link href={`/${type}`}>
          <button className="text-xl font-bold rounded-lg bg-primary p-2">
            عرض المزيد
          </button>
        </Link>
      </div>
    </div>
  );
}
