"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type ArticleCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  href: string;
  date?: string;
};

export function ArticleCard({ title, description, imageSrc, imageAlt, href, date }: ArticleCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // 检查src是否为外部URL
  const isExternal = imageSrc.startsWith('http');
  
  return (
    <Link href={href} className="block group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 group-hover:shadow-xl">
        <div className="relative h-40 w-full overflow-hidden bg-gray-100">
          {isExternal ? (
            // 外部图片使用img标签
            <img
              src={imageSrc}
              alt={imageAlt || title}
              className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setIsLoaded(true)}
            />
          ) : (
            // 本地图片使用Next.js的Image组件
            <Image
              src={imageSrc}
              alt={imageAlt || title}
              fill
              className={`object-cover transition-transform duration-300 group-hover:scale-105 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onLoad={() => setIsLoaded(true)}
            />
          )}
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>
            </div>
          )}
        </div>
        <div className="p-3">
          {date && <p className="text-xs text-gray-500 mb-1">{date}</p>}
          <h3 className="text-lg font-bold text-blue-600 mb-1 group-hover:text-blue-700">{title}</h3>
          <p className="text-sm text-gray-700 line-clamp-2">{description}</p>
        </div>
      </div>
    </Link>
  );
}