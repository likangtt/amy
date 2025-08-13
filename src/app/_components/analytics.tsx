"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const GA_TRACKING_ID = "UA-XXXXXXXXX-X"; // 替换为您的Google Analytics跟踪ID

// 添加全局类型声明
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // 只在客户端执行
    let reactGALoaded = false;
    
    const loadGA = () => {
      if (typeof window !== "undefined") {
        try {
          // 动态加载Google Analytics脚本
          const script = document.createElement('script');
          script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
          script.async = true;
          document.head.appendChild(script);
          
          // 初始化Google Analytics
          (window as any).dataLayer = (window as any).dataLayer || [];
          function gtag(...args: any[]) {
            (window as any).dataLayer.push(arguments);
          }
          (window as any).gtag = gtag;
          gtag('js', new Date());
          gtag('config', GA_TRACKING_ID);
          
          reactGALoaded = true;
        } catch (e) {
          console.error("Google Analytics初始化失败:", e);
        }
      }
    };
    
    loadGA();
    
    return () => {
      // 清理函数
      if (reactGALoaded && typeof window !== "undefined") {
        // 移除GA脚本（如果需要）
      }
    };
  }, []);

  useEffect(() => {
    // 只在客户端执行，且确保GA已加载
    if (typeof window !== "undefined" && window.gtag) {
      try {
        // 当路径或搜索参数变化时发送页面浏览事件
        const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");
        // @ts-ignore
        window.gtag('config', GA_TRACKING_ID, {
          page_path: url,
        });
      } catch (e) {
        console.error("Google Analytics页面浏览事件发送失败:", e);
      }
    }
  }, [pathname, searchParams]);

  return null; // 这个组件不渲染任何内容
}
