"use client";

import { useEffect, useRef } from "react";
import cn from "classnames";

type AdUnitProps = {
  adClient: string;
  adSlot: string;
  adFormat?: "auto" | "rectangle" | "horizontal" | "vertical";
  className?: string;
  style?: React.CSSProperties;
  responsive?: boolean;
};

export function AdUnit({
  adClient,
  adSlot,
  adFormat = "auto",
  className,
  style,
  responsive = true,
}: AdUnitProps) {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 确保只在客户端执行
    if (typeof window !== "undefined") {
      try {
        // 动态加载Google AdSense脚本
        const script = document.createElement("script");
        script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
        script.async = true;
        script.crossOrigin = "anonymous";
        document.head.appendChild(script);

        // 等待AdSense脚本加载完成
        script.onload = () => {
          // 确保adsbygoogle已定义
          if (window.adsbygoogle) {
            // 推送广告
            (window.adsbygoogle = window.adsbygoogle || []).push({});
          }
        };
      } catch (error) {
        console.error("AdSense加载失败:", error);
      }
    }
  }, []);

  return (
    <div className={cn("ad-container", className)} style={style}>
      <ins
        className="adsbygoogle"
        style={{
          display: "block",
          ...(responsive ? { width: "100%" } : {}),
        }}
        data-ad-client={adClient}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={responsive ? "true" : "false"}
        ref={adRef}
      />
      <div className="text-xs text-gray-400 text-center mt-1">广告</div>
    </div>
  );
}

// 添加全局类型声明
declare global {
  interface Window {
    adsbygoogle: any[];
  }
}