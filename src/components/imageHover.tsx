import Image from "next/image";
import { useState } from "react";

interface ImageWithHoverProps {
    preview: string;
    gif: string;
  }

export function ImageWithHover({ preview, gif }: ImageWithHoverProps) {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <div
        className="w-full rounded-md overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={isHovered ? gif : preview}
          alt="Projeto preview"
          className="w-full md:h-[1050px]  object-cover transition-opacity duration-300"
          width={1100}
          height={1100}
        />
      </div>
    );
  }
  