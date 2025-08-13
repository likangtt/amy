"use client";

import Image from "next/image";
import { useState } from "react";

type GuideImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
};

export function GuideImage({ src, alt, width = 800, height = 500, caption }: GuideImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // 检查src是否为外部URL
  const isExternal = src.startsWith('http');
  
  return (
    <figure className="my-8">
      <div className="overflow-hidden rounded-lg shadow-lg bg-gray-100">
        {isExternal ? (
          // 外部图片使用img标签
          <img
            src={src}
            alt={alt}
            className={`w-full h-auto transition-opacity duration-500 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setIsLoaded(true)}
          />
        ) : (
          // 本地图片使用Next.js的Image组件
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={`w-full h-auto transition-opacity duration-500 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
          />
        )}
        {!isLoaded && (
          <div className="flex items-center justify-center py-20">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="text-center text-sm text-gray-600 mt-2 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
