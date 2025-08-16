"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function MobileBackButton() {
  const router = useRouter();
  const pathname = usePathname();
  const [isHomePage, setIsHomePage] = useState(true);
  
  useEffect(() => {
    // 检查当前是否在首页
    setIsHomePage(pathname === "/");
  }, [pathname]);

  // 如果是首页，不显示返回按钮
  if (isHomePage) {
    return null;
  }

  return (
    <div className="fixed top-4 left-4 z-50 md:hidden">
      <button
        onClick={() => router.back()}
        className="bg-blue-600 hover:bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
        aria-label="返回上一页"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
    </div>
  );
}