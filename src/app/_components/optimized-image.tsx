"use client";

import Image from "next/image";
import { useState } from "react";
import cn from "classnames";

type OptimizedImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
  onClick?: () => void;
};

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes = "100vw",
  fill = false,
  onClick,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className={cn(
        "overflow-hidden relative",
        fill ? "w-full h-full" : "",
        className
      )}
      onClick={onClick}
    >
      <Image
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        className={cn(
          "transition-opacity duration-300 ease-in-out",
          isLoading ? "opacity-0" : "opacity-100",
          fill ? "object-cover" : ""
        )}
        sizes={sizes}
        priority={priority}
        fill={fill}
        onLoad={() => setIsLoading(false)}
        loading={priority ? "eager" : "lazy"}
      />
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse" />
      )}
    </div>
  );
}