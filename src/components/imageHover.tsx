import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ImageWithHoverProps {
    preview: string;
    gif: string;
    alt?: string;
    className?: string;
    fit?: "cover" | "contain";
    frameClassName?: string;
  }

export function ImageWithHover({ preview, gif, alt = "Prévia do projeto", className, fit = "cover", frameClassName }: ImageWithHoverProps) {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <div
        className={cn("w-full rounded-xl overflow-hidden ring-1 ring-outline-variant/40 bg-surface-3/50", className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={cn("relative w-full", frameClassName ?? "aspect-video")}>
          <Image
            src={isHovered ? gif : preview}
            alt={alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={cn(
              fit === "contain" ? "object-contain p-3" : "object-cover",
              "transition-transform duration-300",
              isHovered ? "scale-[1.01]" : "scale-100"
            )}
          />
        </div>
      </div>
    );
  }
  
