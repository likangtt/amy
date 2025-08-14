"use client";

import Image from "next/image";
import { useState } from "react";
import cn from "classnames";

interface GuideImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  caption?: string;
  lazyBoundary?: string;
}

export function GuideImage({
  src,
  alt,
  width = 800,
  height = 500,
  className,
  priority = false,
  caption,
  lazyBoundary = "200px",
}: GuideImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <figure className={cn("overflow-hidden", className)}>
      <div className={cn(
        "relative overflow-hidden bg-gray-100 dark:bg-gray-800",
        isLoading ? "animate-pulse" : ""
      )}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={cn(
            "transition-opacity duration-300 ease-in-out rounded-lg",
            isLoading ? "opacity-0" : "opacity-100"
          )}
          priority={priority}
          onLoad={() => setIsLoading(false)}
          loading={priority ? "eager" : "lazy"}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 800px"
          lazyBoundary={lazyBoundary}
        />
      </div>
      {caption && (
        <figcaption className="text-sm text-center text-gray-500 mt-2 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}